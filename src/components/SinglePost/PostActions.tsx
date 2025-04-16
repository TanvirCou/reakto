import { Bookmark, Delete, DeleteIcon, Trash2 } from 'lucide-react'
import React from 'react'

const PostActions = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <Bookmark size={20} />
                <p className='text-sm'>Save this post</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <Trash2 size={20} color='red' />
                <p className='text-sm text-[red]'>Delete this post</p>
            </div>
        </div>
    )
}

export default PostActions