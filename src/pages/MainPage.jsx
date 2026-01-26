import React, { useEffect } from 'react'
import TitleMain from '../components/TitleMain'
import GeneralCalendar from '../components/GeneralCalendar'
import useUserStore from '../store/usesrStore'
import { useNavigate } from 'react-router-dom';
import { ARRAY_OF_COURSES } from '../constants/courses.js';
import MenuCourses from '../components/MenuCourses.jsx'
import ButtonMain from '../components/ButtonMain.jsx'



const MainPage = () => {

    // Crear constante para navegación
    const navigate = useNavigate();


    // Guarda el resultado de la sesión
    const authRead = sessionStorage.getItem("authRead")
    const authWrite = sessionStorage.getItem("authWrite")


    // Da acceso a los métodos de zustand Storage
    const store = useUserStore()

    const CurrentCourse = store.CurrentCourse; 
    const MenuStoreCourse = store.MenuStoreCourse; 




    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });


        // Si en local Storage existe una key sin nombre, la borra
        if (localStorage.getItem("")) {
            localStorage.removeItem("");
        }
        // Si en local Storage existe una key con nombre "users", la borra
        if (localStorage.getItem("users")) {
            localStorage.removeItem("users");
        }

        // Si en local Storage existe una key con nombre undefined, la borra
        if (localStorage.getItem(undefined)) {
            localStorage.removeItem(undefined);
        }

        // Si en sessionStorage existen los dos valores al mismo tiempo, 
        // y ambos están vacios, Los borra y navega al inicio
        if (authRead === "" && authWrite === "") {
            navigate("/")
        }

        // Si en sessionStorage existen los dos valores al mismo tiempo, 
        // Los borra y navega al inicio
        if (authRead && authWrite) {
            sessionStorage.clear()
            navigate("/")
        }


    // Itera sobre ARRAY_OF_COURSES para aplicar los setters
        ARRAY_OF_COURSES.forEach(({ course, courseStorageName, setter }) => {
        // Si existe courseStorageName y no tiene valor, le agrega un array vacío
        if (localStorage.getItem(courseStorageName) === null) {
            localStorage.setItem(courseStorageName, JSON.stringify([]));
        }

        // Recupera lo que esté en la key actual
        const usersData = JSON.parse(localStorage.getItem(courseStorageName));

        // Usa el setter correspondiente y agrega la data actual
        const setUserDataFunction = store[setter];
        if (setUserDataFunction) {
            setUserDataFunction(usersData);
        } else {
            console.error(`Setter ${setter} no definido en el store`);
        }
    });

    }, [CurrentCourse, MenuStoreCourse]);


    // Recupera los usuarios del curso actual.
    const users = JSON.parse(localStorage.getItem(CurrentCourse))

    // Formatea el nombre del curso
    const title = CurrentCourse.replaceAll("users", "").replaceAll("_", " ")





    return (
        <div className='font-labrada w-full min-h-screen h-full pb-5 flex flex-col bg-slate-900 '>



            <TitleMain title={title} />

            <MenuCourses/>

            <GeneralCalendar />

            {/*Si está autorizado, muestra el botón */}
            {authWrite && (
                <ButtonMain 
                    route={"/form"} 
                    text={"INSCRIBIR ESTUDIANTE"}
                />
            )}

            {/*Si existen usuarios, muestra el botón */}
            {users && users.length
                !== 0 &&
                <ButtonMain 
                    route={"/allUsers"} 
                    text={"LISTA DE ESTUDIANTES"}
                />
            }

        </div>

    )
}

export default MainPage