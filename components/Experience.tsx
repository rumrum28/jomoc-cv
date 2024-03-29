'use client'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences, skills } from '@/constants'
import Image from 'next/image'
import CTA from './cta'

const Experience = () => {
  return (
    <div className="py-16">
      <CTA />

      <div className="mt-10 flex items-center justify-center flex-col md:flex-row">
        <p>
          I have worked with some of the best companies in the world. Here are
          some of the highlights of my career.
        </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map(
            (
              experience: {
                title: string
                company_name: string
                icon: string
                iconBg: string
                date: string
                points: string[]
              },
              index: number
            ) => (
              <VerticalTimelineElement
                intersectionObserverProps={{
                  rootMargin: '0px 0px 120px 0px',
                }}
                visible
                key={index}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
                contentArrowStyle={{ borderRight: '7px solid  #f3e3d3' }}
                date={experience.date}
                icon={
                  <div className="flex items-center justify-center h-full w-full">
                    <Image
                      src={experience.icon}
                      alt={experience.title}
                      width={60}
                      height={60}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}
                >
                  <h3 className="text-darkBrown text-xl">{experience.title}</h3>
                  <h4
                    className="text-darkBrown font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </h4>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li key={index} className="text-darkBrown">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            )
          )}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
