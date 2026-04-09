import React, { useState } from 'react'

const Card = ({ detail }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  return (
    <a 
      href={detail.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className='block group transform transition duration-300 hover:scale-105'
    >
      <div className='relative rounded-xl overflow-hidden bg-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className='absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse'></div>
        )}
        
        {/* Image */}
        <img 
          className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
          src={detail.download_url} 
          alt={detail.author || "Gallery image"}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay on Hover */}
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-end'>
          <div className='w-full p-3 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300'>
            <p className='text-sm font-semibold truncate'>{detail.author || 'Unknown'}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default React.memo(Card)