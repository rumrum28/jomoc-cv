import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

const beetleModel = '/assets/3d/black_ox_beetle.glb'

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh
    Object_8: THREE.SkinnedMesh
    GLTF_created_0_rootJoint: THREE.Bone
  }
  materials: {
    MI_BlackOxBeetle01_Eye: THREE.MeshStandardMaterial
    MI_BlackOxBeetle01_Body: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'AS_BlackOxBeetle_Attack_Basic_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Attack_RockFling_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Attack_Spin_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Attack_Thrash_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Charge_Attack_Hit_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Charge_Attack_Loop_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Charge_Attack_Miss_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Charge_Attack_Start_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Death_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Death_Pose_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Eat_End_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Eat_Loop_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Eat_Start_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Fidget_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Fidget_02_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Flinch_B2F_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Flinch_F2B_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Flinch_L2R_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Flinch_R2L_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Idle_Combat_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Idle_NC_01_SK_BlackOxBeetle01'
  | 'as_blackoxbeetle_jump_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Run_Backward_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Run_Forward_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Run_Forward_Left_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Run_Forward_Right_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Run_Left_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Run_Right_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Sleep_End_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Sleep_Loop_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Sleep_Start_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Stagger_B2F_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Stagger_F2B_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Stagger_L2R_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Stagger_R2L_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Stun_End_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Stun_Loop_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Stun_Start_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Turn_L_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Turn_R_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Walk_Backward_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Walk_Forward_01_SK_BlackOxBeetle01'
  | 'as_blackoxbeetle_walk_Forward_AO_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Walk_Forward_Left_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Walk_Forward_Right_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Walk_Left_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Walk_Right_01_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Walk_Turn_L_AO_SK_BlackOxBeetle01'
  | 'AS_BlackOxBeetle_Walk_Turn_R_AO_SK_BlackOxBeetle01'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Beetle({ currentAnimation, ...props }: any) {
  const beetleRef = useRef() as React.MutableRefObject<THREE.Group>
  type GLTFActions = Record<ActionName, THREE.AnimationAction>

  const { nodes, materials, animations } = useGLTF(beetleModel) as GLTFResult
  const { actions } = useAnimations(animations, beetleRef) as unknown as {
    actions: GLTFActions
  }

  useEffect(() => {
    // console.log(actions)
    // actions['AS_BlackOxBeetle_Run_Backward_01_SK_BlackOxBeetle01'].play()

    Object.values(actions).forEach((action: THREE.AnimationAction) =>
      action.stop()
    )

    if (actions[currentAnimation as ActionName]) {
      actions[currentAnimation as ActionName].play()
    }
  }, [currentAnimation])

  return (
    <group ref={beetleRef} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="SK_BlackOxBeetle01_73">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.MI_BlackOxBeetle01_Eye}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.MI_BlackOxBeetle01_Body}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="SK_BlackOxBeetle01001_72" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(beetleModel)
