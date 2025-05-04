import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import AnimatedTitle from '../partials/AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: true,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

    return (
        <div className='w-screen min-h-dvh overflow-x-hidden'>
            <div className='relative mb-8 mt-24 flex flex-col flex-center gap-5'>
                <h2 className='text-xs md:text-[10px] uppercase font-general'>
                    Welcome to Zentry
                </h2>

                <AnimatedTitle title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared advanced" ContainerClass="mt-5 text-center !text-black"/>
                <div className='about-subtext'>
                    <p>
                        The Game of Game Begins-your life, now an epic MMORPG
                    </p>
                    <p>
                        Zentry units every player from count less games and platform
                    </p>
                </div>
            </div>
            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img
                        src='/img/world-1.webp'
                        alt='background'
                        className='absolute top-0 left-0 size-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default About