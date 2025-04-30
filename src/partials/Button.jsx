import React from 'react'

const Button = ({ id, title, leftIcon, rightIcon, ContainerClass }) => {
    return (
        <button id={id} className={`group bg-violet-50 rounded-full overflow-hidden py-4 px-7 cursor-pointer text-black relative w-fit ${ContainerClass}`}>
            {leftIcon}
            <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
                <div>{title}</div>
            </span>
            {rightIcon}
        </button>
    )
}

export default Button