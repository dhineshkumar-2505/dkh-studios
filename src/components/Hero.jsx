import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [currentQuote, setCurrentQuote] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const quotes = [
        "Building tomorrow's innovations today - Your complete student project partner from code to presentation",
        "Empowering students with cutting-edge projects and complete guidance from concept to presentation",
        "Transform your ideas into reality - We don't just build projects, we build confidence",
        "Your project success story starts here - Expert development + Complete presentation support"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentQuote((prev) => (prev + 1) % quotes.length)
                setIsAnimating(false)
            }, 500) // Wait for fade out
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="hero-section">
            <div className="hero-particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${10 + Math.random() * 10}s`
                    }}></div>
                ))}
            </div>

            <div className="container hero-content">
                <div className="hero-text-wrapper">
                    <h1 className="hero-title">
                        <span className="block-reveal">DKH STUDIOS</span>
                        <span className="gradient-text">Innovate. Build. Succeed.</span>
                    </h1>

                    <div className="quote-container">
                        <p className={`hero-subtitle quote-text ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                            "{quotes[currentQuote]}"
                        </p>
                    </div>

                    <div className="hero-cta-wrapper">
                        <button
                            className="btn btn-primary hero-btn interactive"
                            onClick={() => window.location.href = '/register'}
                        >
                            <span>Start Your Project</span>
                            <div className="btn-glow-pulse"></div>
                            <div className="btn-shine"></div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span className="scroll-text">Scroll to Explore</span>
            </div>
        </section>
    )
}

export default Hero
