import React from 'react'
import { useNavigate } from 'react-router-dom';

const UsersList = ({ users, date }) => {

    const navigate = useNavigate()
    

    const handleId = (e) => {

        navigate(`/formPageUpdate/${e}`)
    }




    return (
        <section className='w-11/12 m-auto h-screen flex flex-col pt-10 items-center border-2'>

            <h1>
                {date}
            </h1>

            {

                users.map(user => (
                    <div
                        className='w-full max-w-lg  flex flex-col items-center '
                        key={user.phoneNumber}>
                        <h3
                            onClick={() => handleId(user.idNumber)}
                            className='cursor-pointer w-full text-center bg-white border-2 rounded-lg mt-3 hover:bg-green-400 hover:text-white hover:outline-none'>
                        
                            {user.name.toUpperCase() + " - " + user.facultad.toUpperCase()}
                        </h3>

                    </div>
                ))
            }
        </section>
    )
}

export default UsersList