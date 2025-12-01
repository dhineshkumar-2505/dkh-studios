import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function TechIcon({ position, icon, color }) {
    const meshRef = useRef()
    const angle = useRef(Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        angle.current += 0.01

        const radius = 3
        meshRef.current.position.x = Math.cos(angle.current) * radius
        meshRef.current.position.y = Math.sin(angle.current * 0.7) * radius * 0.5
        meshRef.current.position.z = Math.sin(angle.current) * radius

        meshRef.current.lookAt(0, 0, 0)
    })

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
    )
}

function OrbScene() {
    const orbRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        orbRef.current.rotation.y = time * 0.2
        orbRef.current.rotation.x = Math.sin(time * 0.3) * 0.1
    })

    const techIcons = [
        { color: '#61DAFB', name: 'React' },
        { color: '#F7DF1E', name: 'JavaScript' },
        { color: '#00758F', name: 'Arduino' },
        { color: '#FF6B6B', name: 'Node.js' },
        { color: '#00C2FF', name: 'ESP32' },
        { color: '#A020F0', name: 'Python' },
    ]

    return (
        <group ref={orbRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[1.5, 32, 32]}>
                    <MeshDistortMaterial
                        color="#1a1a2e"
                        emissive="#A020F0"
                        emissiveIntensity={0.2}
                        distort={0.2}
                        speed={1.5}
                        roughness={0.4}
                        metalness={0.8}
                        wireframe={false}
                    />
                </Sphere>
            </Float>

            {techIcons.map((tech, i) => (
                <TechIcon
                    key={i}
                    position={[0, 0, 0]}
                    icon={tech.name}
                    color={tech.color}
                />
            ))}

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00C2FF" />
        </group>
    )
}

const TechOrb = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
            dpr={[1, 2]} // Limit pixel ratio for performance
        >
            <OrbScene />
        </Canvas>
    )
}

export default TechOrb
