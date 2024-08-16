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

                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default HomBanTwo
