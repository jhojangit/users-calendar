import React from 'react'
import { Link } from 'react-router-dom'

const ButtonAllUsers = () => {


    return (


        <div className='w-1/6 m-auto mt-10'>
            <Link className="cursor-pointer group flex items-center justify-between gap-4 text-slate-50 hover:text-green-600 rounded-lg border border-green-600 bg-green-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"

                to={"/allUsers"}>
                Lista de usuarios
            </Link>
        </div>


    )
}

export default ButtonAllUsers