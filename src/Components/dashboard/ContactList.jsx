import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/firebaseConfig'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'contacts'));
                const contactsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setContacts(contactsData);
            } catch (error) {
                console.error('Error fetching contacts: ', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className="container mx-auto p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Subscribed Contacts</h2>
            {contacts.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Name</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Email</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Phone Number</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Comment</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact.id} className="hover:bg-gray-50">
                                    <td className="py-4 px-6 text-sm text-gray-700 border-b">{contact.name}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700 border-b">{contact.email}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700 border-b">{contact.phone}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700 border-b">{contact.comment}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700 border-b">{new Date(contact.timestamp.seconds * 1000).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">No contacts found.</p>
            )}
        </div>
    );
}

export default ContactList;
