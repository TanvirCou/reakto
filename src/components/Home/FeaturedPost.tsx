import Image from '../Shared/Image/Image'
import { Link } from 'react-router'

const FeaturedPost = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                <Image src='https://ik.imagekit.io/25kitplzn/featured1.jpeg' alt='' width={775} className='rounded-3xl object-cover' />

                <div className='flex items-center gap-6 text-sm'>
                    <p className='font-semibold'>01.</p>
                    <Link to="/" className='text-blue-600'>Web Design</Link>
                    <p className='text-gray-500'>2 days ago</p>
                </div>

                <p className='text-lg md:text-xl lg:text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='w-full md:w-1/2 flex flex-col gap-y-3'>
                <div className='flex gap-2 md:h-1/3'>
                    <div className='w-1/3 aspect-video '>
                        <Image src='https://ik.imagekit.io/25kitplzn/featured2.jpeg' alt='' width={280} className='rounded-2xl object-cover w-full h-full' />
                    </div>
                    <div>
                        <div className='flex items-center gap-6 text-xs'>
                            <p className='font-semibold'>01.</p>
                            <Link to="/" className='text-blue-600'>Web Design</Link>
                            <p className='text-gray-500'>2 days ago</p>
                        </div>

                        <p className='text-md md:text-lg lg:text-xl font-semibold'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit.</p>
                    </div>
                </div>

                <div className='flex gap-2 md:h-1/3'>
                    <div className='w-1/3 aspect-video '>
                        <Image src='https://ik.imagekit.io/25kitplzn/featured3.jpeg' alt='' width={280} className='rounded-2xl object-cover w-full h-full' />
                    </div>

                    <div>
                        <div className='flex items-center gap-6 text-xs'>
                            <p className='font-semibold'>01.</p>
                            <Link to="/" className='text-blue-600'>Web Design</Link>
                            <p className='text-gray-500'>2 days ago</p>
                        </div>

                        <p className='text-md md:text-lglg:text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className='flex gap-2 md:h-1/3'>
                    <div className='w-1/3 aspect-video '>
                        <Image src='https://ik.imagekit.io/25kitplzn/featured4.jpeg' alt='' width={280} className='rounded-2xl object-cover w-full h-full' />
                    </div>

                    <div>
                        <div className='flex items-center gap-6 text-xs'>
                            <p className='font-semibold'>01.</p>
                            <Link to="/" className='text-blue-600'>Web Design</Link>
                            <p className='text-gray-500'>2 days ago</p>
                        </div>

                        <p className='text-md md:text-lglg:text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default FeaturedPost