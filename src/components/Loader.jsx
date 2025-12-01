import React, { useEffect, useState } from 'react'
import './Loader.css'

const Loader = ({ onComplete }) => {
    const [isFading, setIsFading] = useState(false)

    useEffect(() => {
        // Start fade out after 4.5 seconds
        const fadeTimer = setTimeout(() => {
            setIsFading(true)
        }, 4500)

        // Complete loading after 5 seconds
        const completeTimer = setTimeout(() => {
            onComplete()
        }, 5000)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(completeTimer)
        }
    }, [onComplete])

    return (
        <div className={`loader-container ${isFading ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <h1 className="loader-logo">
                    <span className="logo-text-reveal">DKH</span>
                    <span className="logo-text-reveal delay">STUDIOS</span>
                </h1>
                <div className="loader-progress"></div>
            </div>
        </div>
    )
}

export default Loader
