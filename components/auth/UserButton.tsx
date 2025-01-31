"use client"
import Spinner from "@/components/common/Spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { LogOutIcon, SquareChartGantt, User2 } from "lucide-react";
import Link from "next/link";
import AuthButton from "./AuthButton";
import SignoutButton from "./SignoutButton";

type Props = {
  label?: string;
};

const UserButton = (props: Props) => {
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Spinner size={"icon"} />;
  }

  if (!user) {
    return (
      <AuthButton asChild>
        <Button variant="outline">Sign In</Button>
      </AuthButton>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              style={{ width: "40px", height: "40px" }}
              src={user?.image || ""}
            />
            <AvatarFallback className="bg-background">
              <User2 className="size-4 text-primary" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuLabel>
            <p className="font-semibold">{user.name}</p>
            <p className="text-xs font-thin text-muted-foreground">
              {user.email}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href={"/dashboard"}>
              <SquareChartGantt className="mr-2 size-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <SignoutButton>
            <DropdownMenuItem>
              <LogOutIcon className="mr-2 size-4" />
              Logout
            </DropdownMenuItem>
          </SignoutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserButton;