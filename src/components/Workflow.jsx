import React, { useEffect, useRef } from 'react'
import './Workflow.css'

const Workflow = () => {
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

    const steps = [
        {
            number: '01',
            title: 'Discovery',
            description: 'We dive deep into your vision, goals, and target audience to build a solid foundation.',
            icon: '🔍'
        },
        {
            number: '02',
            title: 'Strategy',
            description: 'Crafting a tailored roadmap and technical architecture to ensure scalability and success.',
            icon: '🗺️'
        },
        {
            number: '03',
            title: 'Design',
            description: 'Creating stunning, user-centric interfaces with premium aesthetics and intuitive flows.',
            icon: '🎨'
        },
        {
            number: '04',
            title: 'Development',
            description: 'Writing clean, efficient code using cutting-edge technologies for robust performance.',
            icon: '⚙️'
        },
        {
            number: '05',
            title: 'Launch',
            description: 'Rigorous testing and seamless deployment to bring your digital product to the world.',
            icon: '🚀'
        }
    ]

    return (
        <section id="workflow" className="workflow-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="h2 text-gradient animate-fade-up">Our Workflow</h2>
                    <p className="body-lg text-muted animate-fade-up" style={{ transitionDelay: '0.1s' }}>
                        A proven process for delivering exceptional results.
                    </p>
                </div>

                <div className="workflow-steps">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="workflow-step animate-fade-up interactive"
                            style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                        >
                            <div className="step-number-wrapper">
                                <span className="step-number text-gradient">{step.number}</span>
                                <div className="step-line"></div>
                            </div>

                            <div className="step-card glass-card">
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="h3 step-title">{step.title}</h3>
                                <p className="body-md step-desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Workflow
