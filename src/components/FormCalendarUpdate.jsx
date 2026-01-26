import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DAYS_OF_WEEK, DAYS } from '../constants/daysOfWeek';
import { TIMESLOTS } from '../constants/time';

const FormCalendarUpdate = ({ calendarData, dataSelected }) => {
    // Estado para almacenar los elementos seleccionados
    const [selectedItems, setSelectedItems] = useState(dataSelected);

    // Función para manejar la selección y deselección de celdas
    const dataSelection = (e) => {
        if (selectedItems?.includes(e)) {
            // Si ya está seleccionado, se elimina de la selección
            const updatedSelection = selectedItems.filter(item => item !== e);
            setSelectedItems(updatedSelection);
        } else {
            // Si no está seleccionado, se agrega a la selección
            const updatedSelection = [...selectedItems, e];
            setSelectedItems(updatedSelection);
        }
    };

    // Función para comprobar si un ítem está seleccionado
    const isItemSelected = (e) => selectedItems?.includes(e);

    // Actualización de los datos del calendario
    calendarData(selectedItems);

    const navigate = useNavigate();

    // Redirección si no hay datos seleccionados
    useEffect(() => {
        if (selectedItems === undefined) {
            navigate("/main");
        }
    }, [selectedItems, navigate]);

    return (
        <section>
            <div className="overflow-x-auto max-w-screen-lg m-auto mt-5">
                <table className="min-w-full bg-slate-600 text-sm rounded-md">

                    {/* Encabezado de la tabla que muestra los días de la semana */}
                    <thead className="ltr:text-left rtl:text-right border">
                        <tr>
                            {DAYS_OF_WEEK.map(day => (
                                <th key={day} className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Cuerpo de la tabla */}
                    <tbody>
                        {TIMESLOTS.map((slot) => (
                            <tr key={slot} className="odd:bg-slate-500 text-center border">
                                {DAYS.map(day => {
                                    const cellKey = `${day}-${slot}`;
                                    return (
                                        <td
                                            key={cellKey}
                                            onClick={() => dataSelection(cellKey)}
                                            className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                            ${isItemSelected(cellKey)
                                                    ? 'bg-cyan-100 text-slate-600 font-bold hover:bg-slate-100'
                                                    : 'text-slate-100 hover:bg-slate-400 hover:text-slate-100'}`}>
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

export default FormCalendarUpdate;
