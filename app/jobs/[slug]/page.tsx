import JobDetails from "@/components/JobDetails";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface SingleJobPageProps {
  params: Promise<{ slug: string }>;
}

const getJob = cache(async (slug: string) => {
  const job = await db.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return job;
});

export async function generateStaticParams() {
  const jobs = await db.job.findMany({
    where: { approved: true },
    select: { slug: true },
  });

  return jobs.map(({ slug }) => slug);
}

export async function generateMetadata({
  params,
}: SingleJobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);

  return {
    title: job.title,
  };
}
const SingleJobPage = async ({ params }: SingleJobPageProps) => {
  const { slug } = await params;
  const job = await getJob(slug);
  const { applicationEmail, applicationUrl } = job;
  const applicationLink = applicationEmail
    ? `mailto:${applicationEmail}`
    : applicationUrl;

  if (!applicationLink) {
    console.error("Job has no application link or email");
    notFound();
  }

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobDetails job={job} />
      <aside>
        <Button asChild>
          <a href={applicationLink} className="w-40 md:w-fit">
            Apply now
          </a>
        </Button>
      </aside>
    </main>
  );
};

export default SingleJobPage;
