import React, { useEffect, useRef } from 'react'
import './Services.css'

const Services = () => {
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
            { threshold: 0.1 }
        )

        const elements = sectionRef.current.querySelectorAll('.animate-fade-up')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const services = [
        {
            title: 'Web Development',
            description: 'Custom, high-performance websites built with React, Next.js, and modern frameworks.',
            icon: '💻'
        },
        {
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications for iOS and Android using React Native.',
            icon: '📱'
        },
        {
            title: 'UI/UX Design',
            description: 'User-centric design that combines beauty with functionality for intuitive experiences.',
            icon: '🎨'
        },
        {
            title: 'Digital Marketing',
            description: 'Strategic marketing campaigns to boost your online presence and drive conversions.',
            icon: '📈'
        },
        {
            title: 'Branding',
            description: 'Complete brand identity packages including logos, typography, and visual guidelines.',
            icon: '✨'
        },
        {
            title: 'Consulting',
            description: 'Expert advice on digital strategy, technology stack selection, and product roadmaps.',
            icon: '💡'
        }
    ]

    return (
        <section id="services" className="services-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="h2 text-gradient animate-fade-up">Our Services</h2>
                    <p className="body-lg text-muted animate-fade-up" style={{ transitionDelay: '0.1s' }}>
                        Comprehensive digital solutions tailored to your business needs.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card glass-card animate-fade-up interactive"
                            style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="service-icon-wrapper">
                                <span className="service-icon">{service.icon}</span>
                                <div className="icon-glow"></div>
                            </div>
                            <h3 className="h3 service-title">{service.title}</h3>
                            <p className="body-md service-desc">{service.description}</p>
                            <a href="#contact" className="service-link">
                                Learn More <span className="arrow">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
