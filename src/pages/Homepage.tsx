import { Link } from "react-router"
import MainCatagories from "../components/Home/MainCatagories"
import FeaturedPost from "../components/Home/FeaturedPost"
import PostList from "../components/Home/PostList"

const Homepage = () => {
    return (
        <div className='mt-4 flex flex-col gap-3 px-4 sm:px-6 md:px-8 lg:px-16'>

            <div className="flex gap-2 text-sm">
                <Link to="/">Home</Link>
                <span>*</span>
                <span className="text-indigo-600">Blogs & Articles</span>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2 w-full md:w-[70%] lg:w-[60%]">
                    <p className="text-2xl md:text-4xl lg:text-[52px] font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum officia odio ex facilis fuga expedita incidunt sunt eaque.officia odio ex facilis fuga expedita incidunt sunt eaque.</p>
                </div>

                <div>
                    <Link
                        to="/write"
                        className="hidden md:block"
                    >
                        <div
                            className="relative cursor-pointer md:mb-4"
                        >
                            <svg viewBox="0 0 200 200" width="150" height="150" className="animate-spin animateBtn">
                                <circle cx="100" cy="100" r="90" fill="#4f46e5" />
                                <path
                                    id="innerCirclePath"
                                    fill="none"
                                    d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                                />
                                <text className="text-lg tracking-wider">
                                    <textPath href="#innerCirclePath" fill="white">Write your story •</textPath>
                                </text>
                                <text className="text-lg tracking-wider">
                                    <textPath href="#innerCirclePath" fill="white" startOffset="50%">
                                        Share your idea •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-20 w-20 items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="50"
                                    height="50"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    className="animate-spin animateBtn"
                                >
                                    <line x1="6" y1="18" x2="18" y2="6" />
                                    <polyline points="9 6 18 6 18 15" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <MainCatagories />

            <FeaturedPost />

            <div>
                <p className="text-lg font-semibold text-gray-500">Recent Posts</p>

                <PostList />
            </div>

        </div>
    )
}

export default Homepage