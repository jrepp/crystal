'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Environment } from '@react-three/drei'

function Scene() {
  return (
    <>
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="hotpink" />
      </Box>
      <OrbitControls enablePan={false} enableZoom={false} />
      <Environment preset="dawn" />
    </>
  )
}

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <Scene />
      </Canvas>
    </main>
  )
}
