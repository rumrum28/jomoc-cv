'use client'

import { navLinks } from '@/constants'
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
import { BarChart2 } from 'lucide-react'
import Logo from './logo'

const Navbar = ({ type }: { type: string }) => {
  const [active, setActive] = useState<string>('')
  const urlParam = new URLSearchParams(
    typeof window !== 'undefined' ? window.location.search : ''
  )
  const id = urlParam.get('id')

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 z-50 bg-slate-100 dark:bg-slate-900 ${
        type === 'non-sticky' ? '' : 'fixed top-0'
      } bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md dark:bg-opacity-30`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          href="/portfolio"
          onClick={() => {
            setActive('')
            typeof window !== 'undefined' && window.scrollTo(0, 0)
          }}
        >
          <Logo />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 h-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`text-slate-800 dark:text-slate-300 text-secondary hover:text-black dark:hover:text-white cursor-pointer transition-all duration-300 ease-in-out hover:border-b-2 border-black dark:hover:border-white`}
            >
              <Link
                href={`/${link.id}?id=${link.id}`}
                onClick={() => {
                  setActive(id)
                  typeof window !== 'undefined' && window.scrollTo(0, 0)
                }}
                className="w-full"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Sheet>
            <SheetTrigger>
              <BarChart2 size={28} className="-rotate-90 " />
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
