import { Link } from 'react-router-dom'



const ButtonMain = ({route, text}) => {

    return (


        <div className='w-60 m-auto'>
            <Link className="cursor-pointer group flex items-center justify-between
            gap-4 text-slate-600 font-bold hover:text-slate-800
            rounded-lg border border-none bg-cyan-100 px-5
            py-3 transition-colors hover:bg-slate-100 focus:outline-none
            focus:ring mt-3"
                to={route}>
                {text}
            </Link>
        </div>


    )
}

export default ButtonMain