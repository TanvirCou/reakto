import React from 'react'
import Image from '../components/Shared/Image/Image'
import { Link } from 'react-router'
import { Facebook, Instagram, InstagramIcon } from 'lucide-react'
import PostActions from '../components/SinglePost/PostActions'
import SearchPost from '../components/SinglePost/SearchPost'
import Comments from '../components/SinglePost/Comments'

const SinglePost = () => {
    return (
        <div className=' px-4 sm:px-6 md:px-8 lg:px-16 py-4'>
            <div className='flex gap-4'>
                <div className='w-full md:w-3/5 flex flex-col gap-4'>
                    <p className='text-xl lg:text-4xl font-semibold'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit.</p>

                    <div className='flex items-center gap-2 text-sm'>
                        <p className='font-semibold'>Written by</p>
                        <Link to="/" className='text-blue-600'>John Doe</Link>
                        <p>on</p>
                        <Link to="/" className='text-blue-600'>Web Design</Link>
                        <p className='text-gray-500'>2 days ago</p>
                    </div>

                    <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam laborum quibusdam velit, ipsum culpa commodi consequuntur nam. Omnis officiis a atque nemo debitis! In animi nesciunt iure velit ipsam est?</p>
                </div>

                <div className='w-2/5 hidden md:block'>
                    <Image src='https://ik.imagekit.io/25kitplzn/postImg.jpeg' alt='' className='rounded-2xl object-cover' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-6 mt-2 relative'>
                <div className='flex flex-col gap-4 text-sm text-justify w-full md:w-[70%]'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati ipsum eius suscipit perspiciatis quibusdam molestias impedit id nisi laudantium hic architecto ad nesciunt magnam consequuntur consequatur fugiat. Vero, asperiores?</p>
                </div>

                <div className=' sticky h-max px-0 md:px-4 top-4 w-full md:w-[30%] flex flex-col gap-4'>

                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold'>Author</p>
                        <div className='flex items-center gap-4'>
                            <Image src='https://ik.imagekit.io/25kitplzn/postImg.jpeg' alt='' className='w-10 h-10 object-cover rounded-full' />
                            <p className='text-sm font-medium'>John Doe</p>
                        </div>

                        <p className='text-xs text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid ratione. Nostrum numquam nisi,</p>

                        <div className='flex items-center gap-2'>
                            <Image src='https://ik.imagekit.io/25kitplzn/facebook.svg' alt='' className='object-cover w-7 h-7' />
                            <Image src='https://ik.imagekit.io/25kitplzn/instagram.svg' alt='' className='object-cover w- 7 h-7' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold'>Actions</p>
                        <PostActions />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold'>Catagories</p>
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

                        <SearchPost />
                    </div>
                </div>
            </div>

            <div>
                <Comments />
            </div>

        </div>
    )
}

export default SinglePost