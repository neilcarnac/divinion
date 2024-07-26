import React, { useState, useEffect } from 'react';
import { db } from '../Components/Firebase/firebaseConfig'; // Import your Firebase setup
import { collection, getDocs } from 'firebase/firestore';
const NewsBanTwo = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);

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

    return (
        <div className="flex flex-col mb-72 bg-white w-full">
            <div className="flex flex-col text-xs gap-10 justify-between p-20 sm:p-10">
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-12">
                    {newsItems.map((news) => (
                        <div key={news.id} className="lg:w-1/3 w-full h-auto shadow-md rounded-md flex flex-col">
                            <img src={news.image} alt={news.title} className="w-full h-auto" />
                            <div className="flex font-sans flex-col gap-4 p-4">
                                <div className="flex flex-col">
                                    <p className='font-semibold leading-tight text-sm'>{news.title}</p>
                                    <p>{news.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsBanTwo;
