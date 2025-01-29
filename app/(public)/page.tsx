import H1 from "@/components/common/h1";
import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";
import { JobFilterValues } from "@/lib/validations";

interface HomePageProps {
  searchParams: Promise<{
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  }>;
}

export async function generateMetadata({ searchParams }: HomePageProps) {
  const params = await searchParams;
  return {
    title: `${getTitle({
      ...params,
      remote: params.remote === "true",
    })} | FlowJobs`,
  };
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? "Remote developer jobs"
        : "All developer jobs";
  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const filterValues: JobFilterValues = {
    ...params,
    remote: params.remote === "true",
  };
  return (
    <>
      <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
        <div className="space-y-5 text-center">
          <H1>{getTitle(filterValues)}</H1>
          <p className="text-muted-foreground">Find your dream job</p>
        </div>
        <section className="flex flex-col gap-4 md:flex-row">
          <JobFilterSidebar defaultValues={filterValues} />
          <JobResults
            filterValues={filterValues}
            page={params.page ? parseInt(params.page) : undefined}
          />
        </section>
      </main>
    </>
  );
}
