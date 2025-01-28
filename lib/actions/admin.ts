"use server";

import { revalidatePath } from "next/cache";
import { currentUser } from "../hooks/useCurrentUser";
import { db } from "../prisma";
import { del } from "@vercel/blob";
import { redirect } from "next/navigation";

type FormState = { error?: string } | undefined;

export async function approveSubmission(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const jobId = parseInt(formData.get("jobId") as string);

    const user = await currentUser();

    if (!user || user.role !== "ADMIN") {
      throw new Error("Not Authorized");
    }

    await db.job.update({
      where: { id: jobId },
      data: { approved: true },
    });

    revalidatePath("/");
  } catch (error) {
    let message = "unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}

export async function deleteJob(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const jobId = parseInt(formData.get("jobId") as string);

    const user = await currentUser();

    if (!user || user.role !== "ADMIN") {
      throw new Error("Not Authorized");
    }

    const existingJob = await db.job.findUnique({
      where: { id: jobId },
    });

    if (existingJob?.companyLogoUrl) {
      await del(existingJob.companyLogoUrl);
    }

    await db.job.delete({
      where: { id: jobId },
    });

    revalidatePath("/");
  } catch (error) {
    let message = "unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
  redirect("/admin");
}
