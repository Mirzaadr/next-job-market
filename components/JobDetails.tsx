import { formatMoney } from "@/lib/utils";
import { Job } from "@prisma/client";
import {
  BanknoteIcon,
  BriefcaseIcon,
  Globe2Icon,
  MapPinIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "./Markdown";

interface JobDetailsProps {
  job: Job;
}
const JobDetails = ({
  job: {
    title,
    description,
    companyName,
    companyLogoUrl,
    type,
    locationType,
    location,
    applicationUrl,
    salary,
  },
}: JobDetailsProps) => {
  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <Image
            src={companyLogoUrl}
            alt={`${companyName}-logo`}
            width={100}
            height={100}
            className="rounded-xl"
          />
        )}
        <div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="font-semibold">
              {applicationUrl ? (
                <Link
                  href={new URL(applicationUrl).origin}
                  className="text-green-500 hover:underline"
                >
                  {companyName}
                </Link>
              ) : (
                <span>{companyName}</span>
              )}
            </p>
          </div>
          <div className="text-muted-foreground">
            <p className="flex items-center gap-1.5">
              <BriefcaseIcon className="size-4 shrink-0" />
              {type}
            </p>
            <p className="flex items-center gap-1.5">
              <MapPinIcon className="size-4 shrink-0" />
              {locationType}
            </p>
            <p className="flex items-center gap-1.5">
              <Globe2Icon className="size-4 shrink-0" />
              {location || "Worldwide"}
            </p>
            <p className="flex items-center gap-1.5">
              <BanknoteIcon className="size-4 shrink-0" />
              {formatMoney(salary)}
            </p>
          </div>
        </div>
      </div>
      <div>{description && <Markdown>{description}</Markdown>}</div>
    </section>
  );
};

export default JobDetails;
