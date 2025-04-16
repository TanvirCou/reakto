import React from 'react'

const FilterSearch = () => {
    return (
        <div className='flex flex-col gap-1'>
            <p className='font-semibold text-gray-500'>Filter</p>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-sm flex items-center gap-2'>
                    <input type="radio" name="sort" value="newest" className='appearance-none w-3 h-3 border-[1.5px] border-indigo-600 checked:bg-indigo-500' />
                    Newest
                </label>
                <label htmlFor="" className='text-sm flex items-center gap-2'>
                    <input type="radio" name="sort" value="most-popular" className='appearance-none w-3 h-3 border-[1.5px] border-indigo-600 checked:bg-indigo-500' />
                    Most Popular
                </label>
                <label htmlFor="" className='text-sm flex items-center gap-2'>
                    <input type="radio" name="sort" value="trending" className='appearance-none w-3 h-3 border-[1.5px] border-indigo-600 checked:bg-indigo-500' />
                    Trending
                </label>
                <label htmlFor="" className='text-sm flex items-center gap-2'>
                    <input type="radio" name="sort" value="oldest" className='appearance-none w-3 h-3 border-[1.5px] border-indigo-600 checked:bg-indigo-500' />
                    Oldest
                </label>
            </div>
        </div>
    )
}

export default FilterSearch