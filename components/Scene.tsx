import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function RotatingModel({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const modelRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta
    }
  })

  return <primitive ref={modelRef} object={scene} />
}

export default function Scene() {
  return (
    <Canvas>
      <RotatingModel url="/crystal.glb" />
      <OrbitControls />
      <Environment preset="dawn" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </Canvas>
  )
}
