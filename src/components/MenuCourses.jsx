import React, { useEffect, useState } from "react";
import useUserStore from '../store/usesrStore.js';
import ImportJson from "./ImportJson.jsx";
import logo from '/uan_logo.png';

import {
    ARRAY_OF_COURSES
} from '../constants/courses.js';


function MenuCourses() {

    const authRead = sessionStorage.getItem("authRead");
    const authWrite = sessionStorage.getItem("authWrite");

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const { setCurrentCourse, CurrentCourse, MenuStoreCourse, setMenuCourse } = useUserStore();

    // Mapea los cursos del array ARRAY_OF_COURSES para crear los elementos del menú.
    const menuItems = ARRAY_OF_COURSES.map(({ course, courseStorageName }) => ({
        text: course,
        value: courseStorageName,
    }));

    // Función para alternar la visibilidad de la barra lateral.
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    // Establece el curso seleccionado en el estado global y oculta la barra lateral.
    const handleMenuChange = (e) => {
        setCurrentCourse(e);
        setSidebarVisible(false);
    };


    // Si MenuStoreCourse es true, oculta la barra lateral y desactiva el estado del menú.
    useEffect(() => {
        if (MenuStoreCourse === true) {
            setSidebarVisible(false);
            setMenuCourse(false);
        }
    }, [MenuStoreCourse]);

    // Define la clase CSS de un elemento del menú de manera condicional.
    const getMenuItemClass = (item) => {
        return `p-4 cursor-pointer ${CurrentCourse === item ? "bg-gray-700" : "hover:bg-gray-700"}`;
    };


    return (
        <div className="relative">
            {/* Botón del menú */}
            <button
                className={`hover:bg-slate-400 fixed top-5 left-5 bg-gray-600
                    text-white px-4 py-2 rounded-md shadow-md focus:outline-none
                    z-10 transition-transform duration-300 
                    ${sidebarVisible ? "transform translate-x-60 z-50"  : ""}`
                }
                onClick={toggleSidebar}
            >
                ☰ CURSOS
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white 
                    transform transition-transform duration-300 
                    ${sidebarVisible ? "translate-x-0" : "-translate-x-64"} overflow-y-auto`
                }
            >


                {/*<div className="flex justify-center p-4">
                    <img
                        src={logo}
                        alt="Logo de la UAN"
                        className="w-3/4 h-auto"
                    />
                </div> */}



                <ul className="mt-4 space-y-2 ">

                    {authWrite && (
                        <li>
                            <ImportJson />
                        </li>
                    )}


                    {menuItems.map(({ text, value }) => (
                        <li
                            key={value}
                            className={getMenuItemClass(value)}
                            onClick={() => handleMenuChange(value)}
                        >
                            {text}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default MenuCourses;