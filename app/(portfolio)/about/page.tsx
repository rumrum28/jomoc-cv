import Navbar from '@/components/Navbar'
import AboutExprience from '@/components/aboutExperience'
import CTA from '@/components/cta'
import { skills } from '@/constants'

export default function page() {
  return (
    <>
      <Navbar type="non-sticky" />
      <section className="max-container max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">
          Hello, I'm <span className="about-gradient-text">John</span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I'm a full-stack developer and designer. I love to build and design
            things that are useful and beautiful. I'm passionate about creating
            things that make a difference. I'm also a big fan of open-source
            software and I love to contribute to the community.
          </p>
        </div>

        <div className="py-10 flex flex-col ">
          <h3 className="text-xl font-semibold">Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map(
              (
                skill: {
                  imageUrl: string
                  name: string
                  type: string
                },
                index: number
              ) => (
                <div key={index} className="block-container w-20 h-20">
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="py-16">
          <h3 className="text-xl font-semibold">Work Exprience</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I have worked with some of the best companies in the world. Here
              are some of the highlights of my career.
            </p>
          </div>

          <AboutExprience />
          <CTA />
        </div>
      </section>
    </>
  )
}
