import React from 'react'
import SingleComment from './SingleComment'

const Comments = () => {
    return (
        <div className='w-full lg:w-3/5 flex flex-col gap-4 mt-4'>
            <p className='text-lg font-semibold underline text-gray-500'>Comments</p>

            <div className='flex items-center justify-between w-full gap-4'>
                <textarea placeholder='Write a comment...' className='w-full rounded-lg p-4 bg-white' />
                <button className='py-1.5 px-4 bg-indigo-600 text-white rounded-md text-sm'>Send</button>
            </div>

            <div className='flex flex-col gap-3'>
                <SingleComment />
                <SingleComment />
                <SingleComment />
                <SingleComment />
            </div>
        </div>
    )
}

export default Comments