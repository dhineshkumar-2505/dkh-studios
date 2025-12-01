import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }

            // Active section detection
            const sections = ['hero', 'about', 'services', 'projects', 'workflow', 'contact', 'team']
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrolled])

    const scrollToSection = (sectionId) => {
        // Check if we're on the registration page
        if (location.pathname === '/register') {
            // Navigate to home page first, then scroll
            navigate('/')
            setTimeout(() => {
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        } else {
            // Already on home page, just scroll
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
        setMobileMenuOpen(false)
    }

    const handleLogoClick = (e) => {
        e.preventDefault()
        if (location.pathname === '/register') {
            navigate('/')
        } else {
            scrollToSection('hero')
        }
    }

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'projects', label: 'Projects' },
        { id: 'workflow', label: 'Workflow' },
        { id: 'contact', label: 'Contact' },
        { id: 'team', label: 'Team' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo interactive" onClick={handleLogoClick}>
                    <span className="logo-text">DKH <span className="logo-highlight">STUDIOS</span></span>
                    <div className="logo-glow"></div>
                </a>

                <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`nav-link interactive ${activeSection === link.id ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection(link.id)
                            }}
                        >
                            {link.label}
                            <span className="nav-underline"></span>
                        </a>
                    ))}
                    <button
                        className="btn btn-primary nav-cta interactive"
                        onClick={() => navigate('/register')}
                    >
                        Get Started
                    </button>
                </div>

                <div
                    className={`mobile-menu-toggle interactive ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
