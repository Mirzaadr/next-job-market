"use client";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { cn } from "@/lib/utils";
import { UserRole } from "@prisma/client";
import {
  FileCheck2Icon,
  FileEdit,
  HomeIcon,
  LogOutIcon,
  LucideIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";

type MenuItem = {
  icon: LucideIcon;
  label: string;
  href: string;
  visible?: Array<UserRole>;
};

const dashboardMenus: MenuItem[] = [
  {
    icon: HomeIcon,
    label: "Dashboard",
    href: "/dashboard",
    visible: ["ADMIN", "USER"],
  },
  {
    icon: FileEdit,
    label: "Applications",
    href: "/list/teachers",
    visible: ["ADMIN", "USER"],
  },
  {
    icon: FileCheck2Icon,
    label: "Approval",
    href: "/list/teachers",
    visible: ["ADMIN"],
  },
];

const Menu = ({ inSheet }: { inSheet?: boolean }) => {
  const { user } = useCurrentUser();
  return (
    <div className="mt-2 flex flex-1 flex-grow flex-col justify-between text-sm">
      <div className="space-y-1">
        {dashboardMenus.map(
          ({ href, label, icon: Icon, visible }, index) =>
            user?.role &&
            visible?.includes(user.role) && (
              <Link
                href={href}
                key={`${label}_${index}`}
                className={cn(
                  "flex items-center gap-6 rounded-md py-2 text-muted-foreground hover:bg-secondary-foreground hover:text-primary-foreground",
                  inSheet
                    ? "justify-start px-3"
                    : "justify-center md:px-2 lg:justify-start",
                )}
              >
                <Icon className="size-6" />
                <span className={`${inSheet ? "block" : "hidden lg:block"}`}>
                  {label}
                </span>
              </Link>
            ),
        )}
      </div>
      <div className="space-y-2">
        <Link
          href="/user/profile"
          className={cn(
            "flex items-center gap-6 rounded-md py-2 text-muted-foreground hover:bg-secondary-foreground hover:text-primary-foreground",
            inSheet
              ? "justify-start px-3"
              : "justify-center md:px-2 lg:justify-start",
          )}
        >
          <User2Icon className="size-6" />
          <span className={`${inSheet ? "block" : "hidden lg:block"}`}>
            Profile
          </span>
        </Link>
        <button
          className={cn(
            "flex w-full items-center gap-6 rounded-md py-2 text-muted-foreground hover:bg-secondary-foreground hover:text-primary-foreground",
            inSheet
              ? "justify-start px-3"
              : "justify-center md:px-2 lg:justify-start",
          )}
        >
          <LogOutIcon className="size-6" />
          <span className={`${inSheet ? "block" : "hidden lg:block"}`}>
            Sign Out
          </span>
        </button>
        <div className="py-5 text-center text-xs">
          &copy;{new Date().getFullYear()} FlowJobs, Inc.
        </div>
      </div>
    </div>
  );
};

export default Menu;
