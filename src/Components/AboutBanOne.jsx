import React from 'react'

const AboutBanOne = () => {
    return (
        <>
            <div className="flex mx-auto pt-16 bg-[white]">
                <div className="flex flex-col items-center mx-auto my-auto gap-4">
                    <div className="flex flex-col sm:pl-8 sm:pr-8  mx-auto items-center gap-2">
                        <p className='text-sm font-medium'>ABOUT BLOCK</p>
                        <p className='text-4xl sm:text-xl text-center leading-tight font-semibold'>Empowering the world to design</p>
                        <p className='sm:w-full lg:w-1/2 md:text-base lg:text-base sm:text-xs text-center text-[#999999] leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias est praesentium necessitatibus totam veniam! ipsum dolor sit amet consectetur, adipisicing elit. Molestias est praesentium necessitatibus totam veniam!</p>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center mx-auto gap-4 m-8 justify-center">
                        {[
                            {
                                title: 'Navigating Volatility for Alpha:',
                                description: 'While the NIFTY 50 has demonstrated unparalleled growth, it also carries a distinctive feature—volatility. Over a 10-year period, it is 1.74 times more volatile than the US market, 1.65 times more volatile than the European market, and 1.17 times more volatile than the Asian market. This characteristic becomes our canvas for employing a sophisticated Derivatives strategy, allowing us to harness the inherent volatility and generate consistent, higher alpha for our investors.'
                            },
                            {
                                title: 'Dynamic Portfolio Alignment:',
                                description: 'Our commitment to active management sets us apart. Through the dynamic management of long and short positions, we adeptly align our portfolio to seize opportunities within the Indian markets. This proactive approach positions us to not only navigate market shifts but also consistently generate alpha, creating value for our stakeholders.'
                            },
                            {
                                title: 'Joining the India Growth Story:',
                                description: 'At Divinion, we recognize India\'s extraordinary potential and invite you to be part of this compelling narrative. As we present the data in our latest table, it becomes evident that investing in India isn\'t merely a financial decision but an opportunity to contribute to and benefit from a nation\'s transformative journey.'
                            }
                        ].map((item, index) => (
                            <div key={index} className='text-sm flex-col bg-[WHITE] items-center font-joe h-[230px] sm:h-[250px] cursor-pointer shadow-lg lg:w-1/4 w-3/4 p-6 rounded-xl transform transition-transform duration-500 hover:scale-105'>
                                <div className="flex flex-col gap-2">
                                    <p className='font-semibold'>{item.title}</p>
                                    <p className='leading-none'>{item.description}</p>
                                </div>
                            </div>
                        ))}
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

export default AboutBanOne;
