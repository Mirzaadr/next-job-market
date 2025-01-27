"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOutIcon, User2 } from 'lucide-react';
import SignoutButton from './SignoutButton';
import { useCurrentUser } from '@/lib/hooks/useCurrentUser';
import Spinner from '@/components/common/Spinner';
import AuthButton from './AuthButton';
import { Button } from '@/components/ui/button';

type Props = {
  label?: string;
};

const UserButton = (props: Props) => {
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Spinner size={"icon"}/>
  }

  if (!user) {
    return (
      <AuthButton asChild>
        <Button variant="outline" size="sm">
          Log In
        </Button>
      </AuthButton>
    )
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage style={{width: "40px", height: "40px"}} src={user?.image || ""} />
            <AvatarFallback className='bg-background'>
              <User2 className='text-primary size-4'/>
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40' align='end'>
          <DropdownMenuLabel >
            <p className='font-semibold'>{user.name}</p>
            <p className='text-xs font-thin text-muted-foreground'>{user.email}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <SignoutButton>
            <DropdownMenuItem>
              <LogOutIcon className='size-4 mr-2' />
              Logout
            </DropdownMenuItem>
          </SignoutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default UserButton;