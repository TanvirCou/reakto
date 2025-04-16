import { Search } from 'lucide-react'
import { Link } from 'react-router'

const MainCatagories = () => {
    return (
        <div className='bg-white w-full py-2 px-4 rounded-4xl md:flex items-center justify-center gap-x-4 hidden'>
            <div className='flex-1 flex items-center flex-wrap justify-between gap-2'>
                <Link to="/posts" className="text-white bg-indigo-700 text-sm  py-1.5 px-3 rounded-2xl font-medium">All posts</Link>
                <Link to="/posts?cat=web-design" className="text-black text-sm hover:bg-indigo-50 py-1.5 px-3 rounded-2xl font-medium transition duration-400">Web Design</Link>
                <Link to="/posts?cat=development" className="text-black text-sm hover:bg-indigo-50 py-1.5 px-3 rounded-2xl font-medium transition duration-400">Development</Link>
                <Link to="/posts?cat=databases" className="text-black text-sm hover:bg-indigo-50 py-1.5 px-3 rounded-2xl font-medium transition duration-400">Databases</Link>
                <Link to="/posts?cat=search-engines" className="text-black text-sm hover:bg-indigo-50 py-1.5 px-3 rounded-2xl font-medium transition duration-400">Search Engines</Link>
                <Link to="/posts?cat=marketing" className="text-black text-sm hover:bg-indigo-50 py-1.5 px-3 rounded-2xl font-medium transition duration-400">Marketing</Link>
                <Link to="/posts?cat=gaming" className="text-black text-sm hover:bg-indigo-50 py-1.5 px-3 rounded-2xl font-medium transition duration-400">E-Sports</Link>
                <Link to="/posts?cat=football" className="text-black text-sm hover:bg-indigo-50 py-1.5 px-3 rounded-2xl font-medium transition duration-400">Football</Link>
            </div>

            <span className='text-xl font-medium'>|</span>

            <div className='flex items-center bg-gray-100 rounded-4xl py-1.5 px-4 gap-2'>
                <Search size={20} color='gray' />
                <input type="text" placeholder='Search a post...' className='bg-transparent focus:outline-none focus:border-none' />
            </div>
        </div>
    )
}

export default MainCatagories