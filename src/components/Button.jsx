import React from 'react'

const Button = ({ title, handlePage, currentPage }) => {
  const isActive = currentPage === title

  return (
    <button
      onClick={() => handlePage(title)}
      className={`px-4 py-2 rounded-lg font-semibold transition duration-200 border ${
        isActive
          ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/50'
          : 'bg-black/50 border-gray-600 text-gray-200 hover:border-blue-500 hover:text-white cursor-pointer'
      }`}
    >
      {title}
    </button>
  )
}

export default Button
