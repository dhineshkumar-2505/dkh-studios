import React, { useEffect, useState, useRef } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const ringRef = useRef(null)
    const [isPointer, setIsPointer] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [particles, setParticles] = useState([])

    useEffect(() => {
        // Check if device supports hover (not touch device)
        const isTouchDevice = window.matchMedia('(hover: none)').matches
        if (isTouchDevice) {
            setIsHidden(true)
            return
        }

        const moveCursor = (e) => {
            const { clientX, clientY } = e

            if (cursorRef.current && ringRef.current) {
                cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`
                ringRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`
            }

            // Add particle every few frames for performance
            if (Math.random() > 0.7) {
                createParticle(clientX, clientY)
            }
        }

        const createParticle = (x, y) => {
            const id = Date.now() + Math.random()
            const newParticle = { id, x, y }

            setParticles(prev => [...prev.slice(-15), newParticle]) // Limit particles

            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== id))
            }, 600)
        }

        const handleMouseOver = (e) => {
            const target = e.target
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('interactive') ||
                target.classList.contains('card')
            ) {
                setIsPointer(true)
            } else {
                setIsPointer(false)
            }
        }

        const handleMouseDown = () => {
            if (cursorRef.current) cursorRef.current.classList.add('active')
            if (ringRef.current) ringRef.current.classList.add('active')
        }

        const handleMouseUp = () => {
            if (cursorRef.current) cursorRef.current.classList.remove('active')
            if (ringRef.current) ringRef.current.classList.remove('active')
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    if (isHidden) return null

    return (
        <>
            {/* Particle Trail */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="cursor-particle"
                    style={{ left: `${particle.x}px`, top: `${particle.y}px` }}
                />
            ))}

            {/* Main Cursor Orb */}
            <div ref={cursorRef} className={`custom-cursor ${isPointer ? 'pointer' : ''}`}>
                <div className="cursor-glow" />
            </div>

            {/* Outer Ring */}
            <div ref={ringRef} className={`cursor-ring ${isPointer ? 'pointer' : ''}`} />
        </>
    )
}

export default CustomCursor
