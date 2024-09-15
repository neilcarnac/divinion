import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const AboutBanOne = () => {
    const { isAdmin } = useContext(UserContext);
    const [bannerData, setBannerData] = useState([]);
    const [newDescription, setNewDescription] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const fetchBannerData = async () => {
            const db = getFirestore();
            const bannerDoc = await getDoc(doc(db, 'AP_news', 'bannerContent'));
            if (bannerDoc.exists()) {
                setBannerData(bannerDoc.data().content || []);
            } else {
                console.log('No banner data found');
            }
        };
        fetchBannerData();
    }, []);

    const handleAddNewText = () => {
        setNewTitle('');
        setNewDescription('');
        setIsAdding(true);
        setEditIndex(null);
    };

    const handleSaveNewText = async () => {
        try {
            const db = getFirestore();
            let updatedBannerData = [...bannerData];
            if (editIndex !== null) {
                updatedBannerData[editIndex] = { title: newTitle, description: newDescription };
            } else {
                updatedBannerData = [...bannerData, { title: newTitle, description: newDescription }];
            }
            await setDoc(doc(db, 'AP_news', 'bannerContent'), { content: updatedBannerData });
            setBannerData(updatedBannerData);
            setIsAdding(false);
            console.log('Text successfully added/updated');
        } catch (error) {
            console.error('Error adding/updating text: ', error);
        }
    };

    const handleEditText = (index) => {
        setNewTitle(bannerData[index].title);
        setNewDescription(bannerData[index].description);
        setIsAdding(true);
        setEditIndex(index);
    };

    const handleDeleteText = async (index) => {
        try {
            const db = getFirestore();
            const updatedBannerData = bannerData.filter((_, i) => i !== index);
            await setDoc(doc(db, 'AP_news', 'bannerContent'), { content: updatedBannerData });
            setBannerData(updatedBannerData);
            console.log('Text successfully deleted');
        } catch (error) {
            console.error('Error deleting text: ', error);
        }
    };

    return (
        <>

            <div className="flex mx-auto pt-16 bg-white">

                <div className="flex flex-col items-center mx-auto my-auto gap-4">
                    <div className="flex flex-col sm:pl-8 sm:pr-8 mx-auto items-center gap-2">
                        {/* <p className='text-sm font-medium'>ABOUT BLOCK</p> */}
                        <p className='text-4xl sm:text-xl text-center leading-tight font-semibold'>Empowering the world to design</p>
                        <p className='w-full md:text-base lg:text-base sm:text-xs text-center text-[#999999] leading-tight'>
                            Creating a whole new era of finance
                        </p>
                    </div>
                    <div className="flex lg:flex-row flex-wrap items-center mx-auto gap-4 m-8 justify-center">
                        {bannerData && bannerData.length > 0 ? (
                            bannerData.map((item, index) => (
                                <div key={index} className=' flex-col bg-[WHITE] items-center   cursor-pointer shadow-lg lg:w-1/4 w-3/4 p-6 rounded-xl transform transition-transform duration-500 hover:scale-105'>
                                    <div className="flex flex-col gap-2">
                                        <p className='font-semibold text-base'>{item.title}</p>
                                        <p className='leading-tight text-sm'>{item.description}</p>
                                    </div>
                                    {isAdmin && (
                                        <div className="flex justify-end gap-2 mt-4">
                                            <button onClick={() => handleEditText(index)} className="bg-black/80 text-white text-sm px-2 py-1 rounded hover:bg-black">Edit</button>
                                            <button onClick={() => handleDeleteText(index)} className="bg-black/80 text-white text-sm px-2 py-1 rounded hover:bg-black">Delete</button>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <>
                                <p>No banner data available</p>
                            </>
                        )}
                    </div>

                    {isAdmin && (
                        <>
                            {!isAdding && (
                                <button onClick={handleAddNewText} className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Add Some Description and News
                                </button>
                            )}
                            {isAdding && (
                                <div className="flex flex-col gap-4 lg:w-[50%] w-[70%] bg-white shadow-md p-8">
                                    <input
                                        type="text"
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                        placeholder="Enter title"
                                        className="border p-3 rounded outline-none placeholder:text-sm"
                                    />
                                    <textarea
                                        value={newDescription}
                                        onChange={(e) => setNewDescription(e.target.value)}
                                        placeholder="Enter new description"
                                        rows={6}
                                        className="border p-3 rounded outline-none placeholder:text-sm"
                                    />
                                    <button onClick={handleSaveNewText} className="bg-green-500 text-white px-4 py-2 rounded">
                                        Save Text
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                    <div className="mx-auto flex  flex-col p-4 lg:p-10">
                        <img src="ICEBEARG.jpg" className='hover:cursor-pointer p-5 hover:p-0 transition: duration-500' alt="" />
                    </div>
                    <div className="text-center text-sm lg:text-xl">
                        <p>       SEBI AIF Registration No.: IN / AIF3 / 21-22 / 0968
                        </p>
                        <p>                            Category of AIF: Category III
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>

                        <div className="flex lg:flex-row flex-col items-center mx-auto lg:gap-14 gap-5 justify-center">
                            <div className="flex flex-col items-center font-semibold">
                                <img src="hdfc_logo.png" className="w-[200px]" alt="" />
                                <p className='mt-[-40px]'>Bankers</p>
                                <p>HDFC Bank Limited</p>
                            </div>
                            <div className="flex flex-col items-center justify-center font-semibold">
                                <img src="azb.png" className="w-[200px] lg:mt-[25px] mt-0" alt="" />
                                <p className=''>Legal Advisors</p>
                                <p className='text-center'>AZB & Partners</p>
                            </div>
                            <div className="flex flex-col items-center justify-center font-semibold">
                                <img src="mcred.png" className="w-[200px] sm:block" alt="" />
                                <p className='mt-[-50px]'>Trusteeship Services</p>
                                <p className='text-center'>MITCON Credentia</p>
                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col text-center items-center mx-auto gap-14 justify-center">
                            <div className="flex flex-col text-sm lg:text-base  items-center justify-center font-semibold">
                                <img src="validus.png" className="w-[200px]" alt="" />
                                <p className='mt-[14px]'>Registrar & Transfer Agents</p>
                                <p className='text-center'>Validus Fintech Services Pvt. Ltd.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center font-semibold">
                                <img src="psgs.jpeg" className="w-[200px]" alt="" />
                                <p className='lg:mt-[-60px] mt-[-20px]'>Tax Consultant</p>
                                <p className='text-center'>PSGS & CO LLP</p>
                            </div>
                            <div className="flex flex-col items-center justify-center font-semibold">
                                <img src="hdfc_logo.png" className="w-[200px]" alt="" />
                                <p className='mt-[-40px]'>Custodian & Fund Accountants</p>
                                <p className='text-center'>HDFC Bank Limited</p>
                            </div>
                            <div className="flex flex-col items-center justify-center ">
                                <div className="flex flex-col font-joe mt-10 mb-5 font-thin  items-center">
                                    <p className='text-gray-800 text-2xl'>K B J & Associates</p>
                                    <p className=''>Chartered Accountant</p>
                                </div>
                                <p className='font-semibold'>Auditors</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutBanOne;
