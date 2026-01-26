import { useEffect, useState } from "react";
import useUserStore from "../store/usesrStore";
import { useNavigate } from "react-router-dom";
import FormCalendarUpdate from "./FormCalendarUpdate";


import { ARRAY_OF_COURSES } from '../constants/courses.js';

import { ARRAY_OF_SEDES } from "../constants/sedes.js";
import { PROGRAMS } from "../constants/programs.js";
import { TYPE_OF_DOCUMENT } from "../constants/typeOfDocument.js";
import { NUMBER_OF_SEMESTER } from "../constants/numberOfSemester.js";
import useFormHandlers from "../hooks/useFormHandlers.js";






const FormUserUpdate = ({ user }) => {

    const authRead = sessionStorage.getItem("authRead")
    const authWrite = sessionStorage.getItem("authWrite")


    const navigate = useNavigate()

    const store = useUserStore()

    const CurrentCourse = store.CurrentCourse;

    const curso = CurrentCourse.replace("users", "").replaceAll("_", " ")

    const users = JSON.parse(localStorage.getItem(CurrentCourse))




    const [doubleMenu, setDoubleMenu] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedSede, setSelectedSede] = useState('');

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);


    const [name, setName] = useState(user?.name);

    const [sede, setSede] = useState(user?.sede);

    const [programa, setPrograma] = useState(user?.programa);

    const [semestre, setSemestre] = useState(user?.semestre);

    const [email, setEmail] = useState(user?.email);

    const [tipoDocumento, setTipoDocumento] = useState(user?.tipoDocumento);

    const [idNumber, setIdNumber] = useState(user?.idNumber);

    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);



    const {
        handleInputName,
        handleSelectSede,
        handleInputPrograma,
        handleInputSemestre,
        handleInputEmail,
        handleSelectId,
        handleInputId,
        handlePhoneNumber
    } = useFormHandlers({
        setName,
        setSede,
        setPrograma,
        setSemestre,
        setEmail,
        setTipoDocumento,
        setIdNumber,
        setPhoneNumber
    });




    let calendar = []
    const handleCalendar = (e) => {
        calendar = e
    }


    const [errorData, setErrorData] = useState(false);
    const [errorDate, setErrorDate] = useState(false);
    const [userExist, setUserExist] = useState(false);
    const [userCreated, setUserCreated] = useState(false);


    const error = () => {
        setErrorData(true)

        setTimeout(() => {
            setErrorData(false)
        }, 4000);
    }

    const errorCalendar = () => {
        setErrorDate(true)

        setTimeout(() => {
            setErrorDate(false)
        }, 4000);
    }



    const handleConfirm = () => {

        if (name.length <= 0 || name === "Nombre de usuario") {
            error()
            return
        }

        if (sede.length <= 0 || sede === "") {
            error()
            return
        }

        if (programa.length <= 0 || programa === "") {
            error()
            return
        }

        if (programa.length <= 0 || programa === 0) {
            error()
            return
        }

        if (email.length <= 0 || email === "@uan.edu.co") {
            error()
            return
        }

        if (tipoDocumento.length <= 0 || idNumber === "") {
            error()
            return
        }

        if (idNumber.length <= 0 || idNumber === "123456789") {
            error()
            return
        }

        if (phoneNumber.length <= 0 || phoneNumber === "313123456") {
            error()
            return
        }

        if (calendar.length <= 0) {
            errorCalendar()
            return
        }


        const isNotUserUniq = users && users.find(element => element.idNumber === idNumber)



        if (isNotUserUniq && idNumber != user.idNumber) {
            setUserExist(true)

            setTimeout(() => {
                setUserExist(false)
            }, 4000);

            return
        }




        const data = {
            name,
            curso,
            semestre,
            sede,
            programa,
            email,
            tipoDocumento,
            idNumber,
            phoneNumber,
            calendar,
            inscriptionDay: user.inscriptionDay,
            cursoKey: CurrentCourse,
        }
        
        const currentCourseData = ARRAY_OF_COURSES.find(course => course.courseStorageName === CurrentCourse);
        
        

        if (currentCourseData) {
            // Obtiene el método de estado de zustand correspondiente al curso actual
            const dataStore = store[currentCourseData.choise.replace('choise', 'UsersDataStore')];

            if (dataStore) {
                // Crea una copia del estado del curso actual
                let copyData = structuredClone(dataStore);

                // Filtra los datos para eliminar el usuario
                const arrSinUser = copyData.filter(users => users.idNumber !== user.idNumber);

                // Agrega el nuevo dato al principio del array
                const newData = [data, ...arrSinUser];

                // Actualiza localStorage con los nuevos datos
                localStorage.removeItem(CurrentCourse);
                localStorage.setItem(CurrentCourse, JSON.stringify(newData));

                // Obtiene el método de estado para actualizar el curso actual
                const setMethod = store[currentCourseData.setter];

                if (setMethod) {
                    setMethod(newData);
                }
            }

            navigate("/main")
        }
    }


    const [confirmDelete, setConfirmDelete] = useState(false);


    const handleDelete = () => {
        setConfirmDelete(true)
    }


    const handleConfirmDelete = () => {
        // Encuentra el curso actual en el array de cursos usando el nombre de almacenamiento del curso actual
        const course = ARRAY_OF_COURSES.find(c => c.courseStorageName === CurrentCourse);

        // Si el curso no se encuentra, muestra un error y sale de la función
        if (!course) {
            console.error('Course not found:', CurrentCourse);
            return;
        }

        // Desestructura el nombre del setter del curso encontrado
        const { setter } = course;


        // Obtiene el estado actual del dataStore y la función del setter correspondiente desde el estado de Zustand
        const dataStore = useUserStore.getState()[setter.replace('setUsersDataStore', 'UsersDataStore')];
        const setterFunction = useUserStore.getState()[setter];

        // Verifica que dataStore sea un array antes de proceder
        if (!Array.isArray(dataStore)) {
            console.error('Data store is not an array:', dataStore);
            return;
        }

        // Clona los datos actuales para evitar modificar el estado directamente
        const copyData = structuredClone(dataStore);

        // Filtra los datos clonados para eliminar el usuario con el idNumber específico
        const arrSinUser = copyData.filter(user => user.idNumber !== idNumber);

        // Verifica que setterFunction sea una función antes de llamarla para actualizar el estado
        if (typeof setterFunction === 'function') {
            setterFunction(arrSinUser); // Actualiza el estado con los datos filtrados
        } else {
            console.error('Setter function is not valid:', setter);
        }

        // Actualiza el localStorage eliminando el item existente y guardando los nuevos datos
        localStorage.removeItem(CurrentCourse);
        localStorage.setItem(CurrentCourse, JSON.stringify(arrSinUser));

        // Navega a la página principal y cierra el diálogo de confirmación
        navigate("/main");
        setConfirmDelete(false);
    };

    const handleNotConfirmDelete = () => {
        setConfirmDelete(false)
        return
    }


    const handleReturn = () => {
        navigate(-1)
    }



    const handleDouble = () => setDoubleMenu(true);




    const handleDoubleActions = () => {

        if (!selectedCourse || !selectedSede) {
            error();
            return;
        }


        const data = {
            name,
            curso,
            semestre,
            sede: selectedSede,
            programa,
            email,
            tipoDocumento,
            idNumber,
            phoneNumber,
            calendar,
            inscriptionDay: user.inscriptionDay,
            cursoKey: CurrentCourse,
        };


        // `selectedCourse` es el nombre del curso que se quiere asignar.
        const selectedCourseName = selectedCourse;

        // Encuentra el objeto en el array cuyo `courseStorageName` sea igual a `selectedCourseName`
        const courseObject = ARRAY_OF_COURSES.find(({ courseStorageName }) => courseStorageName === selectedCourseName);


        // Si se encuentra el objeto, asigna su `storageKey` a `nameOfCourseInLocal`, de lo contrario, asigna una cadena vacía.
        const nameOfCourseInLocal = courseObject ? courseObject.courseStorageName : "";


        // Recupera los datos del curso desde localStorage usando `nameOfCourseInLocal`
        const courseInLocal = JSON.parse(localStorage.getItem(nameOfCourseInLocal));

        // Verifica si el usuario ya existe en el curso seleccionado
        const isNotUserUniq = courseInLocal?.find(element => element.idNumber === idNumber);

        if (isNotUserUniq) {
            setUserExist(true);
            setSelectedCourse("");
            setSelectedSede("");

            setTimeout(() => {
                setUserExist(false);
            }, 4000);

            return;
        }

        // Recupera los datos existentes del curso desde localStorage
        const existingData = localStorage.getItem(nameOfCourseInLocal);

        // Si existen datos, los convierte en un array. Si no, crea un nuevo array.
        let dataArray = existingData ? JSON.parse(existingData) : [];

        // Agrega el nuevo dato al array  
        dataArray.push(data);

        // Guarda el array actualizado en localStorage
        localStorage.setItem(nameOfCourseInLocal, JSON.stringify(dataArray));

        // Llama a la función para manejar el usuario creado
        handleUserCreated();
    }


    const handleUserCreated = () => {
        setUserCreated(true)
        setTimeout(() => {
            setUserCreated(false)
        }, 5000);
        return
    }


    const closeModal = () => {

        setDoubleMenu(false);
    };


    // Permite ingresar dandlo click al botón "Enter"
    const handleKeyDown = (event) => {
        console.log("ass");
        if (event.key === 'Enter') {

            handleConfirm();
        }
    };



    return (
        <>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-center text-2xl font-bold text-slate-200 sm:text-3xl">
                        {CurrentCourse?.replaceAll("_", " ").replace("users", "")}
                    </h1>

                    {
                        authWrite &&
                        <h2 className="text-center text-sm text-slate-200 sm:text-3xl">Actualizar datos</h2>
                    }

                    <div className='absolute top-5 left-5'>
                        <button
                            onClick={handleReturn}
                            className='bg-blue-700 p-2 rounded-lg hover:bg-blue-600 text-slate-100'>
                            Regresar
                        </button>
                    </div>

                    <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">


                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Nombre
                                <div>
                                    <input
                                        type="text"
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm text-[16px]"
                                        value={name} // El valor del input está controlado por el estado
                                        onChange={handleInputName} // Maneja los cambios del input
                                        placeholder={user?.name} // Cambié el placeholder para mejor experiencia
                                    />
                                </div>
                            </label>
                        </div>


                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Sede
                                <div>
                                    <select
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 text-sm text-[16px]"
                                        value={sede}
                                        onChange={handleSelectSede}
                                    >
                                        <option value="">Seleccione su sede</option>
                                        {ARRAY_OF_SEDES.map((value) => (
                                            <option key={value} value={value}>
                                                {value.charAt(0) + value.slice(1).toLowerCase()}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                        </div>



                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Programa
                                <div>
                                    <select
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 text-sm text-[16px]"
                                        value={programa}
                                        onChange={handleInputPrograma}
                                    >
                                        {PROGRAMS.map((value) => (
                                            <option key={value.name} value={value.name}>
                                                {value.name.charAt(0) + value.name.slice(1).toLowerCase()}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                        </div>


                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Semestre
                                <div>
                                    <select
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 text-sm text-[16px]"
                                        value={semestre}
                                        onChange={handleInputSemestre}
                                    >
                                        {NUMBER_OF_SEMESTER.map((value) => (
                                            <option key={value.number} value={value.number}>
                                                {value.number.charAt(0) + value.number.slice(1).toLowerCase()}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                        </div>


                        {
                            authWrite &&
                            <>
                                <div>
                                    <label className="text-slate-300 ml-4 font-bold">
                                        Correo institucional
                                        <div >
                                            <input
                                                type="text"
                                                className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm text-[16px]"
                                                value={email}
                                                placeholder={user?.email}
                                                onChange={handleInputEmail}
                                            />
                                        </div>
                                    </label>
                                </div>


                                <div>
                                    <label className="text-slate-300 ml-4 font-bold">
                                        Tipo de documento
                                        <div>
                                            <select
                                                className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 text-sm text-[16px]"
                                                value={tipoDocumento}
                                                onChange={handleSelectId}
                                            >
                                                {TYPE_OF_DOCUMENT.map((value) => (
                                                    <option key={value.name} value={value.name}>
                                                        {value.name.charAt(0) + value.name.slice(1).toLowerCase()}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </label>
                                </div>




                                <div>
                                    <label className="text-slate-300 ml-4 font-bold">
                                        Documento de identidad
                                        <div >
                                            <input
                                                type="text"
                                                className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm text-[16px]"
                                                value={idNumber}
                                                placeholder={user?.idNumber}
                                                onChange={handleInputId}
                                            />
                                        </div>
                                    </label>
                                </div>


                                <div>
                                    <label className="text-slate-300 ml-4 font-bold">
                                        Número de celular
                                        <div >
                                            <input
                                                type="text"
                                                className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm text-[16px]"
                                                value={phoneNumber}
                                                placeholder={user?.phoneNumber}
                                                onChange={handlePhoneNumber}
                                            />
                                        </div>
                                    </label>
                                </div>

                            </>
                        }

                        <FormCalendarUpdate calendarData={handleCalendar} dataSelected={user?.calendar} />



                        {
                            errorData
                                ?
                                <div>
                                    <h3 className="w-full bg-red-500 text-slate-50 text-center text-xl rounded-lg">
                                        Llena todos los campos
                                    </h3>
                                </div>
                                :

                                ""
                        }


                        {
                            errorDate
                                ?
                                <div>
                                    <h3 className="w-full bg-red-500 text-slate-50 text-center text-xl rounded-lg">
                                        Agrega al menos una fecha
                                    </h3>
                                </div>
                                :

                                ""
                        }

                        {
                            userExist
                                ?
                                <div>
                                    <h3 className="w-full bg-red-500 text-slate-50 text-center text-xl rounded-lg">
                                        Este estudiante ya está inscrito
                                    </h3>
                                </div>
                                :

                                ""
                        }



                        {
                            userCreated
                                ?
                                <div>
                                    <h3 className="w-full bg-green-600 text-slate-50 text-center text-xl rounded-lg">
                                        Estudiante inscrito
                                    </h3>
                                </div>
                                :

                                ""
                        }

                        {
                            confirmDelete
                                ?
                                <div className='text-center bg-slate-700 p-3 rounded-lg text-slate-50'>
                                    <p className='text-2xl pb-5 '>
                                        ¿Desas borrar este estudiante?
                                    </p>
                                    <button
                                        onClick={handleNotConfirmDelete}
                                        className='bg-teal-600 p-2 rounded-lg hover:bg-teal-400 mr-2'>
                                        No borrar
                                    </button>

                                    <button
                                        onClick={handleConfirmDelete}
                                        className='bg-red-500 p-2 rounded-lg hover:bg-red-400 ml-2'>
                                        Borrar estudiante
                                    </button>
                                </div>
                                :
                                ""
                        }



                        {authWrite && (

                            <div className="flex gap-2 justify-center flex-wrap">
                                <button
                                    onClick={handleConfirm}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 min-w-[90px] max-w-[150px] rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-500 text-center flex items-center justify-center"
                                >
                                    CONFIRMAR
                                </button>

                                <button
                                    onClick={handleDouble}
                                    className="flex-1 min-w-[90px] max-w-[150px] rounded-lg bg-amber-600 px-5 py-3 text-sm font-medium text-white hover:bg-amber-500 text-center flex items-center justify-center"
                                >
                                    Asignar Otro Curso
                                </button>

                                <button
                                    onClick={handleDelete}
                                    className="flex-1 min-w-[90px] max-w-[150px] rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white hover:bg-red-500 text-center flex items-center justify-center"
                                >
                                    ELIMINAR
                                </button>
                            </div>

                        )}


                    </div>
                </div>
            </div>

            {doubleMenu && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="bg-slate-700 rounded-lg shadow-lg p-6 min-w-1/3">
                        <h2 className="text-xl font-bold mb-4 text-gray-200">Duplicar Estudiante</h2>

                        <div className="mb-4">
                            <label className="block text-gray-200 text-sm font-bold mb-2">
                                Selecciona un curso:
                            </label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                            >
                                <option value="">Seleccione un curso</option>
                                {ARRAY_OF_COURSES.map((course) => (

                                    <option
                                        key={course.courseStorageName}
                                        value={course.courseStorageName}
                                    >
                                        {course.course}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-200 text-sm font-bold mb-2">
                                Selecciona una sede:
                            </label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                value={selectedSede}
                                onChange={(e) => setSelectedSede(e.target.value)}
                            >
                                <option value="">Seleccione una sede</option>
                                {ARRAY_OF_SEDES.map((value) => (
                                    <option key={value} value={value}>
                                        {value.charAt(0) + value.slice(1).toLowerCase()}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <p className="text-gray-200">¿Está seguro que desea duplicar estos datos?</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-gray-100 px-4 py-2 rounded-lg mr-2 hover:bg-gray-300"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => {
                                    handleDoubleActions()
                                    closeModal();
                                }}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}



        </>
    );
};

export default FormUserUpdate