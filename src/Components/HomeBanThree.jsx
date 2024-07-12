import React from 'react'
import { Link } from 'react-router-dom';
const HomeBanThree = () => {
    return (
        <>
            <div className="relative bg-cover z-20 flex flex-col items-center p-24 md:p-16 sm:p-12 bg-center w-full my-auto mt-1" style={{ backgroundImage: "url('/Graph.png')" }}>
                <div className="flex lg:flex-row flex-col items-center md:gap-10 sm:gap-16 lg:justify-between">
                    <div className="flex flex-col gap-10 sm:gap-4 my-auto text-left">
                        <div className="flex flex-col font-joe font-bold tracking-wider lg:text-5xl md:text-4xl text-2xl">
                            <p>Invest Now - But With </p>
                            <p>Professional Caregivers</p>
                        </div>
                        <div className="lg:w-1/2 w-full lg:text-base text-sm ">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint facilis officiis dolor nesciunt aliquid ab quaerat esse delectus pariatur dolores minima, quibusdam totam.</p>
                        </div>
                        <Link to="/about">

                            <button className='bg-[#7B61FF] text-white hover:text-white p-4 lg:w-1/5 sm:w-1/2 rounded-sm hover:bg-transparent transition duration-500 lg:text-base text-sm sm:text-xs'>
                                Learn More
                            </button>
                        </Link>
                    </div>

                    <img src="cuate.svg" className='lg:w-[400px]  w-[300px] ' alt="" />
                </div>

            </div>

        </>
    )
}

export default HomeBanThree;
