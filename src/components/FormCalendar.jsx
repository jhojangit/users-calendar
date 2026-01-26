import { useState } from 'react';
import { DAYS_OF_WEEK, DAYS } from '../constants/daysOfWeek';
import { TIMESLOTS } from '../constants/time';

const FormCalendar = ({ calendarData }) => {


    const [selectedItems, setSelectedItems] = useState([]);

    // Función para manejar la selección y deselección de celdas
    const dataSelection = (e) => {
        if (selectedItems.includes(e)) {
            // Si el elemento ya está seleccionado, quitarlo de la selección
            const updatedSelection = selectedItems.filter(item => item !== e);
            setSelectedItems(updatedSelection);
        } else {
            // Si el elemento no está seleccionado, agregarlo a la selección
            const updatedSelection = [...selectedItems, e];
            setSelectedItems(updatedSelection);
        }
    };

    // Verificar si un elemento está seleccionado
    const isItemSelected = (e) => selectedItems.includes(e);

    // Llamar a calendarData con la selección actual
    calendarData(selectedItems);

    return (
        <section>
            <div className="overflow-x-auto max-w-screen-lg m-auto mt-5">
                <table className="min-w-full bg-slate-600 text-sm rounded-md">
                    <thead className="ltr:text-left rtl:text-right border">
                        <tr>
                            {/* Crear la cabecera de la tabla con los días de la semana */}
                            {DAYS_OF_WEEK.map(day => (
                                <th key={day} className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Crear las filas de la tabla para cada intervalo de tiempo */}
                        {TIMESLOTS.map(slot => (
                            <tr key={slot} className="odd:bg-slate-500 text-center border">
                                {DAYS.map(day => {
                                    // Construir el identificador de la celda en formato "MA-10-11"
                                    const key = `${day}-${slot}`;
                                    return (
                                        <td
                                            key={key}
                                            onClick={() => dataSelection(key)}
                                            className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                                ${isItemSelected(key) ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                                }`}
                                        >
                                            {slot}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default FormCalendar;
