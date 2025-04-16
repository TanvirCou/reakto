import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const catagories = [
    {
        label: "General",
        value: "general"
    },
    {
        label: "Web Design",
        value: "web-design"
    },
    {
        label: "Development",
        value: "development"
    },
    {
        label: "Databases",
        value: "databases"
    },
    {
        label: "Search Engine",
        value: "Search-engine"
    },
    {
        label: "Marketing",
        value: "marketing"
    },
    {
        label: "Gaming",
        value: "gaming"
    },
    {
        label: "Football",
        value: "football"
    },
]

const CreatePost = () => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-16 py-2 flex flex-col gap-2'>
            <p className='text-lg font-semibold text-gray-600'>Create a new post</p>

            <form action="" className='flex flex-col gap-4'>
                <button className='w-max py-1.5 px-4 bg-white text-gray-500 rounded-md shadow-md text-sm'>Add a cover image</button>

                <input type="text" placeholder='My Awesome Story' className='focus:border-none focus:outline-none text-2xl' />


                <div className="flex items-center gap-2">
                    <label htmlFor="" className="text-sm text-gray-500">Select a catagory</label>
                    <select name="" id="" className="bg-white px-2 py-1.5 rounded-md shadow-md focus:border-none focus:outline-none text-gray-500 text-sm">
                        {
                            catagories.map(i => (
                                <option value={i.value} key={i.value}>{i.label}</option>
                            ))
                        }
                    </select>
                </div>

                <textarea placeholder="A short description" className="bg-white w-full lg:w-[80%] text-sm p-4 rounded-lg shadow-md" />

                <ReactQuill theme="snow" className='h-[200px] w-full lg:w-[80%] bg-white rounded-md shadow-md' />


                <div>
                    <button className='bg-indigo-600 text-white py-1.5 px-4 rounded-md text-sm'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost