import React, { useRef, useState } from 'react'

const TiltCard = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('')

    const containerRef = useRef(null)


    const handleMouseMove = (e) => {
        if (!containerRef.current) return


        const { left, top, width, height } = containerRef.current.getBoundingClientRect()

        const relativeX = (e.clientX - left) / width
        const relativeY = (e.clientY - top) / height
        const tiltX = (relativeY - 0.5) * 5
        const tiltY = (relativeX - 0.5) * -5

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3D(0.95, 0.95, 0.95)`
        setTransformStyle(newTransform)
    }
    const handleMouseLeave = () => {
        setTransformStyle('')
    }

    return (
        <div
            style={{ transform: transformStyle }}
            className={className}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={containerRef}>
            {children}
        </div>
    )
}

export default TiltCard