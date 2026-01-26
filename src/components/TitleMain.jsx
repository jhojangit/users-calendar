import React, { useEffect, useState } from 'react';
import { ARRAY_OF_COURSES } from '../constants/courses';

const TitleMain = ({ title }) => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [QRModal, setQRModal] = useState(title);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);



    useEffect(() => {
        // Almacena el objeto que coincida con el Title y setea el qr al modal
        const courseData = ARRAY_OF_COURSES.find(course => course.course === title);
        if (courseData) {
            setQRModal(courseData.qr);
        }
        closeModal();
    }, [title]);



    const openNewTab = () => {
        // Almacena el objeto que coincida con Title y abre una nueva pestaña
        const courseData = ARRAY_OF_COURSES.find(course => course.course === title);
        if (courseData) {
            window.open(courseData.url, "_blank");
        }
    };



    return (
        <div>
            <div className="flex justify-center mt-14 md:mt-8">
                <h1
                    className="text-4xl font-bold text-center text-slate-100 cursor-pointer "
                    onClick={openModal}
                >
                    {title}
                </h1>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-4 rounded-md max-w-sm mx-auto flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={QRModal} alt="QR" className="max-w-full h-auto" />

                        <button
                            onClick={openNewTab}
                            className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-md"
                        >
                            Inscribir
                        </button>

                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
                            onClick={closeModal}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TitleMain;
