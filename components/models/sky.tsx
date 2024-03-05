import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function Sky({ isRotating }: { isRotating: boolean }) {
  const skyRef = useRef() as any
  const sky = useGLTF('/assets/3d/sky.glb')

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.05 * delta
  })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
