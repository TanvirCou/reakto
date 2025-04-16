import { Search } from 'lucide-react'
import React from 'react'

const SearchPost = () => {
    return (
        <div className='flex items-center bg-gray-100 rounded-4xl py-1.5 px-4 gap-2 mt-2 w-[70%] sm:w-[60%] md:w-full'>
            <Search size={20} color='gray' />
            <input type="text" placeholder='Search a post...' className='bg-transparent w-[80%] placeholder:text-sm focus:outline-none focus:border-none' />
        </div>
    )
}

export default SearchPost