import React, { useState } from 'react'
import { Link } from 'react-router'
import SearchPost from '../components/SinglePost/SearchPost'
import PostList from '../components/Home/PostList'
import FilterSearch from '../components/Posts/FilterSearch'

const Posts = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(prev => !prev);
    }
    console.log(open);

    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-16 py-2 flex flex-col gap-2'>
            <p className='text-lg lg:text-xl font-medium'>Development Blogs</p>
            <button className='bg-indigo-600 text-white py-1.5 px-4 rounded-md text-sm md:hidden w-max cursor-pointer' onClick={handleClick}>{open ? "Close" : "Filter or Search"}</button>
            <div className='flex flex-col-reverse md:flex-row gap-4'>
                <div className='text-justify w-full md:w-[70%] lg:w-[75%] xl:w-[80%]'>
                    <PostList />
                </div>

                <div className={`${open ? "block" : "hidden"} md:sticky h-max px-0 md:px-4 top-4 w-full md:w-[30%] lg:w-[25%] xl:w-[20%] md:flex md:flex-col md:gap-4`}>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-500 font-semibold'>Search</p>
                        <SearchPost />
                    </div>

                    <FilterSearch />


                    <div className='flex flex-col gap-1'>
                        <p className='font-semibold text-gray-500'>Catagories</p>
                        <div className='flex flex-col gap-1 text-sm underline'>
                            <Link to="/">All</Link>
                            <Link to="/">Web Design</Link>
                            <Link to="/">Development</Link>
                            <Link to="/">Databases</Link>
                            <Link to="/">Search Engines</Link>
                            <Link to="/">Marketing</Link>
                            <Link to="/">Gaming</Link>
                            <Link to="/">Football</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts