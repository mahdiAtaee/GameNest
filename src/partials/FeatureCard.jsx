import React from 'react'

const FeatureCard = ({ title, src, description }) => {
    return (
        <div className='relative size-full'>
            <video
                loop
                autoPlay
                muted
                src={src}
                className='absolute size-full left-0 top-0 object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h2 className='bento-title special-font'>{title}</h2>
                    {description && (
                        <p className='max-w-64 font-circular-web text-blue-50 mt-3 text-xs md:text-base'>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FeatureCard