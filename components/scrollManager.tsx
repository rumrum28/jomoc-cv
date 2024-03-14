import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ScrollManager({
  section,
  onSectionChange,
}: {
  section: number
  onSectionChange: (section: number) => void
}) {
  const data = useScroll() as any
  const lastScroll = useRef<number>(0)
  const isAnimating = useRef<boolean>(false)

  data.fill.classList.add('top-0')
  data.fill.classList.add('absolute')

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true
      },
      onComplete: () => {
        isAnimating.current = false
      },
    })
  })

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current
    }

    const curSection = Math.round(data.scroll.current * data.pages)
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1)
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      onSectionChange(0)
    }
  })

  return null
}
