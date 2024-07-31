import React, { useState, useEffect } from 'react';
import { db } from '../Components/Firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const NewsBanTwo = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', description: '' });

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'news'));
            const news = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                news.push({ id: doc.id, ...data });
            });
            setNewsItems(news);
        } catch (error) {
            console.error('Error fetching news: ', error);
        }
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + newsItems.length) % newsItems.length);
    };

    const openModal = (news) => {
        setModalContent(news);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="relative rounded-md shadow-md bg-white m-10">
            {newsItems.length > 0 && (
                <div className="flex justify-center items-center h-full">
                    <button
                        onClick={handlePrev}
                        className="absolute left-3 bg-white/20 shadow-md p-3 rounded-lg"
                    >
                        {"<"}

                    </button>
                    <div className="m-10">
                        <img
                            src={newsItems[currentSlide].image}
                            alt={newsItems[currentSlide].title}
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute bottom-10 left-10 bg-black/80 text-white p-3 cursor-pointer"
                            onClick={() => openModal(newsItems[currentSlide])}
                        >
                            <h2 className="lg:text-2xl text-base">{newsItems[currentSlide].title}</h2>
                        </div>
                    </div>
                    <button
                        onClick={handleNext}
                        className="absolute right-3 bg-white/20 shadow-md p-3 rounded-lg"
                    >
                        {">"}
                    </button>
                </div>
            )}

            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 lg:p-6 rounded w-2/3 lg:w-1/3">
                        <h2 className="text-2xl font-medium mb-4">{modalContent.title}</h2>
                        <p className="mb-4 ">{modalContent.description}</p>
                        <button
                            onClick={closeModal}
                            className="bg-gray-500 text-white p-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsBanTwo;
