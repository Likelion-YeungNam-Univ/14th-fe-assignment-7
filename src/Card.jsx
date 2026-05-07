import React from 'react'
import dummyCard from './assets/cat.jpg'

const Card = ({ title, description }) => {
    return (
        <div className='border border-gray-200 rounded-xl flex flex-col w-full p-2 shadow-sm hover:shadow-md transition-shadow h-50'>
            <div className='w-full overflow-hidden rounded-lg bg-gray-100'>
                <img
                    src={dummyCard}
                    alt={title}
                />
            </div>
            <div className='flex flex-col gap-1 mt-2 px-1 pb-1'>
                <div className='text-sm font-bold text-black'>{title}</div>
                <div className='text-xs text-gray-400 line-clamp-2'>{description}</div>
            </div>
        </div>
    )
}

export default Card