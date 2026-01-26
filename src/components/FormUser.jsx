import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCalendar from "./FormCalendar";
import useUserStore from "../store/usesrStore";
import { ARRAY_OF_COURSES } from '../constants/courses.js';
import { ARRAY_OF_SEDES } from "../constants/sedes.js";
import { PROGRAMS } from "../constants/programs.js";
import { TYPE_OF_DOCUMENT } from "../constants/typeOfDocument.js";
import { NUMBER_OF_SEMESTER } from "../constants/numberOfSemester.js";
import useFormHandlers from "../hooks/useFormHandlers.js";



const FormUser = () => {

    const navigate = useNavigate()
    const store = useUserStore()

    const CurrentCourse = store.CurrentCourse;


    const curso = CurrentCourse.replace("users", "").replaceAll("_", " ")

    const users = JSON.parse(localStorage.getItem(CurrentCourse))


    const date = new Date(); // Obtener la fecha actual
    const day = String(date.getDate()).padStart(2, '0'); // Obtener el día y asegurarse de que tenga dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtener el mes (recuerda que getMonth() devuelve un índice basado en 0, así que agregamos 1) y asegurarse de que tenga dos dígitos
    const year = date.getFullYear();

    const inscriptionDay = `${day}/${month}/${year}`;



    useEffect(() => {

        const course = ARRAY_OF_COURSES.find(c => c.courseStorageName === CurrentCourse);

        if (!course) {
            console.error('Course not found:', CurrentCourse);
            return;
        }


        // Determina el setter y la función asociada usando `course.setter`
        const setterFunctionName = course.setter;
        const setterFunction = useUserStore.getState()[setterFunctionName];

        if (typeof setterFunction === 'function') {
            setterFunction(users); // Llama a la función de setter con los datos
        } else {
            console.error('Setter function is not valid:', setterFunctionName);
        }

        window.scroll({
            top: 0,
            behavior: "smooth",
        });

    }, []);




    // useState 
    
    const [name, setName] = useState("Nombre completo");
    if (name == "") {
        setName("Nombre completo")
    }

    const [sede, setSede] = useState('');


    const [programa, setPrograma] = useState("");


    const [semestre, setSemestre] = useState(1);
    if (semestre == "") {
        setSemestre(1)
    }


    const [email, setEmail] = useState("@uan.edu.co");
    if (email == "") {
        setEmail("@uan.edu.co")
    }

    const [tipoDocumento, setTipoDocumento] = useState("CÉDULA");


    const [idNumber, setIdNumber] = useState("123456789");
    if (idNumber == "") {
        setIdNumber("123456789")
    }


    const [phoneNumber, setPhoneNumber] = useState("313123456");




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
            console.log("Error en name");

            return
        }

        if (sede.length <= 0 || sede === "") {
            error()
            console.log("Error en sede");
            return
        }

        if (programa.length <= 0 || programa === "") {
            error()
            console.log("Error en programa");
            return
        }

        if (semestre.length <= 0 || semestre === 0) {
            error()
            console.log("Error en semestre");
            return
        }

        if (email.length <= 0 || email === "@uan.edu.co") {
            error()
            console.log("Error en email");
            return
        }

        if (tipoDocumento.length <= 0 || idNumber === "") {
            error()
            console.log("Error en tipo documento");
            return
        }

        if (idNumber.length <= 0 || idNumber === "123456789") {
            error()
            console.log("Error en idNumber");

            return
        }

        if (phoneNumber.length <= 0 || phoneNumber === "313123456") {
            error()
            console.log("Error en phone");
            return
        }

        if (calendar.length <= 0) {
            errorCalendar()
            console.log("Error en calendar");
            return
        }




        const isNotUserUniq = users && users.find(element => element.idNumber === idNumber)


        if (isNotUserUniq) {
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
            inscriptionDay,
            cursoKey: CurrentCourse,
        }



        // Encuentra el curso actual en `ARRAY_OF_COURSES`
        const course = ARRAY_OF_COURSES.find(c => c.courseStorageName === CurrentCourse);

        if (!course) {
            console.error('Course not found:', CurrentCourse);
            return;
        }

        // Determina el nombre del setter y el nombre del store de datos
        const { setter, courseStorageName } = course;

        // Construye el nombre del store de datos a partir del nombre del setter
        const dataStoreName = setter.replace('setUsersDataStore', 'UsersDataStore');

        // Obtén el estado del store y la función de setter
        const dataStore = useUserStore.getState()[dataStoreName];
        const setterFunction = useUserStore.getState()[setter];


        // Verifica que el store de datos sea un array
        if (!Array.isArray(dataStore)) {
            console.error('Data store is not an array or is undefined:', dataStore);
            return;
        }

        // Crea una copia de los datos existentes y añade el nuevo dato
        const copyData = structuredClone(dataStore);
        const newData = [data, ...copyData];

        // Llama a la función de setter para actualizar el estado
        if (typeof setterFunction === 'function') {
            setterFunction(newData);
        } else {
            console.error('Setter function is not valid:', setter);
        }

        // Actualiza el almacenamiento local
        localStorage.setItem(CurrentCourse, JSON.stringify(newData));


        navigate("/main")
    }


    const handleCancel = () => {
        calendar = []
        setName("")
        setSede("")
        setPrograma("")
        setIdNumber()
        setPhoneNumber()
        setSemestre(1)

        navigate("/main")

    }


    const handleReturn = () => {
        navigate(-1)
    }



    return (
        <>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">

                    <h1 className="text-center text-2xl font-bold text-slate-200 sm:text-3xl">
                        {CurrentCourse?.replaceAll("_", " ").replace("users", "")}
                    </h1>


                    <h2 className="text-center text-sm text-slate-200 sm:text-3xl">Inscripción</h2>


                    <div className='absolute top-5 left-5'>
                        <button
                            onClick={handleReturn}
                            className='bg-blue-700 text-slate-50 p-2 rounded-lg hover:bg-blue-600'>
                            Regresar
                        </button>
                    </div>


                    <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">


                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Nombre
                                <div >
                                    <input
                                        type="text"
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm text-[16px]"
                                        placeholder={name}
                                        onChange={handleInputName}
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
                                programa
                                <div>
                                    <select
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 text-sm text-[16px]"
                                        value={programa}
                                        onChange={handleInputPrograma}
                                    >
                                        <option value="">Seleccione su programa</option>
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



                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Correo institucional
                                <div >
                                    <input
                                        type="text"
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm text-[16px]"
                                        value={email}
                                        placeholder={email}
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
                                        placeholder={idNumber}
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
                                        placeholder={phoneNumber}
                                        onChange={handlePhoneNumber}
                                    />
                                </div>
                            </label>
                        </div>




                        <FormCalendar calendarData={handleCalendar} />

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
                                        Este usuario ya existe
                                    </h3>
                                </div>
                                :

                                ""
                        }





                        <div className='flex gap-2'>
                            <button
                                onClick={handleConfirm}
                                className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-500"
                            >CONFIRMAR
                            </button>

                            <button
                                onClick={handleCancel}
                                className="block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white hover:bg-red-500"
                            >
                                CANCELAR
                            </button>
                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default FormUser