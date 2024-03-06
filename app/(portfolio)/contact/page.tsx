import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-start h-[calc(100vh-76px)] mt-[76px] w-full max-w-7xl mx-auto">
        <Contact />
      </section>
    </>
  )
}
