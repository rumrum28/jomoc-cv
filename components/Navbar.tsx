import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState<string>('')

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          href="/"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src="/assets/logo/png/logo-no-background.png"
            alt="logo"
            className="w-9 object-contain"
            width={36}
            height={36}
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
