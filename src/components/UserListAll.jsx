import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../store/usesrStore';
import { ARRAY_OF_SEDES } from '../constants/sedes';

const UsersListAll = ({ users, title }) => {

    const authRead = sessionStorage.getItem("authRead")
    const authWrite = sessionStorage.getItem("authWrite")


    const { CurrentCourse, CurrentSede } = useUserStore();

    const navigate = useNavigate();

    const [filterUsers, setFilterUsers] = useState(users);
    const [confirmDelete, setConfirmDelete] = useState(false);

    // Scroll to top on component mount
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    // Redirigir si filterUsers?.length es undefined
    useEffect(() => {
        if (filterUsers?.length === undefined) {
            navigate("main/");
        }
    }, [filterUsers, navigate]);


    // filtra el nombre de sede y devuelve sus inscritos 
    const handleFilter = (value) => {
        const newArray = users?.filter(user => user?.sede === value);
        setFilterUsers(newArray);
    };


    const handleClick = (value) => {

        setFilterUsers(users);
        handleFilter(value);
    };


    // Navega al usuario seleccionado
    const handleId = (e) => {
        navigate(`/formPageUpdate/${e}`);
    };

    // Activa la confirmación de borrado
    const handleDelete = () => {
        setConfirmDelete(true);
    };

    // Borra todos los usuarios del curso actual
    const handleConfirmDelete = () => {
        localStorage.removeItem(CurrentCourse);
        navigate("/main");
        setConfirmDelete(false);
    };

    // Cancela la eliminación
    const handleNotConfirmDelete = () => {
        setConfirmDelete(false);
    };


    // Regresa a la página anterior
    const handleReturn = () => {
        navigate(-1);
    };


    // Formatea el título
    const titleFull = title?.replaceAll("_", " ");




    // Selecciona por defecto la primera sede del array.
    const [selectedSede, setSelectedSede] = useState(CurrentSede);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        setSelectedSede(value);
        setIsOpen(false); // Cierra el dropdown al seleccionar una opción.
        handleClick(value); 
    };

    
    useState(() => {
        if (selectedSede) {
            handleClick(selectedSede);
        }
    }, []);



    return (
        <section className='w-full m-auto min-h-screen  flex flex-col pt-10 items-center pb-5'>
            <h1 className='font-bold text-lg'>
                {titleFull.replace("users", "").toUpperCase()}
            </h1>

            <strong>
                {filterUsers?.length + " inscritos"}
            </strong>


            {authWrite && (

                <div className='absolute top-5 right-5'>
                    <button
                        onClick={handleDelete}
                        className='bg-red-500 p-2 rounded-lg hover:bg-red-400'>
                        Borrar Todo
                    </button>
                </div>
            )}
            {confirmDelete && (
                <div className='absolute z-10 top-20 right-50 text-center bg-slate-700 p-3 rounded-lg'>
                    <p className='text-2xl pb-5'>
                        Confirma que desas borrar todo
                    </p>
                    <button
                        onClick={handleNotConfirmDelete}
                        className='bg-teal-600 p-2 rounded-lg hover:bg-teal-400 mr-2'>
                        No borrar
                    </button>
                    <button
                        onClick={handleConfirmDelete}
                        className='bg-red-500 p-2 rounded-lg hover:bg-red-400 ml-2'>
                        Borrar Todo
                    </button>
                </div>
            )}

            <div className='absolute top-5 left-5'>
                <button
                    onClick={handleReturn}
                    className='bg-blue-700 p-2 rounded-lg hover:bg-blue-600'>
                    Regresar
                </button>
            </div>

            {authWrite && (
                <div className='absolute top-7 left-50'>
                    <Link className="bg-green-700 p-2 rounded-lg hover:bg-green-600" to={"/ListPrintPage"}>
                        📃
                    </Link>
                </div>
            )}


            

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
                <div className='w-full max-w-xs sm:max-w-lg flex flex-col items-center' key={user.phoneNumber}>
                    <h3
                        onClick={() => handleId(user.idNumber)}
                        className='cursor-pointer w-full font-bold text-slate-700 pl-3 bg-white border-none rounded-md mt-3 hover:bg-slate-400 hover:text-white hover:outline-none transition'>
                        {user.name.toUpperCase()}
                    </h3>
                </div>
            ))}
        </section>
    );
};

export default UsersListAll;
