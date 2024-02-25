import { Link } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link className="text-3xl text-white" size={32} />
      </div>
    </nav>
  )
}

export default Navbar
