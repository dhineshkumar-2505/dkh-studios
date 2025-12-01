import React, { useState, useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Projects.css'

const Projects = () => {
    const [filter, setFilter] = useState('All')
    const [selectedProject, setSelectedProject] = useState(null)
    const [visibleProjects, setVisibleProjects] = useState([])
    const clickSoundRef = useRef(null)
    const userInteractedRef = useRef(false)

    const categories = ['All', 'AI & IoT', 'AI/ML', 'Healthcare AI', 'EdTech', 'Healthcare IoT']

    // Load mouse click sound
    useEffect(() => {
        clickSoundRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3')
        clickSoundRef.current.volume = 0.3
    }, [])

    useEffect(() => {
        if (filter === 'All') {
            setVisibleProjects(projects)
        } else {
            setVisibleProjects(projects.filter(p => p.category === filter))
        }
        // Reset user interaction flag when filter changes
        userInteractedRef.current = false
    }, [filter])

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

        const elements = document.querySelectorAll('.animate-fade-up, .animate-slide-in-right')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [visibleProjects])

    // Play click sound on slide change (only on user interaction)
    const playClickSound = () => {
        if (!userInteractedRef.current) return
        if (clickSoundRef.current) {
            clickSoundRef.current.currentTime = 0
            clickSoundRef.current.play().catch(e => console.log('Audio play failed:', e))
        }
    }

    // Mark that user has interacted
    const handleUserInteraction = () => {
        userInteractedRef.current = true
    }

    const openModal = (project) => {
        // If project has a custom link label (like "View Project"), open modal first
        if (project.linkLabel) {
            setSelectedProject(project)
            document.body.style.overflow = 'hidden'
            return
        }

        if (project.link) {
            if (project.link.startsWith('http')) {
                window.open(project.link, '_blank')
            } else {
                window.location.href = project.link
            }
            return
        }
        setSelectedProject(project)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedProject(null)
        document.body.style.overflow = 'unset'
    }

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="h2 text-gradient animate-fade-up">Featured Projects</h2>
                    <p className="body-lg text-muted animate-fade-up" style={{ transitionDelay: '0.1s' }}>
                        Showcasing our latest innovations in AI, IoT, and Web Development.
                    </p>
                </div>

                <div className="filter-container animate-fade-up" style={{ transitionDelay: '0.2s' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 3D Coverflow Slider for All Projects */}
                {filter === 'All' ? (
                    <div className="projects-swiper-container">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 30,
                                stretch: 0,
                                depth: 150,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Navigation, Pagination]}
                            loop={visibleProjects.length > 1}
                            speed={600}
                            onSlideChange={playClickSound}
                            onTouchStart={handleUserInteraction}
                            onSlideChangeTransitionStart={handleUserInteraction}
                            className="projects-swiper"
                        >
                            {visibleProjects.map((project) => (
                                <SwiperSlide key={project.id}>
                                    <div className="project-card">
                                        <div className="project-image-wrapper">
                                            <img src={project.image} alt={project.title} className="project-image" />
                                            <div className="project-overlay">
                                                <button
                                                    className="btn btn-primary view-btn"
                                                    onClick={() => openModal(project)}
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                        <div className="project-info">
                                            <span className="project-category">{project.category}</span>
                                            <h3 className="h3 project-title">{project.title}</h3>
                                            <p className="body-sm project-desc">{project.shortDescription}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="projects-grid">
                        {visibleProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="project-card animate-slide-in-right"
                                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                    <div className="project-overlay">
                                        <button
                                            className="btn btn-primary view-btn"
                                            onClick={() => openModal(project)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <span className="project-category">{project.category}</span>
                                    <h3 className="h3 project-title">{project.title}</h3>
                                    <p className="body-sm project-desc">{project.shortDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}


                {/* Project Detail Modal */}
                {
                    selectedProject && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
                                <button className="modal-close" onClick={closeModal}>&times;</button>
                                <div className="modal-header">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                                    <div className="modal-title-wrapper">
                                        <span className="project-category">{selectedProject.category}</span>
                                        <h2 className="h2 modal-title">{selectedProject.title}</h2>
                                    </div>
                                </div>

                                {selectedProject.gallery && (
                                    <div className="modal-gallery">
                                        {selectedProject.gallery.map((img, index) => (
                                            <img key={index} src={img} alt={`${selectedProject.title} ${index + 1}`} className="gallery-image" />
                                        ))}
                                    </div>
                                )}

                                <div className="modal-body" dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }}>
                                </div>
                                <div className="modal-footer">
                                    {selectedProject.link && (
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                            style={{ marginRight: 'auto' }}
                                        >
                                            {selectedProject.linkLabel || 'Explore'}
                                        </a>
                                    )}
                                    <button className="btn btn-primary" onClick={() => window.location.href = '/register'}>
                                        Interested in this? Start Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section >
    )
}

export default Projects
