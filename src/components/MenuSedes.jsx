import React, { useEffect, useState } from "react";
import useUserStore from '../store/usesrStore.js';
import logo from '/uan_logo.png';
import { ARRAY_OF_SEDES } from '../constants/sedes.js';

function MenuCourses({handleClickMenuOptions}) {


    const [sidebarVisible, setSidebarVisible] = useState(false);

    const { MenuStoreSede, setCurrentSede, CurrentSede } = useUserStore();


    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleMenuChange = (e) => {
        setCurrentSede(e);
        setSidebarVisible(false);
        handleClickMenuOptions(e)
    };

    useEffect(() => {
        if (MenuStoreSede === true) {
            setSidebarVisible(false);
            setCurrentSede(CurrentSede);
        }
    }, [MenuStoreSede]);

    const getMenuItemClass = (item) => {
        return `p-4 cursor-pointer ${CurrentSede === item ? "bg-gray-700" : "hover:bg-gray-700"}`;
    };

    return (
        <div className="relative">
            {/* Botón del menú */}
            <button
                className={`hover:bg-slate-400 fixed top-5 right-5 bg-gray-600
                    text-white px-4 py-2 rounded-md shadow-md focus:outline-none z-10 
                    transition-transform duration-300 w-28
                    ${sidebarVisible ? "-translate-x-60 z-50" : ""}`
                }
                onClick={toggleSidebar}
            >
                SEDES ☰
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${sidebarVisible ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}
            >


                <div className="flex justify-center p-4">
                    <img
                        src={logo}
                        alt="Logo de la UAN"
                        className="w-3/4 h-auto"
                    />
                </div>
                

                <ul className="mt-4 space-y-2 text-white">
                    {ARRAY_OF_SEDES.map(( sede ) => (
                        <li
                            key={sede}
                            className={getMenuItemClass(sede)}
                            onClick={() => handleMenuChange(sede)}
                            >
                            {sede}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MenuCourses;
