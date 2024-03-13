import Navbar from '@/components/Navbar'
import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen">
      <Navbar type="non-sticky" />
      {children}
    </div>
  )
}
