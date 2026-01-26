import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListPrint from '../components/ListPrint';
import useUserStore from '../store/usesrStore';

const ListPrintPage = () => {

    const { CurrentCourse } = useUserStore();
    const navigate = useNavigate();




    // Guarda los usuarios del curso actual
    const users = JSON.parse(localStorage.getItem(CurrentCourse));


    // Guarda todos los usuarios en un Array
    let allUsers = [];

    const localLnegth = localStorage.length

    for (let i = 0; i < localLnegth; i++) {

        const currentKey = localStorage.key(i);
        const userData = JSON.parse(localStorage.getItem(currentKey));
        
        allUsers.push(userData);
    }


    // Redirigir si usersSort es undefined
    useEffect(() => {
        if (users === undefined) {
            navigate("/main");
        }

        if (allUsers === null) {
            navigate("/main");
        }

    }, [users, navigate]);



    return (

        <div className='w-full m-auto h-screen flex flex-col pt-10 items-center min-h-screen bg-white text-black'>
            <ListPrint users={users} allUsers={allUsers.flat(Infinity)} />
        </div>
    );
};

export default ListPrintPage;