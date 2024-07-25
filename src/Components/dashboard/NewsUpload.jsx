import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/firebaseConfig'; // Import your Firebase setup
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const NewsUpload = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentNews, setCurrentNews] = useState({ id: null, image: null, title: '', description: '' });
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

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImageUrl(imageUrl);
            setCurrentNews({ ...currentNews, image: file });
        }
    };

    const handleAddOrUpdateNews = async () => {
        try {
            if (currentNews.id) {
                // Update existing news item
                await updateDoc(doc(db, 'news', currentNews.id), {
                    title: currentNews.title,
                    description: currentNews.description
                });
            } else {
                // Add new news item
                await addDoc(collection(db, 'news'), {
                    title: currentNews.title,
                    description: currentNews.description,
                    image: imageUrl // Store the image URL
                });
            }
            fetchNews();
            setShowModal(false);
            setCurrentNews({ id: null, image: null, title: '', description: '' });
            setImageUrl(null);
        } catch (error) {
            console.error('Error adding/updating news: ', error);
        }
    };

    const handleEdit = (news) => {
        setCurrentNews(news);
        setImageUrl(news.image); // Set the image URL to the current news image
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'news', id));
            fetchNews();
        } catch (error) {
            console.error('Error deleting news: ', error);
        }
    };

    return (
        <div className="flex flex-col p-4">
            <h1 className="text-2xl mb-4">News Upload Platform</h1>
            <button className="bg-green-500 text-white p-2 rounded mb-4" onClick={() => setShowModal(true)}>Add News</button>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newsItems.map((news) => (
                        <tr key={news.id}>
                            <td className="border px-4 py-2">{news.title}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-blue-500 text-white p-2 rounded mr-2" onClick={() => handleEdit(news)}>Edit</button>
                                <button className="bg-red-500 text-white p-2 rounded" onClick={() => handleDelete(news.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-4 rounded w-1/3">
                        <h2 className="text-xl mb-4">{currentNews.id ? 'Edit News' : 'Add News'}</h2>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mb-4"
                        />
                        {imageUrl && (
                            <img src={imageUrl} alt="Preview" className="mb-4 w-full h-40 object-cover" />
                        )}
                        <input
                            type="text"
                            placeholder="Title"
                            value={currentNews.title}
                            onChange={(e) => setCurrentNews({ ...currentNews, title: e.target.value })}
                            className="mb-4 p-2 border w-full"
                        />
                        <textarea
                            placeholder="Description"
                            value={currentNews.description}
                            onChange={(e) => setCurrentNews({ ...currentNews, description: e.target.value })}
                            className="mb-4 p-2 border w-full"
                        ></textarea>
                        <button
                            onClick={handleAddOrUpdateNews}
                            className="bg-blue-500 text-white p-2 rounded mr-2"
                        >
                            {currentNews.id ? 'Update' : 'Add'}
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-gray-500 text-white p-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewsUpload;
