import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'

function ThunderShape() {
    const meshRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        meshRef.current.rotation.y = time * 0.3
        meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1
    })

    return (
        <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
        >
            <mesh ref={meshRef}>
                {/* Thunder bolt shape approximation using cone */}
                <coneGeometry args={[1, 3, 4]} />
                <MeshDistortMaterial
                    color="#A020F0"
                    emissive="#00C2FF"
                    emissiveIntensity={0.5}
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Glow effect */}
            <pointLight position={[0, 0, 0]} intensity={2} color="#A020F0" distance={5} />
            <pointLight position={[0, 1, 0]} intensity={1.5} color="#00C2FF" distance={4} />
        </Float>
    )
}

const ThunderBolt = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
            dpr={[1, 2]} // Limit pixel ratio for performance
        >
            <ambientLight intensity={0.3} />
            <ThunderShape />
        </Canvas>
    )
}

export default ThunderBolt
