import H1 from "@/components/common/h1";
import JobListItem from "@/components/JobListItem";
import { db } from "@/lib/prisma";
import Link from "next/link";

const AdminPage = async () => {
  const unapprovedJobs = await db.job.findMany({
    where: { approved: false },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <H1 className="text-center">Admin Dashboard</H1>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Unapproved Jobs</h2>
        {unapprovedJobs.map((job) => (
          <Link href={`/admin/jobs/${job.slug}`} key={job.id} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
        {unapprovedJobs.length === 0 && (
          <p className="text-muted-foreground">No unapproved jobs</p>
        )}
      </section>
    </main>
  );
};

export default AdminPage;
