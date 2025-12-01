import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Register from './pages/Register'
import Loader from './components/Loader'

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
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
