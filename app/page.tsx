import AuthButton from "@/components/auth/AuthButton";
import H1 from "@/components/common/h1";
import Navbar from "@/components/common/Navbar";
import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobListItem from "@/components/JobListItem";
import JobResults from "@/components/JobResults";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { JobFilterValues } from "@/lib/validations";

interface HomePageProps {
  searchParams: Promise<{
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const filterValues: JobFilterValues = {
    ...params,
    remote: params.remote === "true",
  };
  return (
    <>
      {/* <Navbar /> */}
      <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
        <div className="space-y-5 text-center">
          <H1>Developer Jobs</H1>
          <p className="text-muted-foreground">Find your dream job</p>
        </div>
        <section className="flex flex-col gap-4 md:flex-row">
          <JobFilterSidebar defaultValues={filterValues} />
          <JobResults filterValues={filterValues} />
        </section>
      </main>
    </>
  );
}
