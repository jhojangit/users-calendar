import React from 'react'
import TitleMain from '../components/TitleMain'
import GeneralCalendar from '../components/GeneralCalendar'
import ButtonAddStudent from '../components/ButtonAddStudent'

const MainPage = () => {


    return (
        <div className='font-labrada w-full flex flex-col '>

            <TitleMain/>
            <GeneralCalendar/>
            <ButtonAddStudent/>

        </div>

    )
}

export default MainPage