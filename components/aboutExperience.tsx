'use client'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '@/constants'
import Image from 'next/image'

const AboutExprience = () => {
  return (
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
              intersectionObserverProps={{ rootMargin: '0px 0px 120px 0px' }}
              visible
              key={index}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
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
                <h3 className="text-black text-xl">{experience.title}</h3>
                <h4
                  className="text-black font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </h4>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </div>
  )
}

export default AboutExprience
