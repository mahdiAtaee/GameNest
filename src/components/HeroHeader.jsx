import React, { useEffect, useRef, useState } from 'react'
import Button from '../partials/Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HeroHeader = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideo, setLoadedVideo] = useState(0)
    const totalVideos = 4;

    const nextVideoRef = useRef(null)
    useEffect(() => {
        if (loadedVideo !== totalVideos - 1) {
            setIsLoading(false)
        }
    }, [loadedVideo])


    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' })

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 0.7,
                ease: 'power1.inOut',
                //onStart: nextVideoRef.current.play(),
            })

            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true })



    const getVideoSrc = (index) => `/img/hero-${index}.webp`
    const handleNextVideoIndex = (currentIndex % totalVideos) + 1
    const handleMiniVideoClick = () => {
        setCurrentIndex(handleNextVideoIndex)
        setHasClicked(true)
    }
    const handleVideoLoad = () => {
        setLoadedVideo(prev => prev + 1)
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%,0% 100%)',
            borderRadius: '0 0 40% 10%',
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%,0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })

    return (
        <div className='w-screen h-dvh relative'>
            {isLoading && (
                <div className='absolute flex-center w-screen h-dvh bg-violet-50 overflow-hidden z-[100]'>
                    <div className='three-body'>
                        <div className='three-body__dot' />
                        <div className='three-body__dot' />
                        <div className='three-body__dot' />
                    </div>
                </div>
            )}
            <div id='video-frame' className='relative z-10 w-screen h-dvh overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 hover:opacity-100 hover:scale-150'>
                            {/* <video
                                loop
                                muted
                                onLoadedData={handleVideoLoad}
                                ref={nextVideoRef}
                                id='current-video'
                                className='size-64 origin-center rounded-lg scale-150 object-cover object-center'
                                src={getVideoSrc(handleNextVideoIndex)}
                            /> */}
                            <img
                                ref={nextVideoRef}
                                id='current-video'
                                className='size-64 origin-center rounded-lg scale-150 object-cover object-center'
                                src={getVideoSrc(handleNextVideoIndex)} />
                        </div>
                    </div>
                    <img id='next-video'
                        className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                        onLoadedData={handleVideoLoad}
                        src={getVideoSrc(currentIndex)} />
                    <img onLoadedData={handleVideoLoad}
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        className='absolute-center absolute top-0 left-0 size-full object-cover object-center'
                    />
                    {/* <video
                        loop
                        muted
                        autoPlay
                        id='next-video'
                        className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                        onLoadedData={handleVideoLoad}
                        src={getVideoSrc(currentIndex)}
                    /> */}
                    {/* 
                    <video
                        loop
                        muted
                        autoPlay
                        onLoadedData={handleVideoLoad}
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        className='absolute-center absolute top-0 left-0 size-full object-cover object-center'
                    /> */}
                </div>
                <h1 className='special-font hero-heading absolute z-40 bottom-0 right-0 text-blue-100'>
                    g<b>a</b>ming
                </h1>

                <div className='absolute top-0 left-0 z-40 size-full'>
                    <div className='mt-24 px-5 md:px-10'>
                        <h2 className='special-font hero-heading text-blue-50'>redefi<b>n</b>e</h2>
                        <p className='mb-5 font-robert-regular max-w-64 text-blue-100'>Enter the metagame layer <br /> Unleash the play economy</p>
                        <Button id="watch-trailer" title="watch trailer" leftIcon={<TiLocationArrow />} ContainerClass="!bg-yellow-300 flex-center gap-1" />
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-0 right-0 text-black'>
                g<b>a</b>ming
            </h1>
        </div>
    )
}

export default HeroHeader