import React, { useState, useEffect } from 'react';
import { db, storage } from '../Firebase/firebaseConfig'; // Import Firebase setup including storage
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Firebase Storage imports

const NewsUpload = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentNews, setCurrentNews] = useState({ id: null, image: null, title: '', description: '' });
    const [imageUrl, setImageUrl] = useState(null);
    const [uploading, setUploading] = useState(false); // To track upload status

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
            setCurrentNews({ ...currentNews, image: file });
        }
    };

    const handleAddOrUpdateNews = async () => {
        try {
            if (!currentNews.title || !currentNews.description) {
                return alert('Title and description are required.');
            }

            if (currentNews.image && typeof currentNews.image !== 'string') {
                setUploading(true);
                const storageRef = ref(storage, `newsImages/${currentNews.image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, currentNews.image);

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    },
                    (error) => {
                        console.error('Error uploading image: ', error);
                        setUploading(false);
                    },
                    async () => {
                        // Get the download URL after upload completes
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        await saveNewsItem(downloadURL);
                        setUploading(false);
                    }
                );
            } else {
                await saveNewsItem(imageUrl); // If no image is uploaded, use the existing image URL
            }
        } catch (error) {
            console.error('Error adding/updating news: ', error);
        }
    };

    const saveNewsItem = async (imageURL) => {
        if (currentNews.id) {
            // Update existing news item
            await updateDoc(doc(db, 'news', currentNews.id), {
                title: currentNews.title,
                description: currentNews.description,
                image: imageURL || currentNews.image // Use the new image URL or the existing one
            });
        } else {
            // Add new news item
            await addDoc(collection(db, 'news'), {
                title: currentNews.title,
                description: currentNews.description,
                image: imageURL // Store the image URL
            });
        }
        fetchNews();
        resetForm();
    };

    const resetForm = () => {
        setShowModal(false);
        setCurrentNews({ id: null, image: null, title: '', description: '' });
        setImageUrl(null);
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
        <div className="flex flex-col p-4 lg:m-32 m-10">
            <h1 className="text-2xl mb-4">News Upload Platform</h1>
            <button className="bg-black text-white p-2 rounded mb-4" onClick={() => setShowModal(true)}>Add News</button>
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
                    <div className="bg-white p-4 rounded">
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
                            className="mb-4 p-2 outline-none border w-full"
                        />
                        <textarea
                            placeholder="Description"
                            value={currentNews.description}
                            rows={6}
                            onChange={(e) => setCurrentNews({ ...currentNews, description: e.target.value })}
                            className="mb-4 p-2 outline-none border w-full"
                        ></textarea>
                        <button
                            onClick={handleAddOrUpdateNews}
                            className="bg-blue-500 text-white p-2 rounded mr-2"
                            disabled={uploading}
                        >
                            {uploading ? 'Uploading...' : currentNews.id ? 'Update' : 'Add'}
                        </button>
                        <button
                            onClick={resetForm}
                            className="bg-gray-500 text-white p-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsUpload;
