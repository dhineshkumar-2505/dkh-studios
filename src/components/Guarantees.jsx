import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Guarantees.css'

const guarantees = [
    {
        icon: '💰',
        title: 'Minimum Budget Projects',
        description: 'We optimize cost so even mini projects fit your budget.'
    },
    {
        icon: '⚡',
        title: 'Quick Response',
        description: 'WhatsApp / Mail reply usually within a few hours.'
    },
    {
        icon: '⏰',
        title: 'On-Time Delivery',
        description: 'We match your review and final submission dates.'
    },
    {
        icon: '🤝',
        title: 'End-to-End Support',
        description: 'From idea to report, we stay with you.'
    },
    {
        icon: '🎯',
        title: 'Customizable Scope',
        description: 'Basic model to advanced – you decide.'
    }
]

const Guarantees = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="guarantees" className="section guarantees-section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Why Students & Clients Choose Us</h2>
                    <p className="section-subtitle">
                        Our commitment to quality, affordability, and support
                    </p>
                </motion.div>

                <div className="guarantees-grid">
                    {guarantees.map((guarantee, index) => (
                        <motion.div
                            key={index}
                            className="guarantee-pill"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="guarantee-icon">{guarantee.icon}</div>
                            <div className="guarantee-content">
                                <h3 className="guarantee-title">{guarantee.title}</h3>
                                <p className="guarantee-description">{guarantee.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Guarantees
