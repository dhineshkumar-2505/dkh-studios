import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
    const sectionRef = useRef(null)
    const navigate = useNavigate()

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

    const contacts = [
        {
            name: 'Dhinesh Kumar',
            phone: '9345788537',
            role: 'Founder & Lead',
            initial: 'D'
        },
        {
            name: 'Dhaanush',
            phone: '8148402413',
            role: 'Co-Founder',
            initial: 'D'
        },
        {
            name: 'Hemachandaran',
            phone: '9841099961',
            role: 'CEO',
            initial: 'H'
        }
    ]

    const scrollToRegistration = () => {
        navigate('/register')
    }

    return (
        <section id="contact" className="contact-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="h2 text-gradient animate-fade-up">Get In Touch</h2>
                    <p className="body-lg text-muted animate-fade-up" style={{ transitionDelay: '0.1s' }}>
                        Ready to start your project? Contact our team directly.
                    </p>
                </div>

                <div className="contact-grid">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="contact-card glass-card animate-fade-up interactive"
                            style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="contact-avatar">
                                <span className="avatar-initial">{contact.initial}</span>
                                <div className="avatar-glow"></div>
                            </div>
                            <h3 className="h3 contact-name">{contact.name}</h3>
                            <p className="contact-role">{contact.role}</p>
                            <a href={`tel:+91${contact.phone}`} className="contact-phone btn btn-primary">
                                <span className="phone-icon">📞</span> {contact.phone}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="contact-cta-wrapper animate-fade-up" style={{ transitionDelay: '0.5s' }}>
                    <button
                        className="btn btn-primary hero-btn interactive"
                        onClick={scrollToRegistration}
                    >
                        <span>Register for Next Step</span>
                        <div className="btn-glow-pulse"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
