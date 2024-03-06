'use client'

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import { Island } from './models/island'
import Sky from './models/sky'
import Bird from './models/bird'
import Plane from './models/plane'
import HeroInfo from './heroInfo'
import { Fox } from './models/fox'

const adjustIslandForScreenSize = () => {
  let screenScale = null
  let screenPosition = [0, -6.5, -43]
  let rotation = [0.1, 4.7, 0]

  // [0,0,0] = [z,y,z]
  if (typeof window === 'undefined') {
    screenScale = [1, 1, 1]
  } else if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9]
  } else {
    screenScale = [1, 1, 1]
  }

  return [screenScale, screenPosition, rotation]
}

const adjustPlaneForScreenSize = () => {
  let screenScale, screenPosition

  // [0,0,0] = [z,y,z]
  if (typeof window === 'undefined') {
    screenScale = [3, 3, 3]
    screenPosition = [0, -4, -4]
  } else if (window.innerWidth < 768) {
    screenScale = [1.5, 1.5, 1.5]
    screenPosition = [0, -1.5, 0]
  } else {
    screenScale = [3, 3, 3]
    screenPosition = [0, -4, -4]
  }

  return [screenScale, screenPosition]
}

const Hero = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize()
  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <section className="w-full h-screen relative bg-white">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage !== 0 && <HeroInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Sky isRotating={isRotating} />
          <Bird />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Hero
