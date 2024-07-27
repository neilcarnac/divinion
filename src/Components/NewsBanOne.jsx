import React from 'react'

const NewsBanOne = () => {
    return (
        <>
            <div className="relative bg-cover z-20 flex flex-col pb-4 sm:pb-10 md:p-8 bg-center w-full h-[76vh] my-auto mt-1" style={{ backgroundImage: "url('/coverfooto.jpg')" }}>
                <div className="flex font-joe flex-col justify-between m-10 bg-gray-300/60 rounded-lg p-10 lg:w-1/3 w-2/3  my-auto lg:h-full h-2/3">
                    <div className="flex flex-col gap-4 lg:gap-2">
                        <div className="flex text-lg flex-row  justify-between">
                            <div className="flex flex-col">
                                <p>News Today For Divinion</p>
                                <div className="h-[2px] bg-red-500"></div>
                            </div>
                        </div>
                        <p className='text-4xl font-semibold'>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque incidunt fugit delectus iusto quae, perferendis voluptatibus doloribus beatae eveniet numquam facere? Iste, amet tenetur!</p>
                    </div>
                    <div className="flex flex-row-reverse font-semibold">
                        <p>Date 22/07/24</p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default NewsBanOne
