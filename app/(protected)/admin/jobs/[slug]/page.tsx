import JobDetails from "@/components/JobDetails";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import AdminSidebar from "./AdminSidebar";

interface AdminSingleJobPageProps {
  params: Promise<{ slug: string }>;
}

const AdminSingleJobPage = async ({ params }: AdminSingleJobPageProps) => {
  const { slug } = await params;
  const job = await db.job.findUnique({
    where: { slug },
  });

  if (!job) return notFound();

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobDetails job={job} />
      <AdminSidebar job={job} />
    </main>
  );
};

export default AdminSingleJobPage;
