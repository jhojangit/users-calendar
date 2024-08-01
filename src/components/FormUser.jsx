import { useEffect, useState } from "react";
import FormCalendar from "./FormCalendar";
import useUserStore from "../store/usesrStore";
import { useNavigate } from "react-router-dom";



const FormUser = () => {

    const navigate = useNavigate()
    const { UsersDataStore, setUsersDataStore } = useUserStore()



    const users = JSON.parse(localStorage.getItem("users"))

    useEffect(() => {
        users ? setUsersDataStore(users) : ""

        window.scroll({
            top: 0,
            behavior: "smooth",
        });

    }, []);



    const [name, setName] = useState("Nombre de usuario");
    if (name == "") {
        setName("Nombre de usuario")
    }

    const [instrument, setInstrument] = useState("Instrumento");
    if (instrument == "") {
        setInstrument("Instrumento")
    }

    const [sede, setSede] = useState('');

    const [facultad, setFacultad] = useState("Nombre de facultad");
    if (facultad == "") {
        setFacultad("Nombre de Facultad")
    }


    const [email, setEmail] = useState("@uan.edu.co");
    if (email == "") {
        setEmail("@uan.edu.co")
    }

    const [tipoDocumento, setTipoDocumento] = useState('');


    const [idNumber, setIdNumber] = useState("123456789");
    if (idNumber == "") {
        setIdNumber("123456789")
    }


    const [phoneNumber, setPhoneNumber] = useState("313123456");





    const handleInputName = (e) => {
        setName(e.target.value.trim())
    }
    
    const handleInputInstrument = (e) => {
        setInstrument(e.target.value.trim())
    }

    function handleSelectSede(e) {
        setSede(e.target.value);
    }


    const handleInputFacultad = (e) => {
        setFacultad(e.target.value.trim())
    }


    const handleInputEmail = (e) => {
        setEmail(e.target.value.trim())
    }


    function handleSelectId(e) {
        setTipoDocumento(e.target.value);
    }

    const handleInputId = (e) => {
        setIdNumber(e.target.value.trim())
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value.trim())
    }




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
            return
        }

        if (instrument.length <= 0 || name === "Instrumento") {
            error()
            return
        }

        if (sede.length <= 0 || sede === "") {
            error()
            return
        }

        if (facultad.length <= 0 || facultad === "Nombre de facultad") {
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


        if (isNotUserUniq) {
            setUserExist(true)

            setTimeout(() => {
                setUserExist(false)
            }, 4000);
            return
        }


        const data = {
            name,
            instrument,
            sede,
            facultad,
            email,
            tipoDocumento,
            idNumber,
            phoneNumber,
            calendar
        }

        const copyData = structuredClone(UsersDataStore)

        const newData = [data, ...copyData]

        setUsersDataStore(newData)
        localStorage.setItem("users", JSON.stringify(newData))

        navigate("/")
    }


    const handleCancel = () => {
        calendar = []
        setName("")
        setInstrument("")
        setSede("")
        setFacultad("")
        setIdNumber()
        setPhoneNumber()

        navigate("/")

        location.reload()

    }


    const handleReturn = () => {
        navigate(-1)
    }

    return (
        <>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-center text-2xl font-bold text-slate-200 sm:text-3xl">Selecciona tu horario</h1>


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
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm"
                                        placeholder={name}
                                        onChange={handleInputName}
                                    />
                                </div>
                            </label>
                        </div>


                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Instrumento
                                <div >
                                    <input
                                        type="text"
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm"
                                        placeholder={instrument}
                                        onChange={handleInputInstrument}
                                    />
                                </div>
                            </label>
                        </div>


                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Sede
                                <div>
                                    <select
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 text-sm"
                                        value={sede}
                                        onChange={handleSelectSede}
                                    >
                                        <option value="">Seleccione su sede</option>
                                        <option value="IBÉRICA">IBÉRICA</option>
                                        <option value="SUR">SUR</option>
                                        <option value="CIRCUNVALAR">CIRCUNVALAR</option>
                                        <option value="FEDERMÁN">FEDERMÁN</option>
                                    </select>
                                </div>
                            </label>
                        </div>



                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Facultad
                                <div >
                                    <input
                                        type="text"
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm"
                                        placeholder={facultad}
                                        onChange={handleInputFacultad}
                                    />
                                </div>
                            </label>
                        </div>




                        <div>
                            <label className="text-slate-300 ml-4 font-bold">
                                Correo institucional
                                <div >
                                    <input
                                        type="text"
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm"
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
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 text-sm"
                                        value={tipoDocumento}
                                        onChange={handleSelectId}
                                    >
                                        <option value="">Seleccione un tipo</option>
                                        <option value="CC">CC</option>
                                        <option value="TARJETA-IDENTIDAD">TARJETA DE IDENTIDAD</option>
                                        <option value="PASAPORTE">PASAPORTE</option>
                                        <option value="OTRO">OTRO</option>
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
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm"
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
                                        className="w-full text-slate-500 font-bold rounded-lg border border-gray-300 p-4 pe-12 text-sm"
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