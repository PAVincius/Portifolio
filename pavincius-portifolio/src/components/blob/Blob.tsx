/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {MeshReflectorMaterial} from '@react-three/drei'

export default function Blob(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  //useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.2 : 1}
        //onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <sphereGeometry args={[3, 128, 128  ]} />
        <MeshReflectorMaterial color={hovered ? '#fafafa' : '#383838'} mirror={0} />
      </mesh>
  )
}
