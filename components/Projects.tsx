import { projects } from '@/constants'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CTA from './cta'

const Projects = () => {
  return (
    <section className="max-container max-w-7xl mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold whitespace-nowrap">My Projects</h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-100">
        <p>
          I have been working with vanillaJs, Node.js and Express for the
          backend, and React and Next.js for the frontend. I also have
          experience with PHP.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={index}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front flex justify-center items-center">
                <Image
                  src={project.iconUrl}
                  alt="Project Icon"
                  width={200}
                  height={200}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500 dark:text-slate-100">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noeferrer"
                  className="font-semibold text-blue-600"
                >
                  View Project
                </Link>
                <ArrowRight size={24} className="inline ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  )
}

export default Projects
