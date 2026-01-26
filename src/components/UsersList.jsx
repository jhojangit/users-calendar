import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/usesrStore';

import {ARRAY_OF_SEDES} from '../constants/sedes.js'

const UsersList = ({ users, date }) => {
    const navigate = useNavigate();


    const { CurrentCourse, CurrentSede } = useUserStore()


    // Formatea el título
    const CurrentCourseReplaced = CurrentCourse?.replaceAll("_", " ").replace("users", "")



    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);




    const [filterUsers, setFilterUsers] = useState(users);

    // Redirigir a la ruta "/" si filterUsers es undefined
    useEffect(() => {
        if (filterUsers === undefined) {
            navigate("/main");
        }
    }, [filterUsers, navigate]);


    // filtra el nombre de sede y devuelve sus inscritos 
    const handleFilter = (value) => {
        const usersFilter = users?.filter(user => user.sede === value);
        setFilterUsers(usersFilter);
    };

    const [activeButton, setActiveButton] = useState(null);

    // Sede actual
    const [amountSelection, setAmountSelection] = useState("");



    const handleClick = (value) => {
        setAmountSelection(value);
        setFilterUsers(users);
        setActiveButton(value);
        handleFilter(value);
    };

    // Manejador para navegar al usuario seleccionado
    const handleId = (e) => {
        navigate(`/formPageUpdate/${e}`);
    };

    // Regresa a la página anterior
    const handleReturn = () => {
        navigate(-1);
    };



        // Selecciona por defecto la primera sede del array.
        const [selectedSede, setSelectedSede] = useState(CurrentSede);
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };
    
        const handleSelect = (value) => {
            setSelectedSede(value);
            handleClick(value); 
            setIsOpen(false); // Cierra el dropdown al seleccionar una opción.
        };
    
    
        useState(() => {
            if (selectedSede) {
                handleClick(selectedSede);
            }
        }, []);
    


    return (
        <section className='w-full m-auto min-h-screen flex flex-col pt-10 items-center pb-5'>

            <h1 className='font-bold text-lg'>{CurrentCourseReplaced}</h1>

            <h1 className='font-bold text-lg'>{date}</h1>

            <strong>
                {filterUsers?.length + " inscritos"}
            </strong>

            <div className='absolute top-5 left-5'>
                <button
                    onClick={handleReturn}
                    className='bg-blue-700 p-2 rounded-lg hover:bg-blue-600 text-slate-100'>
                    Regresar
                </button>
            </div>


            {/* FILTRO */}
            <div className="relative inline-block text-left my-5">
                {/* Botón principal para abrir/cerrar el dropdown */}
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-slate-500 text-sm font-bold text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {selectedSede ? selectedSede : "Selecciona una sede"}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {/* Dropdown visible al hacer clic */}
                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-80 overflow-y-scroll">
                        <div className="py-1">
                            {ARRAY_OF_SEDES.map((value) => (
                                <button
                                    key={value}
                                    className={`block w-full text-left px-4 py-2 text-sm font-bold hover:bg-slate-200 ${selectedSede === value
                                            ? 'bg-slate-200 text-slate-700'
                                            : 'text-slate-500'
                                        }`}
                                    type="button"
                                    onClick={() => handleSelect(value)}
                                >
                                    {value.charAt(0) + value.slice(1).toLowerCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>


            {filterUsers?.map(user => (
                <div
                    className='w-full max-w-xs sm:max-w-lg flex flex-col items-center' 
                    key={user.phoneNumber}>
                    <h3
                        onClick={() => handleId(user.idNumber)}
                        className='cursor-pointer w-full font-bold text-slate-700 pl-3  bg-white border-none rounded-md mt-3 hover:bg-slate-400 hover:text-white hover:outline-none transition'>
                        {user.name.toUpperCase()}
                    </h3>
                </div>
            ))}
        </section>
    );
};

export default UsersList;