"use client"
import UserButton from '@/components/auth/UserButton';
import { ModeToggle } from '@/components/common/ModeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='bg-secondary py-2 px-3 shadow-sm w-full flex justify-between items-center'>
      <div className='flex gap-x-2'>
      </div>
      <div className='flex gap-x-2 items-center'>
        {/* add other navbar components */}
        <ModeToggle />
        <UserButton />
      </div>
    </nav>
  )
}

export default Navbar;