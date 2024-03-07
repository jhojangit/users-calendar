import React, { useEffect, useState } from 'react'
import TitleMain from '../components/TitleMain'
import GeneralCalendar from '../components/GeneralCalendar'
import ButtonAddStudent from '../components/ButtonAddStudent'
import ButtonAllUsers from '../components/ButtonAllUsers'

const MainPage = () => {


    const users = JSON.parse(localStorage.getItem("users"))





    return (
        <div className='font-labrada w-full flex flex-col '>

            <TitleMain/>
            <GeneralCalendar/>
            <ButtonAddStudent/>

            {users && users.length !== 0 && <ButtonAllUsers />}

        </div>

    )
}

export default MainPage