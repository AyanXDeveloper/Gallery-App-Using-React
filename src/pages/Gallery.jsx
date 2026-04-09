import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import axios from 'axios'

const Gallery = () => {

    const [gallery, setGallery] = useState([])
    const [page, setPage] = useState("1")
    const [limit, setLimit] = useState("12")
    const [loading, setLoading] = useState(false)

    const handlePage = (n) => {
        setPage(n)
    }

    const paginationHandler = async () => {
        setLoading(true)
        try {
            let result = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            const { data } = result
            setGallery(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        paginationHandler()
    }, [page, limit])

    return (
        <div className='bg-gradient-to-b from-[#1a1a1a] to-[#222222] min-h-screen text-white flex flex-col'>
            {/* Header */}
            <div className='py-8 px-4 text-center border-b border-gray-700'>
                <h1 className='font-bold tracking-wider text-5xl md:text-6xl capitalize oswald'>Gallery App</h1>
                <p className='text-gray-400 mt-2 text-sm md:text-base'>Browse beautiful curated images</p>
            </div>

            {/* Gallery Grid */}
            <div className='flex-1 overflow-auto p-6 md:p-10'>
                {loading ? (
                    <div className='flex items-center justify-center h-64'>
                        <div className='text-center'>
                            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4'></div>
                            <p className='text-gray-400'>Loading images...</p>
                        </div>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto'>
                        {gallery.map((item) => (
                            <Card key={item.id} detail={item} />
                        ))}
                    </div>
                )}
            </div>

            {/* Footer with Controls */}
            <div className='bg-gray-800/30 backdrop-blur border-t border-gray-700 px-4 md:px-6 py-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                        {/* Pagination Buttons */}
                        <div className='flex gap-2 items-center flex-wrap'>
                            <h3 className='font-bold text-lg whitespace-nowrap'>Pages:</h3>
                            <div className='flex gap-1 flex-wrap'>
                                {['1', '2', '3', '4'].map((num) => (
                                    <Button key={num} title={num} handlePage={handlePage} currentPage={page} />
                                ))}
                            </div>
                        </div>

                        {/* Limit Dropdown */}
                        <div className='flex gap-3 items-center'>
                            <h3 className='font-bold text-lg whitespace-nowrap'>Images per page:</h3>
                            <select 
                                onChange={(event) => {
                                    setLimit(event.target.value)
                                    setPage("1")
                                }} 
                                value={limit}
                                className='p-2 px-4 bg-black/50 border border-gray-600 text-white rounded-lg cursor-pointer outline-none hover:border-blue-500 transition duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                            >
                                <option className='bg-gray-900' value="12">12</option>
                                <option className='bg-gray-900' value="24">24</option>
                                <option className='bg-gray-900' value="36">36</option>
                                <option className='bg-gray-900' value="60">60</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery