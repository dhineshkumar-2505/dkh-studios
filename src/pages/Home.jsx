import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Workflow from '../components/Workflow'
import Contact from '../components/Contact'
import Team from '../components/Team'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <TechStack />
            <Projects />
            <Workflow />
            <Contact />
            <Team />
        </>
    )
}

export default Home
