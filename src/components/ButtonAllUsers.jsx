import React from 'react'
import { Link } from 'react-router-dom'

const ButtonAllUsers = () => {


    return (


        <div className='w-60 m-auto mt-10'>
            <Link className="cursor-pointer group flex items-center justify-between gap-4 text-slate-600 font-bold hover:text-slate-800 rounded-lg border border-none bg-cyan-100 px-5 py-3 transition-colors hover:bg-slate-100 focus:outline-none focus:ring"

                to={"/allUsers"}>
                LISTA DE USUARIOS
            </Link>
        </div>


    )
}

export default ButtonAllUsers