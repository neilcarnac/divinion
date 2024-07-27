import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Modal = ({ text, visible, onClose }) => {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/20 z-50">
            <div className="bg-white/80 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                <div className="text-lg text-black">
                    {text}
                </div>
                <div className="flex flex-row-reverse">

                    <button
                        onClick={onClose}
                        className="mt-4  text-black border-black border-2 rounded-full px-2 hover:bg-black hover:text-white rounded  transition duration-300"
                    >
                        x
                    </button>

                </div>
            </div>
        </div>
    );
};

const HomBanOne = () => {
    const [visibleModal, setVisibleModal] = useState(null);

    const openModal = (index) => {
        setVisibleModal(index);
    };

    const closeModal = () => {
        setVisibleModal(null);
    };

    const modalTexts = [
        "Divinion, a fusion of the words 'Divine' and 'Union,' embodies a profound concept at the heart of its identity. Established in October 2020, Divinion Advisory Services Pvt Ltd (DASL) was conceived to bring forth a divine union of expertise and insight in the realm of financial management.s",
        "Appointed as the investment manager for the Divinion Dynamic Fund (DDF), DASL embarked on a journey to dynamically navigate the ever-evolving landscape of financial markets. The inception of DDF represents a commitment to agile and strategic fund management.",
        "In December 2021, Divinion Alternative India Fund (DAIF) secured SEBI registration as a Category III Alternative Investment Fund (AIF). This milestone marked Divinion's foray into alternative investments, showcasing a dedication to diverse and sophisticated investment strategies.",
        "In collaboration with HDFC Bank, AZB & Partners, and Credentia Trusteeship, Divinion is fortified with the strength of reliable custodianship, legal acumen, and unwavering trust. Together, we forge a path towards financial excellence, guided by the principles of integrity, security, and legal soundness."
    ];

    return (
        <div className="relative bg-cover z-20 flex flex-col pb-4 sm:pb-10 md:p-8 bg-center w-full h-[76vh] my-auto mt-1" style={{ backgroundImage: "url('/bgg.svg')" }}>
            <div className="flex text-white flex-col gap-10 sm:gap-4 my-auto lg:pl-56 md:pl-20 pl-10 text-left">
                <div className="flex flex-col font-joe font-bold tracking-wider lg:text-5xl md:text-5xl text-2xl">
                    <p>Meaningful investments in</p>
                    <p>Main Street businesses</p>
                </div>
                <div className="flex flex-col items-start text-left">
                    <ul className="list-disc pl-5">
                        <li>
                            <button
                                className="cursor-pointer text-left"
                                onClick={() => openModal(0)}
                            >
                                Genesis Of Divinion
                            </button>
                        </li>
                        <li>
                            <button
                                className="cursor-pointer text-left"
                                onClick={() => openModal(1)}
                            >
                                Dynamic Fund Management
                            </button>
                        </li>
                        <li>
                            <button
                                className="cursor-pointer text-left"
                                onClick={() => openModal(2)}
                            >
                                Alternative Investment Endeavor
                            </button>
                        </li>
                        <li>
                            <button
                                className="cursor-pointer text-left"
                                onClick={() => openModal(3)}
                            >
                                Our Partners
                            </button>
                        </li>
                    </ul>
                </div>
                <Link to="/login" >
                    <button className='bg-[#7B61FF] p-4 lg:w-1/5 sm:w-1/2 rounded-sm hover:bg-transparent transition duration-500'>
                        GET STARTED
                    </button>
                </Link>
            </div>

            <Modal
                text={modalTexts[visibleModal]}
                visible={visibleModal !== null}
                onClose={closeModal}
            />
        </div>
    );
};

export default HomBanOne;
