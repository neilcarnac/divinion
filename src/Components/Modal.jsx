import React from 'react';

const Modal = ({ isOpen, onClose, person }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-2/3">
                <div className="flex flex-row-reverse pr-5 pt-5">
                    <button onClick={onClose} className="top-4 right-4  hover:text-gray-700">
                        X
                    </button>
                </div>
                <div className="p-4 flex flex-col lg:flex-row lg:gap-8 gap-4">
                    <img src={person.image} className="rounded-xl h-[400px]" alt={person.name} />
                    <div className="flex flex-col">
                        <h2 className="mt-4 font-semibold text-xl">{person.name}</h2>
                        <p className="text-gray-500 text-sm">{person.position}</p>
                        <p className="mt-4">{person.description}</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;
