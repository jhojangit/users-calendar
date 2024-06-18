import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UsersList = ({ users, date }) => {

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const navigate = useNavigate()


    const [filterUsers, setFilterUsers] = useState(users);

    const handleFilter = (value) => {

        const newArray = users.filter( user => user.sede === value)
        setFilterUsers(newArray);
    };


    const [activeButton, setActiveButton] = useState(null);

    const [amountSelection, setAmountSelection] = useState("");

    const handleClick = (value) => {
        setAmountSelection(value)

        if (amountSelection === value) {
            setFilterUsers(users)
            setActiveButton("");
            setAmountSelection("")
        }else{
            setActiveButton(value);

            handleFilter(value)
        }
    };
    

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
                {filterUsers.length + " " + "inscritos"}
            </strong>


            
            <div className='absolute top-5 left-5'>
                <button
                    onClick={handleReturn}
                    className='bg-blue-700 p-2 rounded-lg hover:bg-blue-600'>
                    Regresar
                </button>
            </div>


            <section className='flex gap-4 justify-center pt-8 pb-4'>
                <button
                    className={`text-slate-50 p-2 font-bold rounded-md hover:bg-slate-200 hover:text-slate-600 ${activeButton === "IBÉRICA" ? 'bg-slate-200 text-slate-700' : 'bg-slate-500'}`}
                    type="button"
                    value="IBÉRICA"
                    onClick={() => handleClick("IBÉRICA")}
                >
                    Ibérica
                </button>

                <button
                    className={`text-slate-50 p-2 font-bold rounded-md hover:bg-slate-200 hover:text-slate-600 ${activeButton === "SUR" ? 'bg-slate-200 text-slate-700' : 'bg-slate-500'}`}
                    type="button"
                    value="SUR"
                    onClick={() => handleClick("SUR")}
                >
                    Sur
                </button>

                <button
                    className={`text-slate-50 p-2 font-bold rounded-md hover:bg-slate-200 hover:text-slate-600 ${activeButton === "CIRCUNVALAR" ? 'bg-slate-200 text-slate-700' : 'bg-slate-500'}`}
                    type="button"
                    value="CIRCUNVALAR"
                    onClick={() => handleClick("CIRCUNVALAR")}
                >
                    Circunvalar
                </button>

                <button
                    className={`text-slate-50 p-2 font-bold rounded-md hover:bg-slate-200 hover:text-slate-600 ${activeButton === "FEDERMÁN" ? 'bg-slate-200 text-slate-700' : 'bg-slate-500'}`}
                    type="button"
                    value="FEDERMÁN"
                    onClick={() => handleClick("FEDERMÁN")}
                >
                    Federmán
                </button>
            </section>

            {

                filterUsers.map(user => (
                    <div
                        className='w-full max-w-lg  flex flex-col items-center '
                        key={user.phoneNumber}>
                        <h3
                            onClick={() => handleId(user.idNumber)}
                            className='cursor-pointer w-full font-bold text-slate-700 text-center bg-white border-none rounded-md mt-3 hover:bg-slate-400 hover:text-white hover:outline-none transition'>
                        
                            {user.facultad.toUpperCase() + " - " + user.name.toUpperCase()  }
                        </h3>

                    </div>
                ))
            }
        </section>
    )
}

export default UsersList