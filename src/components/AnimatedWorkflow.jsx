import { useEffect, useRef } from 'react'
import './AnimatedWorkflow.css'

const AnimatedWorkflow = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        const width = canvas.width = canvas.offsetWidth * 2 // Retina display
        const height = canvas.height = canvas.offsetHeight * 2
        ctx.scale(2, 2)

        const steps = [
            { x: 50, y: 100, label: '💡', title: 'Share Idea' },
            { x: 200, y: 50, label: '📋', title: 'Plan & Quote' },
            { x: 350, y: 100, label: '🎨', title: 'Design' },
            { x: 500, y: 50, label: '⚙️', title: 'Build' },
            { x: 650, y: 100, label: '🚀', title: 'Deliver' }
        ]

        let progress = 0
        let currentStep = 0
        const animationSpeed = 0.008

        // Colors
        const purple = '#A020F0'
        const blue = '#00C2FF'
        const orange = '#FF7A3C'

        function drawPath() {
            ctx.clearRect(0, 0, width / 2, height / 2)

            // Draw connecting lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
            ctx.lineWidth = 3
            ctx.beginPath()
            for (let i = 0; i < steps.length - 1; i++) {
                ctx.moveTo(steps[i].x, steps[i].y)

                // Curved path
                const midX = (steps[i].x + steps[i + 1].x) / 2
                const midY = (steps[i].y + steps[i + 1].y) / 2 - 30
                ctx.quadraticCurveTo(midX, midY, steps[i + 1].x, steps[i + 1].y)
            }
            ctx.stroke()

            // Draw animated progress line
            const gradient = ctx.createLinearGradient(0, 0, width / 2, 0)
            gradient.addColorStop(0, purple)
            gradient.addColorStop(0.5, blue)
            gradient.addColorStop(1, orange)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 4
            ctx.shadowBlur = 15
            ctx.shadowColor = blue
            ctx.beginPath()

            for (let i = 0; i < currentStep; i++) {
                ctx.moveTo(steps[i].x, steps[i].y)
                const midX = (steps[i].x + steps[i + 1].x) / 2
                const midY = (steps[i].y + steps[i + 1].y) / 2 - 30
                ctx.quadraticCurveTo(midX, midY, steps[i + 1].x, steps[i + 1].y)
            }

            if (currentStep < steps.length - 1) {
                const start = steps[currentStep]
                const end = steps[currentStep + 1]
                const midX = (start.x + end.x) / 2
                const midY = (start.y + end.y) / 2 - 30

                // Calculate point along curve
                const t = progress
                const x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * midX + t * t * end.x
                const y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * midY + t * t * end.y

                ctx.moveTo(start.x, start.y)
                ctx.quadraticCurveTo(
                    midX * (1 - progress) + start.x * progress,
                    midY * (1 - progress) + start.y * progress,
                    x,
                    y
                )
            }
            ctx.stroke()
            ctx.shadowBlur = 0

            // Draw step nodes
            steps.forEach((step, index) => {
                const isActive = index <= currentStep
                const isCurrent = index === currentStep

                // Node circle
                ctx.beginPath()
                ctx.arc(step.x, step.y, isCurrent ? 25 : 20, 0, Math.PI * 2)

                if (isActive) {
                    const nodeGradient = ctx.createRadialGradient(step.x, step.y, 0, step.x, step.y, 25)
                    nodeGradient.addColorStop(0, purple)
                    nodeGradient.addColorStop(1, blue)
                    ctx.fillStyle = nodeGradient
                } else {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
                }
                ctx.fill()

                if (isActive) {
                    ctx.strokeStyle = blue
                    ctx.lineWidth = 2
                    ctx.shadowBlur = 10
                    ctx.shadowColor = blue
                    ctx.stroke()
                    ctx.shadowBlur = 0
                }

                // Icon
                ctx.font = '24px Arial'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = isActive ? '#fff' : 'rgba(255, 255, 255, 0.3)'
                ctx.fillText(step.label, step.x, step.y)

                // Label
                ctx.font = 'bold 12px Inter'
                ctx.fillStyle = isActive ? '#fff' : 'rgba(255, 255, 255, 0.4)'
                ctx.fillText(step.title, step.x, step.y + 40)
            })

            // Animated particle at current position
            if (currentStep < steps.length - 1) {
                const start = steps[currentStep]
                const end = steps[currentStep + 1]
                const midX = (start.x + end.x) / 2
                const midY = (start.y + end.y) / 2 - 30
                const t = progress
                const x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * midX + t * t * end.x
                const y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * midY + t * t * end.y

                // Glowing particle
                ctx.beginPath()
                ctx.arc(x, y, 8, 0, Math.PI * 2)
                const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
                particleGradient.addColorStop(0, '#fff')
                particleGradient.addColorStop(1, blue)
                ctx.fillStyle = particleGradient
                ctx.shadowBlur = 20
                ctx.shadowColor = blue
                ctx.fill()
                ctx.shadowBlur = 0
            }
        }

        function animate() {
            progress += animationSpeed

            if (progress >= 1) {
                progress = 0
                currentStep++

                if (currentStep >= steps.length - 1) {
                    // Reset and loop
                    setTimeout(() => {
                        currentStep = 0
                        progress = 0
                    }, 1000) // Pause at end before restart
                }
            }

            drawPath()
            requestAnimationFrame(animate)
        }

        animate()

        // Cleanup
        return () => {
            ctx.clearRect(0, 0, width, height)
        }
    }, [])

    return (
        <div className="animated-workflow-container">
            <canvas ref={canvasRef} className="workflow-canvas"></canvas>
        </div>
    )
}

export default AnimatedWorkflow
