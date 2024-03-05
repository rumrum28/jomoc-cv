import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'

type PlaneProps = {
  isRotating: boolean
}

export default function Plane({ isRotating, ...props }: any) {
  const ref = useRef()
  const { scene, animations } = useGLTF('/assets/3d/plane.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (isRotating) {
      actions['Take 001']?.play()
    } else {
      actions['Take 001']?.stop()
    }
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}
