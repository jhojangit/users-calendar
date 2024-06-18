import { useNavigate } from "react-router-dom"



const ButtonAddStudent = () => {
    const navigate = useNavigate()

    const handleAddUser = () => {
        navigate("/form")
    }


    return (
        <div 
            className='w-60 m-auto mt-10 text-center'
            
            >
            <a
                className="cursor-pointer group flex items-center justify-between gap-4 rounded-lg border border-cyan-100 bg-cyan-100 px-5 py-3 transition-colors hover:bg-slate-100 focus:outline-none focus:ring"
                onClick={handleAddUser}
            >

                <span
                    className="font-bold  text-slate-600 transition-colors group-hover:text-slate-800">
                    AGREGAR USUARIO
                </span>

            </a>


        </div>
    )
}

export default ButtonAddStudent