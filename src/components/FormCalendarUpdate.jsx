import { useState } from 'react';

const FormCalendarUpdate = ({calendarData, dataSelected}) => {


    const [selectedItems, setSelectedItems] = useState(dataSelected);

    const dataSelection = (e) => {
        if (selectedItems.includes(e)) {
            const updatedSelection = selectedItems.filter(item => item !== e);
            setSelectedItems(updatedSelection);
        } else {
            const updatedSelection = [...selectedItems, e];
            setSelectedItems(updatedSelection);
        }
    };

    const isItemSelected = (e) => selectedItems.includes(e);

    calendarData(selectedItems)




    return (
        <section >
            <div className="overflow-x-auto max-w-screen-lg m-auto mt-5">
            <table className="min-w-full bg-slate-600 text-sm rounded-md">

                <thead className="ltr:text-left rtl:text-right border">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">LUNES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">MARTES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">MIÉRCOLES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">JUEVES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">VIERNES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">SÁBADO</th>
                        </tr>
                    </thead>


                    <tbody >

                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-9-10")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-9-10") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                9 - 10
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-9-10")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-9-10") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                9 - 10
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-9-10")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-9-10") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                9 - 10
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-9-10")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-9-10") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                9 - 10
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-9-10")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-9-10") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                9 - 10
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-9-10")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-9-10") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                9 - 10
                            </td>
                        </tr>


                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-10-11")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-10-11") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                10 - 11
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-10-11")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-10-11") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                10 - 11
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-10-11")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-10-11") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                10 - 11
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-10-11")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-10-11") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                10 - 11
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-10-11")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-10-11") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                10 - 11
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-10-11")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-10-11") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                10 - 11
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-11-12")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-11-12") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                11 - 12
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-11-12")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-11-12") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                11 - 12
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-11-12")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-11-12") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                11 - 12
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-11-12")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-11-12") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                11 - 12
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-11-12")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-11-12") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                11 - 12
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-11-12")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-11-12") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                11 - 12
                            </td>

                        </tr>

                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-12-1")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-12-1") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                12 - 1
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-12-1")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-12-1") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                12 - 1
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-12-1")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-12-1") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                12 - 1
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-12-1")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-12-1") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                12 - 1
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-12-1")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-12-1") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                12 - 1
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-12-1")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-12-1") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                12 - 1
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-1-2")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-1-2") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                1 - 2
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-1-2")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-1-2") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                1 - 2
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-1-2")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-1-2") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                1 - 2
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-1-2")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-1-2") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                1 - 2
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-1-2")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-1-2") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                1 - 2
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-1-2")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-1-2") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                1 - 2
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-2-3")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-2-3") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                2 - 3
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-2-3")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-2-3") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                2 - 3
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-2-3")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-2-3") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                2 - 3
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-2-3")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-2-3") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                2 - 3
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-2-3")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-2-3") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                2 - 3
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-2-3")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-2-3") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                2 - 3
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-3-4")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-3-4") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                3 - 4
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-3-4")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-3-4") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                3 - 4
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-3-4")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-3-4") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                3 - 4
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-3-4")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-3-4") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                3 - 4
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-3-4")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-3-4") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                3 - 4
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-3-4")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-3-4") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                3 - 4
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-4-5")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-4-5") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                4 - 5
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-4-5")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-4-5") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                4 - 5
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-4-5")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-4-5") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                4 - 5
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-4-5")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-4-5") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                4 - 5
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-4-5")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-4-5") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                4 - 5
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-4-5")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-4-5") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                4 - 5
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-5-6")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-5-6") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                5 - 6
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-5-6")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-5-6") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                5 - 6
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-5-6")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-5-6") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                5 - 6
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-5-6")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-5-6") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                5 - 6
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-5-6")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-5-6") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                5 - 6
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-5-6")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-5-6") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                5 - 6
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-6-7")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-6-7") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                6 - 7
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-6-7")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-6-7") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                6 - 7
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-6-7")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-6-7") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                6 - 7
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-6-7")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-6-7") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                6 - 7
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-6-7")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-6-7") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                6 - 7
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-6-7")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-6-7") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                6 - 7
                            </td>

                        </tr>

                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-7-8")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-7-8") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                7 - 8
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-7-8")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-7-8") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                7 - 8
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-7-8")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-7-8") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                7 - 8
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-7-8")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-7-8") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                7 - 8
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-7-8")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-7-8") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                7 - 8
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-7-8")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-7-8") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                7 - 8
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center border">
                            <td 
                                onClick={() => dataSelection("LU-8-9")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("LU-8-9") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                8 - 9
                            </td>

                            <td 
                                onClick={() => dataSelection("MA-8-9")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MA-8-9") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                8 - 9
                            </td>

                            <td 
                                onClick={() => dataSelection("MI-8-9")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("MI-8-9") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                8 - 9
                            </td>

                            <td 
                                onClick={() => dataSelection("JU-8-9")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("JU-8-9") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                8 - 9
                            </td>

                            <td 
                                onClick={() => dataSelection("VI-8-9")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("VI-8-9") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                8 - 9
                            </td>

                            <td 
                                onClick={() => dataSelection("SA-8-9")}
                                className={`whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer 
                                ${
                                    isItemSelected("SA-8-9") ? 'bg-cyan-100 text-slate-600 font-bold' : ' text-slate-100 hover:bg-slate-400 hover:text-slate-100'
                                }`}>
                                8 - 9
                            </td>

                        </tr>


                    </tbody>

                </table>
            </div>

        </section>
    )
}

export default FormCalendarUpdate