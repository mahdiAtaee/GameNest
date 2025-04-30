import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ({ title, ContainerClass }) => {
    const containerRef = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            const animatedTitle = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '150 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            })

            animatedTitle.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)',
                ease: 'power1.inOut',
                stagger: 0.02
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])


    return (
        <div ref={containerRef} className={`animated-title ${ContainerClass}`}>
            {title.split('<br />').map((line, index) => (
                <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
                    {line.split(' ').map((word, i) => (
                        <span key={i} className='animated-word' dangerouslySetInnerHTML={{ __html: word }} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default AnimatedTitle