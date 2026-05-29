import { useEffect, useRef } from 'react'
import cyberpunkAlley from '../assets/cyberpunk-alley.jpg'
import './Window.css'

function Window() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationId

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        const drops = Array.from({ length: 120 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 12 + 6,
            speed: Math.random() * 2 + 1, 
            opacity: Math.random() * 0.3 + 0.05
        }))

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            drops.forEach(d => {
                ctx.beginPath()
                ctx.moveTo(d.x, d.y)
                ctx.lineTo(d.x - d.length * 0.2, d.y + d.length)
                ctx.strokeStyle = `rgba(140, 180, 255, ${d.opacity})`
                ctx.lineWidth = 0.7
                ctx.stroke()
                d.y += d.speed * 3
                d.x -= d.speed * 0.4
                if (d.y > canvas.height) {
                    d.y = -10
                    d.x = Math.random() * canvas.width
                }
            })
            animationId = requestAnimationFrame(draw)
        }

        resize()
        draw()
        window.addEventListener('resize', resize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <div className="window-frame">
            <div className="window-pane">
                <img src={cyberpunkAlley} alt="Cyberpunk alley outside" className="window-bg" />
                <canvas ref={canvasRef} className="rain-canvas" />
                <div className="window-glow" />
            </div>
        </div>
    )
}

export default Window