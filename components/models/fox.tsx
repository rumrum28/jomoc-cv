import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const foxModel = '/assets/3d/fox.glb'

export function Fox({ ...props }) {
  const foxRef = useRef() as React.MutableRefObject<any>
  const { nodes, materials, animations } = useGLTF(foxModel)
  const { actions } = useAnimations(animations, foxRef) as any

  useEffect(() => {
    actions['idle'].play()
  }, [])

  return (
    <group
      ref={foxRef}
      {...props}
      dispose={null}
      scale={[0.1, 0.1, 0.1]}
      position={[0, -1, 0]}
      rotation={[0, 0, 0]}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={(nodes.Object_7 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_7 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={(nodes.Object_8 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_8 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={(nodes.Object_9 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_9 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={(nodes.Object_10 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_10 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={(nodes.Object_11 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_11 as THREE.SkinnedMesh).skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload(foxModel)
