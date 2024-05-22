import React from 'react'
import { Button } from "@material-tailwind/react";

const BannerOne = () => {
    return (
        <div className='flex flex-col w-full h-[100vh] p-24'>
        <div className="flex flex-row justify-between w-full">
          <div className='flex flex-col gap-4 leading-tight w-1/2'>
            <h2 className='lg:text-[40px] leading-none font-semibold'>
              Meaningful Investments Are the best way to survive
            </h2>
            <p className='text-sm w-3/4'>
              Browse vetted investment offerings in communities all over the US. Browse vetted investment offerings in communities all over the US. all over the US.
            </p>
            <p className='underline font-thin text-sm'>
              Let's discuss soon
            </p>
            <button className='bg-black w-1/3 hover:bg-white hover:cursor-pointer hover:text-black rounded-lg transition-colors duration-[1000ms] text-white p-4'>
              Book Now
            </button>
            {/* <div className='flex flex-col lg:w-[380px] shadow-lg'>
              <div className='flex flex-row bg-gray-200'>
                <div className='p-6 bg-blue-200'>
                  <p>Package 1</p>
                </div>
                <div className='p-6 bg-gray-200'>
                  <p>Package 2</p>
                </div>
                <div className='p-6 bg-gray-200'>
                  <p>Package 3</p>
                </div>
              </div>

              <div className='flex flex-row justify-between p-6 items-center bg-white'>
                <p>To get a call Back</p>
                <button className='bg-blue-600 hover:bg-blue-300 hover:cursor-pointer hover:text-black rounded-xl transition-[1000ms] text-white p-4'>Book Now</button>
              </div>
            </div> */}
          </div>
          <div className='flex flex-col leading-tight '>
            <img src="hpage.svg" className='w-full h-[400px]' alt="" />
          </div>
        </div>

      </div>
    )
}

export default BannerOne
