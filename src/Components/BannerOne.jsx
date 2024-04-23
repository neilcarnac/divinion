import React from 'react'
import { Button } from "@material-tailwind/react";

const BannerOne = () => {
    return (
        <div className='flex flex-row w-full h-[100vh] justify-between font-[calibri]'>
            <div className='flex flex-col p-24 gap-6'>
                <div className='flex flex-col'>

                    <h2 className='w-4/6 sm:text-xl lg:text-4xl leading-tight font-semibold'>Meaningful investments in
                        Main Street businesses</h2>
                    <h2 className='w-2/4 sm:text-lg lg:text-xl leading-tight font-thin'>Browse vetted investment offerings in communities all over the US.</h2>
                </div>
                <Button className='p-4 lowercase w-1/3 bg-black text-white' style={{ textTransform: 'capitalize' }}>
                    Get Started
                </Button>
            </div>

        </div>
    )
}

export default BannerOne
