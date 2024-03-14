import { skills } from '@/constants'
import Experience from './Experience'

const About = () => {
  return (
    <section className="max-container max-w-7xl mx-auto p-4 mt-20 text-primaryBrown dark:text-lightBrown">
      <h1 className="text-2xl font-bold whitespace-nowrap">
        Hello, I'm JOHN JOMOC
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-darkBrown dark:text-lightBrown">
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

      <Experience />
    </section>
  )
}

export default About
