import React, { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.2 }
        )

        const elements = sectionRef.current.querySelectorAll('.animate-fade-up')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const stats = [
        { number: '4+', label: 'Years Experience' },
        { number: '20+', label: 'Projects Done' },
        { number: '100%', label: 'Success Rate' },
        { number: '24/7', label: 'Support' },
    ]

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="h2 text-gradient animate-fade-up">About DKH STUDIOS</h2>
                    <div className="about-text animate-fade-up" style={{ transitionDelay: '0.2s' }}>
                        <p className="body-lg">
                            We are a collective of visionary designers and developers dedicated to pushing the boundaries of digital experiences. At DKH STUDIOS, we don't just build websites; we craft immersive digital ecosystems that captivate and convert.
                        </p>
                        <p className="body-lg">
                            Our approach combines bleeding-edge technology with premium aesthetics. We believe that every pixel matters and every interaction should feel magical. From complex web applications to stunning brand identities, we bring your vision to life with precision and passion.
                        </p>
                    </div>
                </div>

                <div className="about-stats">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card glass-card animate-fade-up"
                            style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                        >
                            <h3 className="h3 stat-number text-gradient">{stat.number}</h3>
                            <p className="stat-label">{stat.label}</p>
                            <div className="stat-glow"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Geometric Background Pattern */}
            <div className="about-bg-pattern">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
            </div>
        </section>
    )
}

export default About
