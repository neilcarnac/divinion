import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const policies = [
    "Code of Conduct Policy",
    "Client Acceptance and PML Policy",
    "Conflict of Interest Policy",
    "Monitoring Investee Companies Policy",
    "Grievance Redressal Policy",
    "Insider Trading Policy",
    "Proxy Voting Policy",
    "Stewardship Policy",
    "Valuation Policy",
    "Risk Management Policy",
    "Investor Charter"
];

const SPPComponent = () => {
    return (
        <div className="flex flex-col w-full mx-auto">
            <a
                href="https://drive.google.com/drive/folders/1u9_s8i2xLv-P2Knq2vAkHx-syHdxd670?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='font-joe font-semibold text-xl mt-10 mb-10 lg:mt-20 lg:text-4xl text-center text-blue-600 underline'
            >
                Click here for Policy documents.
            </a>
            <div className="flex flex-col gap-5">
                {policies.map((policy, index) => (
                    <div key={index} className="p-4 w-3/4 mx-auto flex flex-col items-center shadow-sm hover:shadow-md cursor-pointer transition duration-500 bg-white rounded-md">
                        <div className="flex flex-row justify-between items-center gap-5 w-full mb-4">
                            <p className="text-xl leading-tight font-semibold">{policy}</p>
                            <button className="p-3 rounded-full transition duration-500 hover:bg-black hover:text-white">
                                <FaExternalLinkAlt />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SPPComponent;
