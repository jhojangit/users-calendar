import React from 'react'
import { Link } from 'react-router-dom';

const UsersList = ({ users, date }) => {




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

                        <Link
                            to="/form"
                            className='w-full text-center bg-white border-2 rounded-lg mt-3 hover:bg-green-400'
                        >
                            {user.name.toUpperCase() + " - " + user.facultad.toUpperCase()}
                        </Link>

                    </div>
                ))
            }
        </section>
    )
}

export default UsersList