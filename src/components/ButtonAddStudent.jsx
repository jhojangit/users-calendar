import { useNavigate } from "react-router-dom"



const ButtonAddStudent = () => {
    const navigate = useNavigate()

    const handleAddUser = () => {
        navigate("/form")
    }


    return (
        <div 
            className='w-1/6 m-auto mt-10'
            
            >
            <a
                className="cursor-pointer group flex items-center justify-between gap-4 rounded-lg border border-cyan-100 bg-cyan-100 px-5 py-3 transition-colors hover:bg-slate-100 focus:outline-none focus:ring"
                onClick={handleAddUser}
            >


                <span
                    className="font-bold text-slate-600 transition-colors group-hover:text-slate-800">
                    Agregar usuario
                </span>


                <span
                    className="shrink-0 rounded-full border border-current bg-transparent p-2 text-cyan-800">
                    <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </span>
            </a>


        </div>
    )
}

export default ButtonAddStudent