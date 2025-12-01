import React, { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col">
                        <div className="footer-logo">
                            <span className="logo-text">DKH STUDIOS</span>
                        </div>
                        <p className="footer-desc">
                            Transforming ideas into digital reality with premium design and cutting-edge technology.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-icon">LinkedIn</a>
                            <a href="#" className="social-icon">Twitter</a>
                            <a href="#" className="social-icon">Instagram</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#about" className="footer-link">About Us</a></li>
                            <li><a href="#services" className="footer-link">Services</a></li>
                            <li><a href="#projects" className="footer-link">Projects</a></li>
                            <li><a href="#workflow" className="footer-link">Workflow</a></li>
                            <li><a href="#team" className="footer-link">Team</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📧</span>
                                <a href="mailto:dkhstudiosbuisness@gmail.com" className="footer-link">dkhstudiosbuisness@gmail.com</a>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                <a href="tel:+919345788537" className="footer-link">+91 93457 88537</a>
                            </li>
                            <li>
                                <span className="contact-icon">📍</span>
                                <span>Chennai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} DKH STUDIOS. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                className={`back-to-top interactive ${showTopBtn ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to Top"
            >
                ↑
            </button>
        </footer>
    )
}

export default Footer
