import React, { useEffect, useState } from 'react'
import TitleMain from '../components/TitleMain'
import GeneralCalendar from '../components/GeneralCalendar'
import ButtonAddStudent from '../components/ButtonAddStudent'
import ButtonAllUsers from '../components/ButtonAllUsers'
import ImportJson from '../components/ImportJson'

const MainPage = () => {


    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);


    const users = JSON.parse(localStorage.getItem("users"))



    return (
        <div className='font-labrada w-full min-h-screen h-full pb-5 flex flex-col bg-slate-900 '>

           {/* <TitleMain/> */}
            <GeneralCalendar/>
            <ButtonAddStudent/>


            {users && users.length !== 0 && <ButtonAllUsers />}
            <ImportJson/>

        </div>

    )
}

export default MainPage