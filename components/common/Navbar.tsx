"use client"

import { cn } from "@/lib/utils";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserButton from "@/components/auth/UserButton";
import AuthButton from "@/components/auth/AuthButton";
import Logo from "./Logo";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/settings";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header
      className={
        cn("shadow-sm")
        // "fixed z-50 flex w-full items-center gap-2 bg-background px-3 py-2 dark:bg-[#1F1F1F]",
      }
    >
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        {/* <Button asChild>
          <Link href="/jobs/new">Post a job</Link>
        </Button> */}
        <div className="flex items-center gap-x-2">
          <ModeToggle />
          <UserButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;