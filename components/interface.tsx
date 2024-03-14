import React from 'react'
import CTA from './cta'
import { languages, skills, skillsShort } from '@/constants'
import Contact from './Contact'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  )
}

export default function Interface() {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

function AboutSection() {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm <br />
        <span className="bg-white px-1 italic">John Eric Jomoc</span>
      </h1>

      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm a full-stack developer with a passion for building web applications.
        <br />
        I'm currently working as a software engineer at a startup.
      </motion.p>

      <CTA />
    </Section>
  )
}

function SkillsSection() {
  return (
    <Section>
      <motion.div whileInView={'visible'}>
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skillsShort.map((skill, index) => (
            <div key={index} className="w-64 flex">
              <motion.div
                className="w-16 h-16 flex items-center justify-center"
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 0.5 + index * 0.2,
                    },
                  },
                }}
              >
                <Image
                  src={skill.imageUrl}
                  alt={skill.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </motion.div>

              <div className="w-full flex flex-col items-start justify-center">
                <motion.h3
                  className="text-sm font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 0.5 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded ful"
                    style={{ width: `${skill.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

function ProjectSection() {
  return (
    <Section>
      <h1>Projects</h1>
    </Section>
  )
}

function ContactSection() {
  return (
    <Section>
      <Contact />
    </Section>
  )
}
