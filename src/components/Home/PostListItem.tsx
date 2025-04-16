import React from 'react'
import { Link } from 'react-router'
import Image from '../Shared/Image/Image'

const PostListItem = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className='w-full lg:w-1/3 sm:hidden lg:block'>
                <Image src='https://ik.imagekit.io/25kitplzn/postImg.jpeg' alt='' className='rounded-2xl object-cover' width={650} />
            </div>

            <div className='w-full lg:w-2/3 flex flex-col gap-2'>
                <p className='text-xl lg:text-2xl font-semibold'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit.</p>

                <div className='flex items-center gap-2 text-sm'>
                    <p className='font-semibold'>Written by</p>
                    <Link to="/" className='text-blue-600'>John Doe</Link>
                    <p>on</p>
                    <Link to="/" className='text-blue-600'>Web Design</Link>
                    <p className='text-gray-500'>2 days ago</p>
                </div>

                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam laborum quibusdam velit, ipsum culpa commodi consequuntur nam. Omnis officiis a atque nemo debitis! In animi nesciunt iure velit ipsam est?</p>

                <Link to="/" className='text-sm text-blue-600 underline'>Read More</Link>
            </div>
        </div>
    )
}

export default PostListItem