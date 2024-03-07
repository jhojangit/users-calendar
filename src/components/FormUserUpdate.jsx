import { useEffect, useState } from "react";
import useUserStore from "../store/usesrStore";
import { useNavigate } from "react-router-dom";
import FormCalendarUpdate from "./FormCalendarUpdate";



const FormUserUpdate = ({user}) => {


    const navigate = useNavigate()
    const {UsersDataStore, setUsersDataStore} = useUserStore()

    const users = JSON.parse(localStorage.getItem("users"))

    useEffect(() => {
        users ? setUsersDataStore(users) : ""

    }, []);




    const [name, setName] = useState(user.name);



    const [facultad, setFacultad] = useState(user.facultad);



    const [email, setEmail] = useState(user.email);
    


    const [idNumber, setIdNumber] = useState(user?.idNumber);
    


    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);




    const handleInputName = (e) => {
        setName(e.target.value)
    }

    const handleInputFacultad = (e) => {
        setFacultad(e.target.value)
    }


    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleInputId = (e) => {
        setIdNumber(e.target.value)
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
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

        if (facultad.length <= 0 || facultad === "Nombre de facultad") {
            error()
            return
        }

        if (email.length <= 0 || email === "@uan.edu.co") {
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


        const isNotUserUniq = users.find(element => element.idNumber === idNumber)

        if (isNotUserUniq && idNumber != user.idNumber) {
            setUserExist(true)

            setTimeout(() => {
                setUserExist(false)
            }, 4000);

            return
        }


        const data = {
            name,
            facultad,
            email,
            idNumber, 
            phoneNumber, 
            calendar
        }


        const copyData = structuredClone(UsersDataStore)   

        const arrSinUser = copyData.filter(users => users.phoneNumber != user.phoneNumber)

        const newData = [data, ...arrSinUser]

        
        setUsersDataStore(newData)

        localStorage.clear()
        
        localStorage.setItem("users", JSON.stringify(newData))
        
        navigate("/")
    }


    const handleDelete = () => {
        calendar = []
        setName("")
        setFacultad("")
        setIdNumber()
        setPhoneNumber()



        const copyData = structuredClone(UsersDataStore)   

        const arrSinUser = copyData.filter(users => users.phoneNumber != user.phoneNumber)

        const newData = arrSinUser

        setUsersDataStore(newData)

        localStorage.clear()
        
        localStorage.setItem("users", JSON.stringify(newData))

        navigate("/")
    }


    return (
        <>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-center text-2xl font-bold text-green-500 sm:text-3xl">Actualiza datos</h1>


                    <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">


                        <div>
                            <label className="text-slate-400 ml-4">
                                Nombre
                                <div >
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm"
                                        placeholder={user?.name}
                                        onChange={handleInputName}
                                    />
                                </div>
                            </label>
                        </div>



                        <div>
                            <label className="text-slate-400 ml-4">
                                Facultad
                                <div >
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm"
                                        placeholder={user?.facultad}
                                        onChange={handleInputFacultad}
                                    />
                                </div>
                            </label>
                        </div>




                        <div>
                            <label className="text-slate-400 ml-4">
                                Correo institucional
                                <div >
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm"
                                        placeholder={user?.email}
                                        onChange={handleInputEmail}
                                    />
                                </div>
                            </label>
                        </div>


                        <div>
                            <label className="text-slate-400 ml-4">
                                Documento de identidad
                                <div >
                                    <input
                                        type="number"
                                        className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm"
                                        placeholder={user?.idNumber}
                                        onChange={handleInputId}
                                    />
                                </div>
                            </label>
                        </div>


                        <div>
                            <label className="text-slate-400 ml-4">
                                Número de celular
                                <div >
                                    <input
                                        type="number"
                                        className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm"
                                        placeholder={user?.phoneNumber}
                                        onChange={handlePhoneNumber}
                                    />
                                </div>
                            </label>
                        </div>




                        <FormCalendarUpdate calendarData={handleCalendar} dataSelected={user.calendar}/>



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
                                onClick={handleDelete}
                                className="block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white hover:bg-red-500"
                            >
                                ELIMINAR
                            </button>
                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default FormUserUpdate