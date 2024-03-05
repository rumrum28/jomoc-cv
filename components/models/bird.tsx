import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export default function Bird({ isRotating }: { isRotating: boolean }) {
  const birdRef = useRef() as React.MutableRefObject<any>
  const { scene, animations } = useGLTF('/assets/3d/bird.glb')
  const { actions } = useAnimations(animations, birdRef) as any

  useEffect(() => {
    actions['Take 001'].play()
  }, [])

  useFrame(({ clock, camera }) => {
    // update the Y position of the bird to simulate the flight in moving in sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01
    } else {
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  return (
    <mesh ref={birdRef} scale={[0.003, 0.003, 0.003]} position={[-5, 2, 1]}>
      <primitive object={scene} />
    </mesh>
  )
}
