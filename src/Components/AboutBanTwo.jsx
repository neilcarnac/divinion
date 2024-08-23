import React from 'react';

const AboutBanTwo = () => {
    return (
        <>
            <div className="flex flex-col items-start gap-2 lg:pl-24 pt-10 sm:pl-8 font-semibold">
                <p className='text-2xl sm:text-xl'>Our Values</p>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16">
                    <img src="1.jpg" className='lg:w-[600px] rounded-xl w-full pt-8 pr-8' alt="" />
                    <div className="flex flex-col my-auto items-start gap-4">
                        {/* <p className='text-[#999999]'>01</p> */}
                        <p className='text-2xl'>Corporate Social Responsibility at Divinion -<br /> Art of Being Responsible and Rewarding</p>
                        <p className='w-4/5 text-gray-950 font-thin leading-tight'>
                            At Divinion, we believe in making a positive impact beyond financial markets. Committed to social responsibility, we allocate 25% of our profits towards Corporate Social Responsibility (CSR) activities. This dedicated initiative reflects our ethos of contributing to the well-being of the communities we operate in. Through our CSR endeavors, we aim to create lasting value and contribute meaningfully to societal progress.
                        </p>
                        {/* <p className='font-normal underline'>Explore Services {"-->"}</p> */}
                    </div>
                </div>
                {/* <div className="flex flex-col lg:flex-row-reverse lg:justify-between w-full ">
                    <img src="abb.svg" className='lg:w-[600px] rounded-xl w-full pt-8 pr-8' alt="" />
                    <div className="flex flex-col my-auto items-start gap-4">
                        <p className='text-[#999999]'>02</p>
                        <p className='text-2xl'>Customer Login</p>
                        <a href="/blog" className='w-4/5'>
                            <p className='text-gray-950 font-thin leading-tight underline'>1{")"} News Letter </p>
                        </a>
                        <a href="/SOA.pdf" target="_blank" rel="noopener noreferrer" className='w-4/5'>
                            <p className='text-gray-950 font-thin leading-tight underline'>2{")"} SOA </p>
                        </a>
                        <p className='font-normal underline'>Explore Services {"-->"}</p>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default AboutBanTwo;
