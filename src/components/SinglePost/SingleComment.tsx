import React from 'react'
import Image from '../Shared/Image/Image'

const SingleComment = () => {
    return (
        <div className='bg-white rounded-xl p-4 flex flex-col gap-2 '>
            <div className='flex items-center gap-4'>
                <Image src='https://ik.imagekit.io/25kitplzn/postImg.jpeg' alt='' className='w-10 h-10 object-cover rounded-full' />
                <p className='text-sm font-medium'>John Doe</p>
                <p className='text-xs text-gray-500'>2 days ago</p>
            </div>

            <p className='text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi odio voluptatem ratione, assumenda non error dignissimos vitae necessitatibus blanditiis expedita, incidunt magni provident rerum ipsum consequatur. Beatae, quas ea.incidunt magni provident rerum ipsum consequatur. Beatae, quas ea.</p>
        </div>
    )
}

export default SingleComment