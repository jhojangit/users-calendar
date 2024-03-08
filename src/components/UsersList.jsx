import React from 'react'
import { useNavigate } from 'react-router-dom';

const UsersList = ({ users, date }) => {

    const navigate = useNavigate()
    

    const handleId = (e) => {

        navigate(`/formPageUpdate/${e}`)
    }




    return (
        <section className='w-full m-auto h-screen flex flex-col pt-10 items-center'>

            <h1  className='font-bold text-lg'>
                {date}
            </h1>

            {

                users.map(user => (
                    <div
                        className='w-full max-w-lg  flex flex-col items-center '
                        key={user.phoneNumber}>
                        <h3
                            onClick={() => handleId(user.idNumber)}
                            className='cursor-pointer w-full font-bold text-slate-700 text-center bg-white border-none rounded-lg mt-3 hover:bg-slate-600 hover:text-white hover:outline-none transition'>
                        
                            {user.name.toUpperCase() + " - " + user.facultad.toUpperCase()}
                        </h3>

                    </div>
                ))
            }
        </section>
    )
}

export default UsersList