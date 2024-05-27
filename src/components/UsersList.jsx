import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UsersList = ({ users, date }) => {

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const navigate = useNavigate()
    

    const handleId = (e) => {

        navigate(`/formPageUpdate/${e}`)
    }


    const handleReturn = () =>{
        navigate(-1)
    } 

    return (
        <section className='w-full m-auto h-screen flex flex-col pt-10 items-center'>

            <h1  className='font-bold text-lg'>
                {date}
            </h1>

            <strong>
                {users.length + " " + "inscritos"}
            </strong>


            
            <div className='absolute top-5 left-5'>
                <button
                    onClick={handleReturn}
                    className='bg-blue-700 p-2 rounded-lg hover:bg-blue-600'>
                    Regresar
                </button>
            </div>

            {

                users.map(user => (
                    <div
                        className='w-full max-w-lg  flex flex-col items-center '
                        key={user.phoneNumber}>
                        <h3
                            onClick={() => handleId(user.idNumber)}
                            className='cursor-pointer w-full font-bold text-slate-700 text-center bg-white border-none rounded-md mt-3 hover:bg-slate-400 hover:text-white hover:outline-none transition'>
                        
                            {user.name.toUpperCase() + " - " + user.facultad.toUpperCase()}
                        </h3>

                    </div>
                ))
            }
        </section>
    )
}

export default UsersList