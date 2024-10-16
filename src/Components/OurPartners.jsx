import React from 'react'

const OurPartners = () => {
    return (
        <div className='py-32'>
            <p className="text-3xl lg:text-5xl hover:text-6xl cursor-pointer ease-in transition: duration-700 text-center font-joe font-semibold mt-10">
                Our Partners
            </p>

            <div className="flex flex-col gap-4">
                <div className="flex lg:flex-row flex-col items-center mx-auto lg:gap-14 gap-5 justify-center">
                    <div className="flex flex-col items-center font-semibold">
                        <img src="hdfc_logo.png" className="w-[200px]" alt="" />
                        <p className="mt-[-40px]">Bankers</p>
                        <p>HDFC Bank Limited</p>
                    </div>
                    <div className="flex flex-col items-center justify-center font-semibold">
                        <img
                            src="azb.png"
                            className="w-[200px] lg:mt-[25px] mt-0"
                            alt=""
                        />
                        <p className="">Legal Advisors</p>
                        <p className="text-center">AZB & Partners</p>
                    </div>
                    <div className="flex flex-col items-center justify-center font-semibold">
                        <img src="mcred.png" className="w-[200px] sm:block" alt="" />
                        <p className="mt-[-50px]">Trusteeship Services</p>
                        <p className="text-center">MITCON Credentia</p>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col text-center items-center mx-auto gap-14 justify-center">
                    <div className="flex flex-col text-sm lg:text-base  items-center justify-center font-semibold">
                        <img src="validus.png" className="w-[200px]" alt="" />
                        <p className="mt-[14px]">Registrar & Transfer Agents</p>
                        <p className="text-center">
                            Validus Fintech Services Pvt. Ltd.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center font-semibold">
                        <img src="psgs.jpeg" className="w-[200px]" alt="" />
                        <p className="lg:mt-[-60px] mt-[-20px]">Tax Consultant</p>
                        <p className="text-center">PSGS & CO LLP</p>
                    </div>
                    <div className="flex flex-col items-center justify-center font-semibold">
                        <img src="hdfc_logo.png" className="w-[200px]" alt="" />
                        <p className="mt-[-40px]">Custodian & Fund Accountants</p>
                        <p className="text-center">HDFC Bank Limited</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="flex flex-col font-joe mt-10 mb-5 font-thin  items-center">
                            <p className="text-gray-800 text-2xl">K B J & Associates</p>
                            <p className="">Chartered Accountant</p>
                        </div>
                        <p className="font-semibold">Auditors</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPartners