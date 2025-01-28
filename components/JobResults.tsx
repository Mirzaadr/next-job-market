import { db } from "@/lib/prisma";
import JobListItem from "@/components/JobListItem";
import { JobFilterValues } from "@/lib/validations";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface JobResultsProps {
  filterValues: JobFilterValues;
  page?: number;
}
const JobResults = async ({ filterValues, page = 1 }: JobResultsProps) => {
  const { q, type, location, remote } = filterValues;
  const jobsPerPage = 6;
  const skip = (page - 1) * jobsPerPage;
  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");
  const searchFilter: Prisma.JobWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { companyName: { search: searchString } },
          { type: { search: searchString } },
          { locationType: { search: searchString } },
          { location: { search: searchString } },
        ],
      }
    : {};

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true },
    ],
  };
  const [jobs, totalResults] = await db.$transaction([
    db.job.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: jobsPerPage,
      skip,
    }),
    db.job.count({ where }),
  ]);
  return (
    <div className="grow space-y-4">
      {jobs.map((job) => (
        <Link href={`/jobs/${job.slug}`} key={job.id} className="block">
          <JobListItem job={job} />
        </Link>
      ))}
      {jobs.length === 0 && (
        <p className="m-auto text-center">
          No jobs found. Try adjusting your search filter.
        </p>
      )}
      {jobs.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / jobsPerPage)}
          filterValues={filterValues}
        />
      )}
    </div>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  filterValues: JobFilterValues;
}

function Pagination({
  currentPage,
  totalPages,
  filterValues: { q, type, location, remote },
}: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      ...(q && { q: q.trim() }),
      ...(type && { type }),
      ...(location && { location }),
      ...(remote && { remote: "true" }),
      page: page.toString(),
    });

    return `/?${searchParams.toString()}`;
  }

  return (
    <div className="flex justify-between">
      <Link
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage <= 1 && "invisible",
        )}
      >
        <ArrowLeft className="size-4" /> Previous Page
      </Link>
      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage >= totalPages && "invisible",
        )}
      >
        <ArrowRight className="size-4" /> Next Page
      </Link>
    </div>
  );
}

export default JobResults;
