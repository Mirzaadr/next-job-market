import { Job } from "@prisma/client";
import Image from "next/image";
import CompanyLogoPlaceholder from "@/public/company-logo-placeholder.png";
import {
  BanknoteIcon,
  BriefcaseIcon,
  ClockIcon,
  Globe2,
  Globe2Icon,
  MapPin,
  MapPinIcon,
} from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "./Badge";

interface JobListItemProps {
  job: Job;
}

const JobListItem = ({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) => {
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image
        src={companyLogoUrl || CompanyLogoPlaceholder}
        alt={`${companyName}-logo`}
        width={100}
        height={100}
        className="self-center rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div className="">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
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
          <p className="flex items-center gap-1.5 sm:hidden">
            <ClockIcon className="size-4 shrink-0" />
            {relativeDate(createdAt)}
          </p>
        </div>
        <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
          <Badge>{type}</Badge>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <ClockIcon className="size-4" />
            {relativeDate(createdAt)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default JobListItem;
