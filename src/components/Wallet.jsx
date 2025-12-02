import React, { useState, useEffect, useRef } from 'react'
import './Wallet.css'

const Wallet = () => {
    const [walletState, setWalletState] = useState('closed')
    const [activeCard, setActiveCard] = useState(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const walletRef = useRef(null)
    const cardRef = useRef(null)

    const handleWalletOpen = () => {
        if (walletState === 'closed') {
            setWalletState('opening')
            setTimeout(() => setWalletState('open'), 1500)
        }
    }

    const handleCardClick = (cardType) => {
        if (walletState !== 'open') return
        if (activeCard === cardType) {
            closeCard()
        } else if (activeCard) {
            closeCard(() => {
                setTimeout(() => setActiveCard(cardType), 500)
            })
        } else {
            setActiveCard(cardType)
        }
    }

    const closeCard = (callback) => {
        setActiveCard(null)
        if (callback) callback()
    }

    const handleExitClick = () => {
        if (activeCard) {
            // If card is open, just close the card
            closeCard()
        } else if (walletState === 'open') {
            // If no card is open, close the wallet
            setWalletState('closing')
            setTimeout(() => setWalletState('closed'), 1200)
        }
    }

    useEffect(() => {
        if (!activeCard) return
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            const x = (clientX / innerWidth - 0.5) * 20
            const y = (clientY / innerHeight - 0.5) * 20
            setMousePos({ x, y })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [activeCard])

    const isOpen = walletState === 'open' || walletState === 'opening'

    return (
        <section className="wallet-section">
            <div className="section-header">
                <h2 className="section-title">Social Links</h2>
                <p className="section-subtitle">Connect with us on social media</p>
            </div>

            <div className="wallet-container">
                {/* Cherry Red Exit Button */}
                {isOpen && (
                    <button className="cherry-exit-btn" onClick={handleExitClick} aria-label="Close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                )}

                <div className={`wallet-3d ${walletState}`} ref={walletRef}>
                    {/* Closed State */}
                    {walletState === 'closed' && (
                        <div className="wallet-closed">
                            <div className="leather-texture"></div>
                            <div className="stitching-border"></div>
                            <div className="ambient-overlay"></div>

                            <div className="brand-tag">
                                <span className="tag-text">DKH STUDIOS</span>
                            </div>

                            <button className="open-wallet-btn" onClick={handleWalletOpen}>
                                <span className="btn-text">OPEN</span>
                                <div className="btn-glow-effect"></div>
                            </button>
                        </div>
                    )}

                    {/* Open State */}
                    {isOpen && (
                        <div className="wallet-open">
                            <div className="wallet-left-panel">
                                <div className="panel-interior"></div>
                                <div className="card-slot">
                                    <div className="slot-label">Instagram</div>
                                    <div className="card-pocket">
                                        <div className="pocket-leather"></div>
                                        <div
                                            className={`credit-card instagram-card ${activeCard === 'instagram' ? 'card-active' : ''}`}
                                            onClick={() => handleCardClick('instagram')}
                                        >
                                            <div className="card-bg instagram-bg"></div>
                                            <div className="card-shine"></div>
                                            <div className="card-hologram"></div>
                                            <div className="card-content">
                                                <div className="card-brand-strip"></div>
                                                <span className="card-handle">dkhstudios_official</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wallet-right-panel">
                                <div className="panel-interior"></div>
                                <div className="card-slot">
                                    <div className="slot-label">YouTube</div>
                                    <div className="card-pocket">
                                        <div className="pocket-leather"></div>
                                        <div
                                            className={`credit-card youtube-card ${activeCard === 'youtube' ? 'card-active' : ''}`}
                                            onClick={() => handleCardClick('youtube')}
                                        >
                                            <div className="card-bg youtube-bg"></div>
                                            <div className="card-shine"></div>
                                            <div className="card-hologram"></div>
                                            <div className="card-content">
                                                <div className="card-brand-strip"></div>
                                                <span className="card-handle">@DkhStudios-32</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wallet-spine"></div>
                        </div>
                    )}
                </div>

                {/* Card Popup */}
                {activeCard && (
                    <div className="card-popup-overlay">
                        <div className="popup-backdrop"></div>

                        <div
                            className={`card-popup ${activeCard}-popup`}
                            ref={cardRef}
                            style={{
                                transform: `perspective(1200px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`
                            }}
                        >
                            <div className={`popup-card-bg ${activeCard}-gradient`}></div>
                            <div className="popup-hologram"></div>
                            <div className="popup-particles"></div>
                            <div className="popup-glow"></div>

                            <div className="popup-content">
                                <div className="popup-header">
                                    <div className="social-icon">
                                        {activeCard === 'instagram' ? (
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="contactless-chip">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="popup-body">
                                    <div className="qr-container">
                                        <img
                                            src={activeCard === 'instagram' ? '/images/instagram/instagram.jpg' : '/images/youtube/youtube.jpg'}
                                            alt="QR Code"
                                            className="qr-image"
                                        />
                                    </div>
                                    <div className="social-info">
                                        <h3 className="social-name">{activeCard === 'instagram' ? 'Instagram' : 'YouTube'}</h3>
                                        <p className="social-handle">{activeCard === 'instagram' ? 'dkhstudios_official' : '@DkhStudios-32'}</p>
                                    </div>
                                </div>

                                <div className="popup-footer">
                                    <a
                                        href={activeCard === 'instagram'
                                            ? 'https://www.instagram.com/dkhstudios_official?utm_source=qr&igsh=MXlyZ3A3a24xc2ls'
                                            : 'https://youtube.com/@dkhstudios-32?si=HeVd5rE42njPCueI'
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="visit-btn"
                                    >
                                        <span>Visit {activeCard === 'instagram' ? 'Page' : 'Channel'}</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Wallet
