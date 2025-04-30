import { useRef } from 'react'
import AnimatedTitle from '../partials/AnimatedTitle'
import Button from '../partials/Button'
import gsap from 'gsap'


const Story = () => {
    const frameRef = useRef('null')
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        const element = frameRef.current
        if (!element) return

        const rect = element.getBoundingClientRect()
        const x = clientX - rect.left
        const y = clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power.inOut'
        })

    }
    const handleMouseLeave = () => {
        const element = frameRef.current
        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power.inOut'
        })
    }
    return (
        <div className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex full-size flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    the Multiverse ip World
                </p>
                <div className="relative size-full">
                    <AnimatedTitle
                        title="The St<b>o</b>ry of <br /> a hidden real<b>m</b>"
                        sectionId="#story"
                        ContainerClass="mt-5 pinter-events-none mix-blend-difference relative z-10"
                    />
                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <img
                                    ref={frameRef}
                                    src='/img/world-2.jpg'
                                    onMouseEnter={handleMouseLeave}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='-mt-80 w-full flex justify-center md:-mt-64 md:items-start md:me-44 md:justify-end'>
                    <div className='flex h-full w-fit flex-col items-center md:items-start'>
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                            Where realms converge, lies Zentry and the boundless pillar.
                            Discover its secrets and shape your fate amidst infinite
                            opportunities.
                        </p>
                        <Button title="discover Prologue" id="realm-button" ContainerClass="mt-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story