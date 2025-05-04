import React, { useEffect, useRef, useState } from 'react'
import Button from '../partials/Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'

const navItems = ['Home', 'Products', 'About', 'Contact']

const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(true)
    const [isActiveIndicator, setIsActiveIndicator] = useState(false)
    const [isNavVisible, setIsNavVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const navContainerRef = useRef(null)
    const audioElRef = useRef(null)
    const toggleAudioIndicator = () => {
        setIsActiveIndicator((prev) => !prev)
        setIsAudioPlaying((prev) => !prev)
    }

    const { y: currentScrollY } = useWindowScroll()
    useEffect(() => {
        const navContainer = navContainerRef.current
        if (currentScrollY === 0) {
            setIsNavVisible(true)
            navContainer.classList.remove('floating-nav')
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false)
            navContainer.classList.add('floating-nav')
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true)
            navContainer.classList.add('floating-nav')
        }
        setLastScrollY(currentScrollY)
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2
        })
    }, [isNavVisible])


    useEffect(() => {
        const audioEl = audioElRef.current
        if (isAudioPlaying) {
            audioEl.play().catch((error) => {
                console.error('Error playing audio:', error)
            })
            setIsActiveIndicator(true)
        } else {
            audioEl.pause()
            setIsActiveIndicator(false)
        }

        return () => {
            audioEl.pause()
            audioEl.currentTime = 0
        }
    }, [isAudioPlaying])


    return (
        <div ref={navContainerRef} className='fixed inset-x-0 z-50 top-4 h-16 transition-all duration-500 border-none md:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex items-center justify-between size-full p-4'>
                    <div className='flex items-center gap-4'>
                        <img
                            src='/img/logo.png'
                            className='w-10'
                        />
                        <Button title="Products" rightIcon={<TiLocationArrow />} ContainerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" />
                    </div>

                    <div className='flex items-center h-full'>
                        <div className='hidden md:block'>
                            {navItems.map((item, index) => (
                                <a key={index} className='nav-hover-btn' href={`#${item.toLocaleLowerCase()}`}>
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                            <audio className='hidden' src='/audio/loop.mp3' autoPlay loop ref={audioElRef} />
                            {[1, 2, 3, 4].map(line => (
                                <div className={`indicator-line ${isActiveIndicator ? 'active' : ''}`} style={{ animationDelay: `${line * 0.1}s` }} />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar