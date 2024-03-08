import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const InfoBox = ({
  text,
  link,
  buttonText,
}: {
  text: string
  link: string
  buttonText: string
}) => (
  <div className="relative p-4 md:p-5 mx-2 max-w-96 text-white bg-blue-500 rounded border-b-4 border-r-4 border-blue-800 flex items-center justify-center flex-col">
    <p className="font-medium sm:text-xl text-center mb-3">{text}</p>
    <Link
      href={link}
      className="absolute -bottom-6 min-w-52 text-center rounded border-b-4 border-r-4 p-2 text-blue-500 bg-white border-slate-300"
    >
      {buttonText}
      <ArrowRight className="inline-block ml-2" size={18} />
    </Link>
  </div>
)

const renderContent: any = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5 bg-blue-500 rounded border-b-4 border-r-4 border-blue-800">
      Hi, I am <span className="font-semibold">John</span> 👋
      <br />
      <span className="text-sm">
        A lazy developer who loves to code and build things.
      </span>
    </h1>
  ),
  2: (
    <InfoBox
      text="I love to build things and solve problems. I am passionate about learning new technologies and building cool stuff."
      link="/about"
      buttonText="More about me"
    />
  ),
  3: (
    <InfoBox
      text="I have worked on a variety of projects, from web development to mobile apps. I am always looking for new projects to work on."
      link="/projects"
      buttonText="My projects"
    />
  ),
  4: (
    <InfoBox
      text="I am always open to new opportunities and challenges."
      link="/contact"
      buttonText="Let's talk"
    />
  ),
}

function HeroInfo({ currentStage }: { currentStage: number }) {
  return renderContent[currentStage] || null
}

export default HeroInfo
