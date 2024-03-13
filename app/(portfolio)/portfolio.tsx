import About from '@/components/about'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'

export default function Portfolio() {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar type="default" />

      <Hero />
      <About />
      <hr className="border-slate-200" />
      <Projects />

      <div className="relative z-0 mx-auto max-w-7xl">
        <hr className="border-slate-200" />
        <Contact />
      </div>
    </div>
  )
}
