import React, { useState } from 'react';
import { db } from './Firebase/firebaseConfig'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(''); // State for phone number
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'contacts'), {
                email,
                name,
                phone, // Save phone number to Firestore
                comment,
                timestamp: new Date(),
            });
            setEmail('');
            setName('');
            setPhone(''); // Reset phone number field
            setComment('');
            setSuccess('Message successfully sent!');
        } catch (error) {
            setError('Error sending message: ' + error.message);
        }
    };

    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("hbgg.svg")' }}>
            <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 sm:mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Please Reach Out to Us</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm outline-none sm:text-sm"
                                required
                            />
                        </label>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm outline-none sm:text-sm"
                                required
                            />
                        </label>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm outline-none sm:text-sm"
                                required
                            />
                        </label>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                            Comment
                            <textarea
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm outline-none sm:text-sm"
                                rows="4"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md"
                        >
                            Submit
                        </button>
                        {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
                        {success && <p className="mt-2 text-green-600 text-sm">{success}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubscribeForm;
