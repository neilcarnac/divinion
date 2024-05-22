import React from 'react'

function BannerTwo() {
    return (
        <>
            <div className='flex flex-col w-full p-24 gap-8 h-[100vh] bg-slate-100'>
                <div className='flex flex-col items-start '>
                    <p className='text-2xl leading-none font-semibold'>Schemes Open to invest...</p>
                    <p className='w-1/3 leading-tight text-sm'>Explore pre-vetted investment opportunities available in a growing number of industry categories.</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row gap-8'>
                        <div className='flex flex-col w-[300px] gap-4 bg-white shadow-lg'>
                            <img src="Img.svg" alt="" />

                            <div className='pl-4 gap-0'>

                                <p className=' font-semibold '>Scheme 1</p>
                                <p className='text-gray-400 text-xs'>Brooklyn, NY </p>
                            </div>
                            <p className='pl-4 pr-4 pb-4 leading-tight text-sm'>A recognized leader in language immersion & early education, opening second school.</p>
                            <button className='bg-black hover:bg-white hover:cursor-pointer hover:text-black rounded-lg transition-colors duration-[1000ms] text-white p-4 ml-8 mb-8 mr-8'>
                                Book Now</button>
                        </div>
                        <div className='flex flex-col w-[300px] gap-4 bg-white shadow-lg'>
                            <img src="Img.svg" alt="" />

                            <div className='pl-4 gap-0'>

                                <p className=' font-semibold '>Scheme 1</p>
                                <p className='text-gray-400 text-xs'>Brooklyn, NY </p>
                            </div>
                            <p className='pl-4 pr-4 pb-4 leading-tight text-sm'>A recognized leader in language immersion & early education, opening second school.</p>
                            <button className='bg-black hover:bg-white hover:cursor-pointer hover:text-black rounded-lg transition-colors duration-[1000ms] text-white p-4 ml-8 mb-8 mr-8'>
                                Book Now</button>
                        </div>
                        <div className='flex flex-col w-[300px] gap-4 bg-white shadow-lg'>
                            <img src="Img.svg" alt="" />

                            <div className='pl-4 gap-0'>

                                <p className=' font-semibold '>Scheme 1</p>
                                <p className='text-gray-400 text-xs'>Brooklyn, NY </p>
                            </div>
                            <p className='pl-4 pr-4 pb-4 leading-tight text-sm'>A recognized leader in language immersion & early education, opening second school.</p>
                            <button className='bg-black hover:bg-white hover:cursor-pointer hover:text-black rounded-lg transition-colors duration-[1000ms] text-white p-4 ml-8 mb-8 mr-8'>
                                Book Now</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>)
}

export default BannerTwo
