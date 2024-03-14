'use client'

import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Interface from './interface'
import { useState } from 'react'
import ScrollManager from './scrollManager'
import Menu from './menu'

export default function Home() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="w-full h-screen relative">
      <Canvas
        shadows
        camera={{ position: [3, 3, 3], fov: 30 }}
        className="w-full h-screen"
      >
        <color attach="background" args={['#ececec']} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>

      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </div>
  )
}
