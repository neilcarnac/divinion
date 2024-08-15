import React, { useState } from 'react';

import Modal from './Modal'
const teamMembers = [
    {
        name: "Hormuz Bulsara",
        position: "Chief Executive Officer",
        image: "hbpic.png",
        description: "Bulsara has spent the majority of his career at Tata Asset Management Ltd (investment manager of Tata Mutual Fund, Tata AIF and Tata PMS businesses), where he served as Chief Operating Officer and Chief Financial Officer until his retirement recently in January 2023. He is a professionally qualified Chartered Accountant, Company Secretary, Cost & Management Accountant with graduate degrees in Law and Commerce. During his 28+ years with the company, he played a pivotal role in establishing the various market facing systems, processes and policies at both the domestic and overseas levels. He led the teams responsible for finance, secretarial, legal, compliance, audit, risk management, human resources, customer services, infotech, and business excellence at Tata Asset Management Ltd. Besides being an integral part of the AMC’s Investment, Product and Digital initiatives Committees, he also served as the Chief Ethics Officer of the company."
    },
    {
        name: "Jayanta Ghosh",
        position: "Head of Research and Investor Relation",
        image: "jg.png",
        description: "Mr. Jayanta Ghosh, a PGDM graduate from IIM Bangalore, is a distinguished academic and independent researcher specializing in International Finance, Currency, and Macro-Economics. His published reports underscore his influential contributions in these areas. He actively engages with various B-schools, enriching academic discussions, and is a sought-after expert panelist for interviews in business schools nationwide.Mr. Ghosh's profound insights and versatile expertise significantly shape the finance and economics discourse, bridging academia with practical business realms."
    },
    {
        name: "Subrata Ray",
        position: "Consultant (Risk Governance and Process Excellence)",
        image: "SR.png",
        description: "Mr. Ray holds a Fellowship in Management from IIM Bangalore and is a CFA Charterholder. During a career spanning over 30 years, he has closely worked across manufacturing, consulting, equity research and credit analysis. He headed the research for institutional equities with DBS Securities (subsidiary of DBS Bank) during 1997-2001. His last role was as Senior Group VP at ICRA Limited, with responsibilities spanning credit research, chair of rating committees and sectoral research. Subrata leads the Risk Management processes at Divinion and also plays a key reviewer role on the Investment Committee."
    },
    {
        name: "Sandip Basu",
        position: "Vice President Business Development",
        image: "sb.png",
        description: "Sandip Basu, Head of Business Development & Investor Relations Mr. Sandip Basu began his career at SBI and brings with him over two de cades of banking experience. He was at leadership roles subsequently at American Express Bank, Deutsche Bank and ICICI Bank in sales, trading, and structuring across multiple asset classes. He co-founded and led a boutique investment bank (2006-13), handling PE intermediation, and debt syndication and helped channelize investment into several sectors in the form of PE and debt.  Sandip was the treasurer of Tata Steel Ltd for India and SE Asia between 2014-2021. He ran a Rs 10,000 crore Retiral portfolio and managed a mutual fund portfolio of Rs 3000 crore. He has managed a currency, commodity and interest rate hedge book with an annual volume of USD 4 Billion. He was also the Resident Director at Tata Steel Global Holdings, Singapore.  Sandip was the treasurer of Tata Steel Ltd for India and SE Asia between 2014-2021. He ran a Rs 10,000 crore Retiral portfolio and managed a mutual fund portfolio of Rs 3000 crore. He has managed a currency, commodity and interest rate hedge book with an annual volume of USD 4 Billion. He was also the Resident Director at Tata Steel Global Holdings, Singapore. Sandip has been with the organization since its inception and played a key role in the registration of the AIF and onboarding of the first batch of investors. "
    },
    {
        name: "Adil B. Busha",
        position: "Chief Financial Officer",
        image: "ab.png",
        description: "Mr. Busha has spent almost 29 years of his career at Tata Asset Management Pvt Ltd (investment manager of Tata Mutual Fund, Tata AIF and Tata PMS businesses), where he served as Head - Finance until recently upto October 2023. He holds a B. Com degree and M.Sc. in Finance from Amhurst University specialising in Mutual Fund Accounting. During his 29 years with the company, he was in charge of accounting, taxation and operations for the AMC, Trustee Company, Mutual Fund, AIF, PMS and Offshore businesses and the two subsidiaries of the company. He was part of the team in establishing various processes and policies during the initial stage of the company, besides being part of the Ethics, Vendor and Valuation Committees."
    },
    {
        name: "Shreemoyee Mukhopadhyay",
        position: "Director",
        image: "sm.png",
        description: "Ms. Shreemoyee Mukhopadhyay, a graduate of HR College of Commerce and Economics, holds a Bachelor's degree in Financial Markets, an M.Com, and CFA charterholder. With a diverse background, she has worked in esteemed institutions including HDFC Mutual Fund, TATA Investment, and RBI. Over the past four years, she has gained extensive experience in trading equity and currency derivatives. She has also served as a visiting faculty member at H.R College for International Finance. She was the First CEO and Founder of the company, where she played a crucial role in establishing and managing the current team Currently, she is pursuing an MBA at The Wharton School, Pennsylvania, while actively mentoring and guiding our company's Investment Team."
    },
    {
        name: "Abhishek Gupta",
        position: "Deputy Fund Manager & Research Analyst",
        image: "ag.png",
        description: "Abhishek Gupta is a finance graduate with a BBA degree from NMIMS, who possesses a strong enthusiasm for the financial markets. He is actively pursuing the Chartered Market Technician (CMT) certification and has successfully cleared the first level of CMT. Alongside, he is engaged in attaining other esteemed financial qualifications. Abhishek's profound interest lies in equity trading. Currently holding the role of Deputy Fund Manager & Research Analyst at Divinion Investment, he effectively leverages his financial acumen and trading proficiency to contribute to strategic investment decisions. Beyond his professional commitments, he is an avid reader and an insatiable learner, constantly striving to enhance his skills and knowledge. He maintains a keen watch on the latest trends and advancements in the financial domain, always seeking avenues to deepen his insights and expertise. "
    },
    {
        name: "Vaishnav Gopi",
        position: "Analyst",
        image: "vg.png",
        description: "Vaishnav Gopi brings a wealth of expertise to our team with a background in BFM (Financial Markets) and an ongoing pursuit of a CFA designation. As a highly skilled professional, his proficiency revolves around financial markets and operational management. Throughout his career, Vaishnav has played a pivotal role in ensuring the seamless functioning of day-to-day operations. His knack for fostering effective collaboration across various departments has been instrumental in driving organizational success."
    },
];

const AboutBanThree = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isCentered, setIsCentered] = useState(true);

    const handleImageClick = (person) => {
        setSelectedPerson(person);
    };

    const closeModal = () => {
        setSelectedPerson(null);
    };

    const toggleLayout = () => {
        setIsCentered(!isCentered);
    };

    const renderRows = (rows) => {
        return rows.map((row, rowIndex) => (
            <div
                className={`flex lg:flex-row md:flex-row flex-col items-center  lg:gap-0 md:gap-0 gap-10 p-2 lg:p-16 justify-between `}
                key={rowIndex}
            >
                {row.map((person) => (
                    <div className="flex flex-col p-2 text-white" key={person.name} onClick={() => handleImageClick(person)}>
                        <img src={person.image} className='rounded-xl shadow-xl w-[300px] h-[350px] cursor-pointer' alt={person.name} />
                        <p className='mt-4 font-semibold'>{person.name}</p>
                        <p className='text-white/50 text-sm'>{person.position}</p>
                    </div>
                ))}
            </div>
        ));
    };

    const rows = [
        teamMembers.slice(0, 3),
        teamMembers.slice(3, 6),
        teamMembers.slice(5, 8),
    ];

    return (
        <>
            <div className="flex flex-col lg:m-10 m-4 bg-[#337c83] rounded-xl lg:p-12 p-2 lg:mt-20 mt-10">
                <div className="flex text-white flex-col leading-tight  lg:gap-4 gap-2 lg:p-16 p-8 items-center">
                    <p>BEHIND THE BLOCK</p>
                    <p className='text-2xl  lg:text-4xl text-center font-semibold'>Empowering the world to design</p>
                    <p className='sm:pl-2 sm:pr-2 text-base text-center text-white/50 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quasi, amet, veniam excepturi aperiam eaque maiores animi nemo expedita dolorem similique tenetur unde adipisci voluptas. Earum amet temporibus maiores iure, iusto excepturi, aliquam ipsam beatae blanditiis cum consectetur minus cupiditate eum molestiae non.</p>
                </div>
                {/* <button onClick={toggleLayout} className="self-center mb-8 px-4 py-2 bg-blue-500 text-white rounded">
                    Toggle Layout
                </button> */}
                <div className="flex flex-col">
                    {renderRows(rows)}
                </div>
            </div>
            <Modal isOpen={!!selectedPerson} onClose={closeModal} person={selectedPerson} />
        </>
    );
};

export default AboutBanThree;
