import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Register from './pages/Register'
import Loader from './components/Loader'

// Scroll to top on route change, or to hash if present
const ScrollToTop = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // Disable browser's default scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }

        // Always scroll to top on mount/refresh
        window.scrollTo(0, 0)

        // If it's a refresh (no pathname change), clear hash to force Home
        // But if it's a navigation, we might want to respect hash? 
        // User said "refresh home page only have to return".
        // So we clear hash on mount.
        if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname)
        }
    }, []) // Run only on mount

    useEffect(() => {
        // Handle navigation clicks that set hash
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        }
    }, [pathname, hash])

    return null
}

function App() {
    const [loading, setLoading] = useState(() => {
        return !sessionStorage.getItem('hasVisited')
    })

    const handleLoadComplete = () => {
        setLoading(false)
        sessionStorage.setItem('hasVisited', 'true')
    }

    return (
        <>
            {loading && <Loader onComplete={handleLoadComplete} />}
            {!loading && (
                <Router>
                    <ScrollToTop />
                    <CustomCursor />
                    <div className="animated-bg" />
                    <div className="app-content">
                        <Navbar />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/register" element={<Register />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            )}
        </>
    )
}

export default App
