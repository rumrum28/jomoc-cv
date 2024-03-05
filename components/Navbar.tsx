'use client'

import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const Navbar = () => {
  const [active, setActive] = useState<string>('')

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          href="/portfolio"
          onClick={() => {
            setActive('')
            typeof window !== 'undefined' && window.scrollTo(0, 0)
          }}
        >
          <Image
            src="/assets/logo/png/logo-no-background.png"
            alt="logo"
            className="w-9 h-9 object-contain bg-white rounded-lg"
            width={36}
            height={36}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer sm:block hidden">
            Jomoc <span>| Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 h-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={
                active === link.title
                  ? 'text-white border-b-2 border-white'
                  : 'text-secondary hover:text-white cursor-pointer transition-all duration-300 ease-in-out hover:border-b-2 hover:border-white'
              }
            >
              <Link
                href={`/${link.id}`}
                onClick={() => {
                  setActive(link.id)
                  typeof window !== 'undefined' && window.scrollTo(0, 0)
                }}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/menu.svg"
                alt="menu"
                className="w-6 h-6 object-contain cursor-pointer"
                width={24}
                height={24}
              />
            </SheetTrigger>
            <SheetContent className="bg-white text-black dark:bg-black dark:text-white">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
