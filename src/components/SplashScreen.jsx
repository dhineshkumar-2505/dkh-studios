import { useState, useEffect, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './SplashScreen.css'

const Spline = lazy(() => import('@splinetool/react-spline'))

const SplashScreen = ({ onComplete }) => {
    const [stage, setStage] = useState(1) // 1: Welcome, 2: 3D Model, 3: Done

    useEffect(() => {
        // Stage 1: Welcome message (3 seconds)
        const welcomeTimer = setTimeout(() => {
            setStage(2)
        }, 3000)

        return () => clearTimeout(welcomeTimer)
    }, [])

    useEffect(() => {
        if (stage === 2) {
            // Stage 2: 3D Model showcase - wait for progress bar to complete (10 seconds)
            const modelTimer = setTimeout(() => {
                setStage(3)
                setTimeout(onComplete, 800) // Smooth fade out
            }, 10500) // 10 seconds for progress + 0.5s buffer

            return () => clearTimeout(modelTimer)
        }
    }, [stage, onComplete])

    return (
        <div className="splash-wrapper">
            <AnimatePresence mode="wait">
                {/* Stage 1: Welcome Message */}
                {stage === 1 && (
                    <motion.div
                        key="welcome"
                        className="splash-stage welcome-stage"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Animated Background */}
                        <div className="welcome-background">
                            <div className="gradient-orb orb-1"></div>
                            <div className="gradient-orb orb-2"></div>
                            <div className="gradient-orb orb-3"></div>
                        </div>

                        {/* Welcome Content */}
                        <motion.div
                            className="welcome-content"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <motion.div
                                className="welcome-icon"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                            >
                                ⚡
                            </motion.div>

                            <h1 className="welcome-title">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    Welcome to
                                </motion.span>
                                <motion.span
                                    className="brand-name"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    DKH Studio
                                </motion.span>
                            </h1>

                            <motion.p
                                className="welcome-tagline"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                Building Your Ideas — Web, Hardware & AI
                            </motion.p>

                            <motion.div
                                className="welcome-loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            >
                                <div className="loader-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Stage 2: 3D Model Showcase */}
                {stage === 2 && (
                    <motion.div
                        key="model"
                        className="splash-stage model-stage"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Full-page 3D Model */}
                        <div className="model-container-full">
                            <Suspense fallback={
                                <div className="model-loading">
                                    <div className="loading-ring"></div>
                                    <p>Loading Workflow...</p>
                                </div>
                            }>
                                <Spline
                                    scene="https://prod.spline.design/9cr7Zp8S7yMh3SHa/scene.splinecode"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </Suspense>
                        </div>

                        {/* Subtle overlay text */}
                        <motion.div
                            className="model-overlay"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className="model-label">Our Workflow Process</p>
                            <div className="model-progress">
                                <div className="progress-line"></div>
                            </div>
                        </motion.div>

                        {/* Skip button */}
                        <motion.button
                            className="skip-btn"
                            onClick={onComplete}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            whileHover={{ opacity: 1, scale: 1.05 }}
                            transition={{ delay: 1 }}
                        >
                            Skip →
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SplashScreen
