import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/usesrStore';
import { useEffect, useState } from 'react';

import { ARRAY_OF_COURSES } from '../constants/courses.js';
import { DAYS_OF_WEEK, DAYS } from '../constants/daysOfWeek.js';
import { INITIALSTATE, TIMESLOTS } from '../constants/time.js';
import MenuSedes from './MenuSedes.jsx';


const GeneralCalendar = () => {

    const { CurrentSede, CurrentCourse } = useUserStore();

    const navigate = useNavigate();
    const store = useUserStore();

    const [timeSlotsState, setTimeSlots] = useState({});

    // Maneja la selección de un usuario y redirige a la página de usuarios
    const handleUserSelection = (e, n) => {
        if (n !== 0) navigate(`users/${e}`);
    };

    // Filtra los usuarios basados en la sede seleccionada
    const handleFilter = (e) => {
        const course = ARRAY_OF_COURSES.find(course => course.courseStorageName === CurrentCourse);
        if (course) {
            store[course.setterChoise](e);
        }
    };

    // Actualiza el estado de timeSlots cada vez que cambia CurrentCourse o store
    useEffect(() => {
        const allUsersFromLocal = JSON.parse(localStorage.getItem(CurrentCourse)) || [];
        let allUsers = [];
    
        const currentCourseData = ARRAY_OF_COURSES.find(course => course.courseStorageName === CurrentCourse);
        if (currentCourseData) {
            const choise = store[currentCourseData.choise];
            allUsers = choise ? allUsersFromLocal.filter(user => user.sede === choise) : allUsersFromLocal;
        }
    
        // Filtrar los usuarios por la sede actual
        if (CurrentSede) {
            allUsers = allUsers.filter(user => user.sede === CurrentSede);
        }
    
        const updatedState = {};
        TIMESLOTS.forEach(slot => {
            DAYS.forEach(day => {
                const key = `${day}${slot.replace("-", "")}`;
                updatedState[key] = allUsers.filter(fecha => fecha.calendar.includes(`${day}-${slot}`)).length;
            });
        });
    
        setTimeSlots(updatedState);
    }, [CurrentCourse, store, CurrentSede]);

    // Maneja el clic en un botón de sede y actualiza el estado activo
    const handleClickMenuOptions = (value) => {

        handleFilter(value);
    };

    // Formatea el horario en formato '9-10', '10-11', etc.
    const formatSlot = (slotDigits) => {
        // Convierte el formato del slot dependiendo de su longitud
        if (slotDigits === '910') {
            return '9-10';
        } else if (slotDigits.length === 4) {
            return `${slotDigits.slice(0, 2)}-${slotDigits.slice(2)}`;
        } else if (slotDigits.length === 3) {
            return `${slotDigits.slice(0, 2)}-${slotDigits.slice(2)}`;
        } else if (slotDigits.length === 2) {
            return `${slotDigits.slice(0, 1)}-${slotDigits.slice(1)}`;
        } else {
            return slotDigits;
        }
    };

    return (
        <div>

            <MenuSedes handleClickMenuOptions={(e) => handleClickMenuOptions(e)} />

            <div className='text-center'>
                <h1
                    className='text-slate-200 text-2xl'>
                    {CurrentSede}
                </h1>
            </div>


            <div className="overflow-x-auto max-w-screen-lg m-auto mt-5">
                <table className="min-w-full bg-slate-600 text-sm rounded-lg">
                    <thead className="ltr:text-left rtl:text-right border">
                        <tr>
                            {DAYS_OF_WEEK.map((day) => (
                                <th
                                    key={day}
                                    className="whitespace-nowrap px-4 py-2 font-medium text-slate-200"
                                >
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>


                    <tbody>
                        {Object.keys(INITIALSTATE).reduce((rows, key, index) => {
                            const day = key.slice(0, 2); // 'LU', 'MA', etc.
                            const slotDigits = key.slice(2); // '910', '1011', etc.
                            const slot = formatSlot(slotDigits); // '9-10', '10-11', etc.

                            const rowIndex = Math.floor(index / DAYS_OF_WEEK.length);
                            if (!rows[rowIndex]) rows[rowIndex] = [];

                            rows[rowIndex].push(
                                <td
                                    key={key}
                                    onClick={() => handleUserSelection(`${day}-${slot}`, timeSlotsState[key])}
                                    className={`${timeSlotsState[key]
                                        ? "bg-slate-300 text-slate-800 font-bold cursor-pointer hover:bg-slate-100"
                                        : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                        }`}
                                >
                                    {`${slot} / ${timeSlotsState[key]}`}
                                </td>
                            );

                            return rows;
                        }, []).map((row, index) => (
                            <tr key={index} className="odd:bg-slate-500 text-center h-10 border">
                                {row}
                            </tr>
                        ))}
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default GeneralCalendar;