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
                    <div className="flex lg:flex-row flex-col items-center mx-auto gap-4 m-8 justify-center">

                        <div className=' text-sm flex-col items-center font-joe shadow-lg lg:w-1/4 w-1/2 p-6 rounded-xl'>
                            <div className="flex flex-col gap-4">
                                <p className='font-semibold '>Navigating Volatility for Alpha:
                                </p>
                                <p className='leading-none'>While the NIFTY 50 has demonstrated unparalleled growth, it also carries a distinctive feature—volatility. Over a 10-year period, it is 1.74 times more volatile than the US market, 1.65 times more volatile than the European market, and 1.17 times more volatile than the Asian market. This characteristic becomes our canvas for employing a sophisticated Derivatives strategy, allowing us to harness the inherent volatility and generate consistent, higher alpha for our investors.
                                </p>
                            </div>
                        </div>
                        <div className=' text-sm flex-col items-center font-joe shadow-lg lg:w-1/4 w-1/2 p-6 rounded-xl'>
                            <div className="flex flex-col gap-4">
                                <p className='font-semibold '>Dynamic Portfolio Alignment:
                                </p>
                                <p className='leading-none'>Our commitment to active management sets us apart. Through the dynamic management of long and short positions, we adeptly align our portfolio to seize opportunities within the Indian markets. This proactive approach positions us to not only navigate market shifts but also consistently generate alpha, creating value for our stakeholders.
                                </p>
                            </div>
                        </div>
                        <div className=' text-sm flex-col items-center font-joe shadow-lg lg:w-1/4 w-1/2 p-6 rounded-xl'>
                            <div className="flex flex-col gap-4">
                                <p className='font-semibold '>Joining the India Growth Story:

                                </p>
                                <p className='leading-none'>At Divinion, we recognize India's extraordinary potential and invite you to be part of this compelling narrative. As we present the data in our latest table, it becomes evident that investing in India isn't merely a financial decision but an opportunity to contribute to and benefit from a nation's transformative journey.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center mx-auto gap-4 justify-center">
                        <img src="hdfc_logo.png" className='w-1/4' alt="" />
                        <img src="azb.png" className='w-1/4' alt="" />
                        <img src="mcred.png" className='w-1/4' alt="" />
                    </div>

                </div>
            </div >
        </>
    )
}

export default AboutBanOne
