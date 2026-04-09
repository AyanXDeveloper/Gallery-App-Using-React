import React from 'react'
import Card from '../components/Card'

const Gallery = () => {
    return (
        <>
            <div className='bg-[#222222] text-white h-screen w-screen flex flex-col items-center justify-start gap-10 py-10'>
                <div>
                    <h1 className='font-bold tracking-wider text-[5rem] capitalize oswald'>Gallery App</h1>
                </div>
                <div>
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Gallery