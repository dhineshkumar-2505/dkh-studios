import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Process.css'

const processSteps = [
    {
        number: '01',
        title: 'Share Idea',
        description: 'You send us your idea, syllabus or requirement PDF.',
        icon: '💡',
        detail: 'We analyze your requirements and feasibility.'
    },
    {
        number: '02',
        title: 'Plan & Quote',
        description: 'We suggest tech, timeline and cost (student-friendly).',
        icon: '📋',
        detail: 'Transparent pricing with no hidden costs.'
    },
    {
        number: '03',
        title: 'Design & Prototype',
        description: 'We share UI or circuit mockups for approval.',
        icon: '🎨',
        detail: 'Visual confirmation before development starts.'
    },
    {
        number: '04',
        title: 'Build & Test',
        description: 'We develop, test and fix issues.',
        icon: '⚙️',
        detail: 'Rigorous testing for bugs and edge cases.'
    },
    {
        number: '05',
        title: 'Deliver & Support',
        description: 'We send code, report and support till submission.',
        icon: '🚀',
        detail: 'Full guidance for your final presentation.'
    }
]

const Process = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [activeStep, setActiveStep] = useState(null)

    return (
        <section id="process" className="section process-section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">How Your Project Flows</h2>
                    <p className="section-subtitle">
                        From <span className="highlight-text">PPT</span> to <span className="highlight-text">Submission</span>, we guide you through every step.
                    </p>
                </motion.div>

                <div className="process-timeline">
                    {/* Connecting Line */}
                    <div className="timeline-line"></div>

                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${activeStep === index ? 'active' : ''}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            onMouseEnter={() => setActiveStep(index)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            <div className="timeline-content">
                                <div className="step-number-badge">{step.number}</div>
                                <div className="step-icon-wrapper">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                                <div className={`step-detail ${activeStep === index ? 'show' : ''}`}>
                                    {step.detail}
                                </div>
                            </div>
                            <div className="timeline-dot"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="process-footer"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                >
                    <p>✨ Complete Guidance & Support Included ✨</p>
                </motion.div>
            </div>
        </section>
    )
}

export default Process
