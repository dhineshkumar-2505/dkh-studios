import React, { useEffect, useRef } from 'react'
import './Team.css'

const Team = () => {
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

    const team = [
        {
            name: 'Dhinesh',
            role: 'Founder & Lead',
            bio: 'Expert in full-stack development and system architecture, leading the technical vision and execution of premium projects.',
            image: '/images/team/dhineshkumarimg.jpg',
            socials: {
                linkedin: 'https://www.linkedin.com/in/dhinesh-kumar-a-77961029a/',
                whatsapp: 'https://wa.me/919345788537'
            },
            isPremium: false,
            isRedGlow: true,
            badge: 'Founder'
        },
        {
            name: 'Hemachandaran',
            role: 'Chief Executive Officer',
            bio: 'Visionary leader dedicated to empowering students through innovative technological solutions and comprehensive mentorship.',
            image: '/images/team/hemachandaran.jpg',
            socials: {
                linkedin: 'http://www.linkedin.com/in/hemachandaran',
                whatsapp: 'https://wa.me/919841099961'
            },
            isPremium: false,
            isRedGlow: true,
            badge: 'CEO'
        },
        {
            name: 'Dhaanush',
            role: 'Co-Founder & Strategist',
            bio: 'Strategic thinker focused on business growth, client success, and ensuring every project meets market standards.',
            image: '/images/team/dhaanush.jpg',
            socials: {
                linkedin: 'https://www.linkedin.com/in/dhaanush-nv-41694a257',
                whatsapp: 'https://wa.me/918148402413'
            },
            isPremium: false,
            isRedGlow: true,
            badge: 'Co-Founder'
        }
    ]

    return (
        <section id="team" className="team-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="h2 text-gradient animate-fade-up">Meet The Leadership</h2>
                    <p className="body-lg text-muted animate-fade-up" style={{ transitionDelay: '0.1s' }}>
                        The brilliant minds driving innovation at DKH STUDIOS.
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className={`team-card glass-card animate-fade-up interactive ${member.isPremium ? 'premium-card' : ''} ${member.isRedGlow ? 'red-glow-card' : ''}`}
                            style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                        >
                            {member.badge && (
                                <div className={member.isPremium ? 'premium-badge' : 'red-badge'}>
                                    {member.badge}
                                </div>
                            )}
                            <div className="team-image-wrapper">
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className="team-overlay"></div>
                            </div>
                            <h3 className="h3 team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <p className="body-md team-bio">{member.bio}</p>

                            <div className="team-socials">
                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                                <a href={member.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
