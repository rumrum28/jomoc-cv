'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Feedbacks from '@/components/Feedbacks'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Tech from '@/components/Tech'
import Works from '@/components/Works'
import { StarsCanvas } from '@/components/canvas'

export default function Portfolio() {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}
