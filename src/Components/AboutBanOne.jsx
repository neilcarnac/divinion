import React from 'react'

const AboutBanOne = () => {
    return (
        <>
            <div className="flex mx-auto mt-16">
                <div className="flex flex-col items-center mx-auto my-auto gap-4">
                    <div className="flex flex-col mx-auto items-center gap-4">
                        <p>ABOUT BLOCK</p>
                        <p className='text-4xl sm:text-2xl font-semibold'>Empowering the world to design</p>
                        <p className='sm:w-full sm:pl-8 sm:pr-8 lg:w-1/2 md:text-base lg:text-base sm:text-xs text-center text-[#999999] leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias est praesentium necessitatibus totam veniam! ipsum dolor sit amet consectetur, adipisicing elit. Molestias est praesentium necessitatibus totam veniam!</p>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center mx-auto gap-4 justify-center">
                        <img src="Graph.png" className='lg:w-1/4 w-1/2 rounded-xl' alt="" />
                        <img src="Graph.png" className='lg:w-1/4 w-1/2 rounded-xl' alt="" />
                        <img src="Graph.png" className='lg:w-1/4 w-1/2 rounded-xl' alt="" />
                    </div>
                    <div className="flex flex-row items-center mx-auto gap-4 justify-center">
                        <img src="hdfc_logo.png" className='w-1/4' alt="" />
                        <img src="azb.png" className='w-1/4' alt="" />
                        <img src="mcred.png" className='w-1/4' alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutBanOne
