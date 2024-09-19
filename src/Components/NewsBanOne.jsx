import React from 'react'

const NewsBanOne = () => {
    return (
        <>
            <div className="relative bg-cover z-20 flex flex-col pb-4 sm:pb-10 md:p-8 w-full h-[85vh] my-auto mt-1">
                <img
                    src="/nbb.avif"
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover transform scale-x-[-1] z-[-1]"
                />
                
                <div className="flex font-joe flex-col justify-between m-10 p-10 rounded-lg lg:w-1/3 w-2/3 my-auto h-[76-80vh]"
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)', 
                        backdropFilter: 'blur(10px)',           
                        borderRadius: '15px',                   
                        border: '1px solid rgba(255, 255, 255, 0.2)', 
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                    }}>
                    <div className="flex flex-col gap-4 lg:gap-2">
                        <div className="flex text-lg flex-row justify-between">
                            <div className="flex flex-col">
                                <p className='text-xl lg:text-3xl text-white'>Divinion Insights</p>
                                <div className="h-[2px] bg-red-500"></div>
                            </div>
                        </div>
                        <p className="text-white">
                            Explore our latest market updates and in-depth analysis from our investment team. We provide critical insights on global market trends, strategic decisions, and how macroeconomic factors influence the financial landscape. Stay connected with key developments shaping markets and understand how we navigate changing conditions to identify opportunities. Please note, these views reflect our perspective and are not final recommendations; they should be considered as part of a broader analysis.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsBanOne
