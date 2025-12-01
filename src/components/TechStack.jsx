import React from 'react'
import './TechStack.css'

const TechStack = () => {
    const row1 = [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/black' },
        { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
        { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031' },
        { name: 'Svelte', icon: 'https://cdn.simpleicons.org/svelte/FF3E00' },
        { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
        { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
        { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
        { name: 'MUI', icon: 'https://cdn.simpleicons.org/mui/007FFF' },
        { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
        { name: 'React Native', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Swift', icon: 'https://cdn.simpleicons.org/swift/F05138' },
        { name: 'Kotlin', icon: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
        { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg' },
        { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
        { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg' },
    ]

    const row2 = [
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
        { name: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20' },
        { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask/black' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring', icon: 'https://cdn.simpleicons.org/spring/6DB33F' },
        { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
        { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
        { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
        { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
        { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
        { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/DC382D' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
        { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
        { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/412991' },
    ]

    return (
        <section className="tech-stack-section">
            <div className="container">
                <h2 className="h2 text-gradient tech-stack-heading animate-fade-up">Technologies We Use</h2>

                <div className="tech-marquee-wrapper">
                    {/* Row 1 - Sliding Left */}
                    <div className="tech-marquee marquee-left">
                        <div className="tech-track">
                            {[...row1, ...row1].map((tech, index) => (
                                <div key={`row1-${index}`} className="tech-card">
                                    <img src={tech.icon} alt={tech.name} title={tech.name} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Sliding Right */}
                    <div className="tech-marquee marquee-right">
                        <div className="tech-track">
                            {[...row2, ...row2].map((tech, index) => (
                                <div key={`row2-${index}`} className="tech-card">
                                    <img src={tech.icon} alt={tech.name} title={tech.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack
