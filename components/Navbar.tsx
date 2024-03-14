'use client'

import { navLinks } from '@/constants'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { BarChart2 } from 'lucide-react'
import Logo from './logo'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import ThemeSwitcher from './themeSwitcher'

const Navbar = ({ type }: { type: string }) => {
  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 z-50 bg-lightBrown dark:bg-darkBrown ${
        type === 'non-sticky' ? '' : 'fixed top-0'
      } bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md dark:bg-opacity-30`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          href="/portfolio"
          onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}
        >
          <Logo />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 h-6 items-center justify-center">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`text-primaryBrown dark:text-lightBrown hover:text-darkBrown dark:hover:text-primaryBrown cursor-pointer `}
            >
              <Link
                href={`/${link.id}`}
                onClick={() =>
                  typeof window !== 'undefined' && window.scrollTo(0, 0)
                }
                className="w-full"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Sheet>
            <SheetTrigger>
              <BarChart2 size={28} className="-rotate-90 " />
            </SheetTrigger>
            <SheetContent className="bg-lightBrown text-darkBrown dark:bg-darkBrown dark:text-lightBrown">
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
