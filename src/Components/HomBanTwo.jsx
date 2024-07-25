import React, { useEffect, useState } from 'react';
import { db } from './Firebase/firebaseConfig'; // Adjust the path as necessary
import { doc, getDoc } from 'firebase/firestore';

const HomBanTwo = () => {
    const [currentAUM, setCurrentAUM] = useState(null);
    const [amount, setAmount] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAUM = async () => {
            try {
                // Reference to the document
                const docRef = doc(db, 'aum', 'currentAUM');
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setAmount(docSnap.data().amount); // Access the amount field
                } else {
                    setError('No such document!');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchAUM();
    }, []);
    return (
        <>
            <div className="mx-auto mt-16 flex flex-col items-start lg:p-8 p-4 bg-black/90 text-white sm:gap-2 rounded-xl lg:w-1/4 w-1/2">
                <p className="font-bold sm:leading-none lg:text-2xl text-xl">Current AUM Amount:</p>
                <p className="lg:text-xl text-sm">${amount}</p>

            </div>

            <div className="bg-white flex w-full ">
                <div className="flex font-joe flex-col items-center justify-center mx-auto mt-28 gap-2 lg:gap-6">
                    <p className='font-bold text-xl lg:text-5xl'>Recent News Topics</p>
                    <div className="flex flex-col items-center lg:text-xl lg:leading-tight sm:text-xs text-[#999999]">
                        <p>Explore pre-vetted investment opportunities available in a growing</p>
                        <p>number of industry categories.</p>
                    </div>
                    <div className="flex flex-col text-xs gap-10 justify-between p-20 sm:p-10">
                        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-12">
                            <div className="lg:w-1/3 w-full h-auto shadow-lg flex flex-col">
                                <img src="hoem.png" alt="" />
                                <div className="flex font-sans  flex-col gap-4 p-4">
                                    <div className="flex flex-col">
                                        <p className='font-semibold leading-tight text-sm'>A True Partner:</p>
                                        <p>We stand as true partners in your financial journey. Beyond investing your capital, we align our interests with yours by investing our own funds. This shared commitment ensures that our success is intertwined with yours.
                                        </p>
                                    </div>
                                    <div className="flex flex-col">

                                        <p className='font-semibold leading-tight text-sm'>Direct and Personal Access:</p>
                                        <p>At our boutique, we prioritize direct communication. You have exclusive access to the decision-makers who guide your investments. There are no intermediaries—just direct discussions about ideas, concerns, and life changes. Your financial journey is personal, and we treat it as such.
                                        </p>
                                    </div>
                                    <div className="flex flex-col">

                                        <p className='font-semibold leading-tight text-sm'>Tailored Flexibility:</p>
                                        <p>As independent managers, we pride ourselves on the agility to make precise and timely decisions tailored to your portfolio. This flexibility is a key advantage, allowing us to navigate the dynamic landscape of financial markets with your unique goals in mind.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full h-auto shadow-lg flex flex-col">
                                <div className="flex font-sans  flex-col gap-4 lg:gap-10 p-4">
                                    <img src="csr.webp" className='h-1/2 p-2' alt="" />
                                    <div className="flex flex-col">

                                        <p className='font-semibold leading-tight text-sm'>Corporate Social Responsibility at Divinion:                                        </p>
                                        <p>At Divinion, we believe in making a positive impact beyond financial markets. Committed to social responsibility, we allocate 25% of our profits towards Corporate Social Responsibility (CSR) activities. This dedicated initiative reflects our ethos of contributing to the well-being of the communities we operate in. Through our CSR endeavors, we aim to create lasting value and contribute meaningfully to societal progress.

                                        </p>
                                    </div>
                                    {/* <button className='bg-[#7B61FF] p-4 text-white text-xl hover:bg-transparent transition duration-500 hover:text-[#7B61FF] '>View</button> */}
                                </div>
                            </div>

                            <div className="lg:w-1/3 w-full h-auto shadow-lg flex flex-col">
                                <div className="flex font-sans  flex-col gap-6">
                                    <img src="lne.png" alt="" />
                                    <div className="flex flex-col pl-4 pr-4 pb-4">

                                        <p className='font-semibold leading-tight text-sm'>Leadership and Expertise:                                        </p>
                                        <p>Founded by Ms. Shreemoyee Mukhopadhyay, a qualified CFA with a rich background in capital markets, Divinion Advisory Services Pvt Ltd (DASL) is anchored by strong leadership. Ms. Mukhopadhyay's experience extends to teaching international finance at HR College, and she is currently pursuing an MBA at Wharton Business School, adding a global perspective to the firm's vision.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-12">
                            <div className="lg:w-1/3 w-full h-auto shadow-lg flex flex-col">
                                <div className="flex font-sans  flex-col gap-4">
                                    <img src="hoem.png" alt="" />
                                    <div className="flex flex-col  pl-4 pr-4 pb-4">
                                        <p className='font-semibold leading-tight text-sm'>Strategic Team Formation:
                                        </p>
                                        <p>We stand as true partners in your financial journey. Beyond investing your capital, we align our interests with yours by investing our own funds. This shared commitment ensures that our success is intertwined with yours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full h-auto shadow-lg flex flex-col">
                                <div className="flex font-sans  flex-col gap-4 lg:gap-10 ">
                                    <img src="csr.webp" className='h-1/2 p-2' alt="" />
                                    <div className="flex flex-col pl-4 pr-4 pb-4">

                                        <p className='font-semibold leading-tight text-sm'>Investment Approach:
                                        </p>
                                        <p>Divinion's philosophy centers around the belief in steady returns and prudent risk management. The fund maintains exposure primarily in large-cap stocks, emphasizing those with higher index weightage and robust PSU stocks offering high dividend yields. This approach reflects a commitment to balancing returns with capital preservation.

                                        </p>
                                    </div>
                                    {/* <button className='bg-[#7B61FF] p-4 text-white text-xl hover:bg-transparent transition duration-500 hover:text-[#7B61FF] '>View</button> */}
                                </div>
                            </div>

                            <div className="lg:w-1/3 w-full h-auto shadow-lg flex flex-col">
                                <div className="flex font-sans  flex-col gap-6 ">
                                    <img src="lne.png" alt="" />
                                    <div className="flex flex-col  pl-4 pr-4 pb-4">

                                        <p className='font-semibold leading-tight text-sm'>Performance Consistency in All Market Conditions:
                                        </p>
                                        <p>Divinion's overarching goal is to shine in both good and challenging market conditions. The firm aspires to maintain a positive outlook irrespective of market dynamics, emphasizing the importance of adaptability and resilience. This commitment aligns with the broader philosophy of navigating market fluctuations with a focus on long-term success.


                                        </p>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomBanTwo
