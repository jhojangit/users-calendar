import { useState } from "react";
import FormCalendar from "./FormCalendar";
import useUserStore from "../store/usesrStore";
import { useNavigate } from "react-router-dom";



const FormUser = () => {

    const navigate = useNavigate()
    const {UsersDataStore, setUsersDataStore} = useUserStore()



    const [name, setName] = useState("Nombre de usuario");
    if (name=="") {
        setName("Nombre de usuario")
    }


    const [facultad, setFacultad] = useState("Nombre de facultad");
    if (facultad=="") {
        setFacultad("Nombre de Facultad")
    }


    const [email, setEmail] = useState("@uan.edu.co");
    if (email=="") {
        setEmail("@uan.edu.co")
    }


    const [idNumber, setIdNumber] = useState(123456789);
    if (idNumber=="") {
        setIdNumber("123456789")
    }


    const [phoneNumber, setPhoneNumber] = useState(313123456);





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


    const handleConfirm = () => {
        const data = {
            name,
            facultad,
            email,
            idNumber, 
            phoneNumber, 
            calendar
        }

        const copyData = structuredClone(UsersDataStore)   

        const newData = [data, ...copyData]

        setUsersDataStore(newData)

        navigate("/")
    }


    const handleDelete = () => {
        calendar = []
        setName("")
        setFacultad("")
        setIdNumber()
        setPhoneNumber()

        navigate("/")

    }




    return (
        <>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-center text-2xl font-bold text-green-500 sm:text-3xl">Selecciona tu horario</h1>


                    <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">


                        <div>
                            <label className="text-slate-400 ml-4">
                                Nombre
                                <div >
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm"
                                        placeholder={name}
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
                                        placeholder={facultad}
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
                                        placeholder={email}
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
                                        placeholder={idNumber}
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
                                        placeholder={phoneNumber}
                                        onChange={handlePhoneNumber}
                                    />
                                </div>
                            </label>
                        </div>




                        <FormCalendar calendarData={handleCalendar}/>



                        
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
                                BORRAR
                            </button>
                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default FormUser