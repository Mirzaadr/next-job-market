"use client";

import UserButton from "@/components/auth/UserButton";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import Link from "next/link";

const AdminNavbar = () => {
  const user = useCurrentUser();
  return (
    <div className="px-3">
      <div className="m-auto flex h-10 max-w-5xl items-center justify-between gap-2 px-3 py-5">
        <Link href={"/admin"} className="font-semibold underline">
          Admin Dashboard
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default AdminNavbar;
