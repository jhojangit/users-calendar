import { useNavigate } from 'react-router-dom'
import useUserStore from '../store/usesrStore'
import { useEffect, useState } from 'react'
import { useStore } from 'zustand'




const GeneralCalendar = () => {

    const navigate = useNavigate()


    const handleUserSelection = (e, n) => {

        n != 0 ? navigate(`users/${e}`) : ""

    }

    const { UsersDataStore } = useUserStore()


    const [LU910, setLU910] = useState(0);
    const [MA910, setMA910] = useState(0);
    const [MI910, setMI910] = useState(0);
    const [JU910, setJU910] = useState(0);
    const [VI910, setVI910] = useState(0);
    const [SA910, setSA910] = useState(0);

    const [LU1011, setLU1011] = useState(0);
    const [MA1011, setMA1011] = useState(0);
    const [MI1011, setMI1011] = useState(0);
    const [JU1011, setJU1011] = useState(0);
    const [VI1011, setVI1011] = useState(0);
    const [SA1011, setSA1011] = useState(0);

    const [LU1112, setLU1112] = useState(0);
    const [MA1112, setMA1112] = useState(0);
    const [MI1112, setMI1112] = useState(0);
    const [JU1112, setJU1112] = useState(0);
    const [VI1112, setVI1112] = useState(0);
    const [SA1112, setSA1112] = useState(0);

    const [LU121, setLU121] = useState(0);
    const [MA121, setMA121] = useState(0);
    const [MI121, setMI121] = useState(0);
    const [JU121, setJU121] = useState(0);
    const [VI121, setVI121] = useState(0);
    const [SA121, setSA121] = useState(0);

    const [LU12, setLU12] = useState(0);
    const [MA12, setMA12] = useState(0);
    const [MI12, setMI12] = useState(0);
    const [JU12, setJU12] = useState(0);
    const [VI12, setVI12] = useState(0);
    const [SA12, setSA12] = useState(0);

    const [LU23, setLU23] = useState(0);
    const [MA23, setMA23] = useState(0);
    const [MI23, setMI23] = useState(0);
    const [JU23, setJU23] = useState(0);
    const [VI23, setVI23] = useState(0);
    const [SA23, setSA23] = useState(0);

    const [LU34, setLU34] = useState(0);
    const [MA34, setMA34] = useState(0);
    const [MI34, setMI34] = useState(0);
    const [JU34, setJU34] = useState(0);
    const [VI34, setVI34] = useState(0);
    const [SA34, setSA34] = useState(0);

    const [LU45, setLU45] = useState(0);
    const [MA45, setMA45] = useState(0);
    const [MI45, setMI45] = useState(0);
    const [JU45, setJU45] = useState(0);
    const [VI45, setVI45] = useState(0);
    const [SA45, setSA45] = useState(0);

    const [LU56, setLU56] = useState(0);
    const [MA56, setMA56] = useState(0);
    const [MI56, setMI56] = useState(0);
    const [JU56, setJU56] = useState(0);
    const [VI56, setVI56] = useState(0);
    const [SA56, setSA56] = useState(0);

    const [LU67, setLU67] = useState(0);
    const [MA67, setMA67] = useState(0);
    const [MI67, setMI67] = useState(0);
    const [JU67, setJU67] = useState(0);
    const [VI67, setVI67] = useState(0);
    const [SA67, setSA67] = useState(0);

    const [LU78, setLU78] = useState(0);
    const [MA78, setMA78] = useState(0);
    const [MI78, setMI78] = useState(0);
    const [JU78, setJU78] = useState(0);
    const [VI78, setVI78] = useState(0);
    const [SA78, setSA78] = useState(0);

    const [LU89, setLU89] = useState(0);
    const [MA89, setMA89] = useState(0);
    const [MI89, setMI89] = useState(0);
    const [JU89, setJU89] = useState(0);
    const [VI89, setVI89] = useState(0);
    const [SA89, setSA89] = useState(0);



    //FILTER


    const { setUsersDataChoise, choise } = useUserStore()

    const handleFilter = (e) => {

        setUsersDataChoise(e)
    }




    useEffect(() => {

        const allUsersFromLocal = JSON.parse(localStorage.getItem("users"))


        if (!allUsersFromLocal) {
            allUsersFromLocal === null
        } else {
            const allUsers = choise ? allUsersFromLocal.filter(user => user.sede === choise) : allUsersFromLocal


            setLU910(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-9-10")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-9-10")).length
            )

            setMA910(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-9-10")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-9-10")).length
            )
            setMI910(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-9-10")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-9-10")).length
            )
            setJU910(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-9-10")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-9-10")).length
            )
            setVI910(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-9-10")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-9-10")).length
            )
            setSA910(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-9-10")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-9-10")).length
            )


            setLU1011(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-10-11")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-10-11")).length
            )
            setMA1011(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-10-11")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-10-11")).length
            )
            setMI1011(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-10-11")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-10-11")).length
            )
            setJU1011(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-10-11")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-10-11")).length
            )
            setVI1011(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-10-11")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-10-11")).length
            )
            setSA1011(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-10-11")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-10-11")).length
            )


            setLU1112(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-11-12")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-11-12")).length
            )
            setMA1112(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-11-12")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-11-12")).length
            )
            setMI1112(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-11-12")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-11-12")).length
            )
            setJU1112(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-11-12")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-11-12")).length
            )
            setVI1112(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-11-12")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-11-12")).length
            )
            setSA1112(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-11-12")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-11-12")).length
            )


            setLU121(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-12-1")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-12-1")).length
            )
            setMA121(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-12-1")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-12-1")).length
            )
            setMI121(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-12-1")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-12-1")).length
            )
            setJU121(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-12-1")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-12-1")).length
            )
            setVI121(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-12-1")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-12-1")).length
            )
            setSA121(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-12-1")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-12-1")).length
            )


            setLU12(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-1-2")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-1-2")).length
            )
            setMA12(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-1-2")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-1-2")).length
            )
            setMI12(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-1-2")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-1-2")).length
            )
            setJU12(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-1-2")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-1-2")).length
            )
            setVI12(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-1-2")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-1-2")).length
            )
            setSA12(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-1-2")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-1-2")).length
            )


            setLU23(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-2-3")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-2-3")).length
            )
            setMA23(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-2-3")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-2-3")).length
            )
            setMI23(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-2-3")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-2-3")).length
            )
            setJU23(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-2-3")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-2-3")).length
            )
            setVI23(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-2-3")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-2-3")).length
            )
            setSA23(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-2-3")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-2-3")).length
            )


            setLU34(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-3-4")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-3-4")).length
            )
            setMA34(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-3-4")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-3-4")).length
            )
            setMI34(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-3-4")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-3-4")).length
            )
            setJU34(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-3-4")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-3-4")).length
            )
            setVI34(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-3-4")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-3-4")).length
            )
            setSA34(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-3-4")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-3-4")).length
            )


            setLU45(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-4-5")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-4-5")).length
            )
            setMA45(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-4-5")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-4-5")).length
            )
            setMI45(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-4-5")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-4-5")).length
            )
            setJU45(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-4-5")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-4-5")).length
            )
            setVI45(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-4-5")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-4-5")).length
            )
            setSA45(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-4-5")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-4-5")).length
            )

            setLU56(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-5-6")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-5-6")).length
            )
            setMA56(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-5-6")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-5-6")).length
            )
            setMI56(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-5-6")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-5-6")).length
            )
            setJU56(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-5-6")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-5-6")).length
            )
            setVI56(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-5-6")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-5-6")).length
            )
            setSA56(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-5-6")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-5-6")).length
            )

            setLU67(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-6-7")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-6-7")).length
            )
            setMA67(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-6-7")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-6-7")).length
            )
            setMI67(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-6-7")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-6-7")).length
            )
            setJU67(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-6-7")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-6-7")).length
            )
            setVI67(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-6-7")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-6-7")).length
            )
            setSA67(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-6-7")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-6-7")).length
            )

            setLU78(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-7-8")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-7-8")).length
            )
            setMA78(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-7-8")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-7-8")).length
            )
            setMI78(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-7-8")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-7-8")).length
            )
            setJU78(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-7-8")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-7-8")).length
            )
            setVI78(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-7-8")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-7-8")).length
            )
            setSA78(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-7-8")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-7-8")).length
            )

            setLU89(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("LU-8-9")).length :
                UsersDataStore.filter(user => user.calendar.includes("LU-8-9")).length
            )
            setMA89(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MA-8-9")).length :
                UsersDataStore.filter(user => user.calendar.includes("MA-8-9")).length
            )
            setMI89(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("MI-8-9")).length :
                UsersDataStore.filter(user => user.calendar.includes("MI-8-9")).length
            )
            setJU89(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("JU-8-9")).length :
                UsersDataStore.filter(user => user.calendar.includes("JU-8-9")).length
            )
            setVI89(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("VI-8-9")).length :
                UsersDataStore.filter(user => user.calendar.includes("VI-8-9")).length
            )
            setSA89(allUsers ?
                allUsers.filter(fecha => fecha.calendar.includes("SA-8-9")).length :
                UsersDataStore.filter(user => user.calendar.includes("SA-8-9")).length
            )
        }
    }, [handleFilter]);




    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (value) => {
        setActiveButton(value);
        handleFilter(value);
    };

    return (
        <div>

            <section className='flex gap-4 justify-center pt-8'>
                <button
                    className={`text-slate-50 p-2 rounded-md hover:bg-slate-200 hover:text-slate-600 ${activeButton === "IBÉRICA" ? 'bg-blue-200 text-slate-700' : 'bg-slate-500'}`}
                    type="button"
                    value="IBÉRICA"
                    onClick={() => handleClick("IBÉRICA")}
                >
                    Ibérica
                </button>

                <button
                    className={`text-slate-50 p-2 rounded-md hover:bg-slate-200 hover:text-slate-600 ${activeButton === "SUR" ? 'bg-blue-200 text-slate-700' : 'bg-slate-500'}`}
                    type="button"
                    value="SUR"
                    onClick={() => handleClick("SUR")}
                >
                    Sur
                </button>

                <button
                    className={`text-slate-50 p-2 rounded-md hover:bg-slate-200 hover:text-slate-600 ${activeButton === "CIRCUNVALAR" ? 'bg-blue-200 text-slate-700' : 'bg-slate-500'}`}
                    type="button"
                    value="CIRCUNVALAR"
                    onClick={() => handleClick("CIRCUNVALAR")}
                >
                    Circunvalar
                </button>

                <button
                    className={`text-slate-50 p-2 rounded-md hover:bg-slate-200 hover:text-slate-600 ${activeButton === "FEDERMÁN" ? 'bg-blue-200 text-slate-700' : 'bg-slate-500'}`}
                    type="button"
                    value="FEDERMÁN"
                    onClick={() => handleClick("FEDERMÁN")}
                >
                    Federmán
                </button>
            </section>



            <div className="overflow-x-auto max-w-screen-lg m-auto mt-5">
                <table className="min-w-full bg-slate-600 text-sm rounded-lg ">

                    <thead className="ltr:text-left rtl:text-right border ">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">LUNES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">MARTES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">MIÉRCOLES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">JUEVES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">VIERNES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-slate-200">SÁBADO</th>
                        </tr>
                    </thead>


                    <tbody>

                        <tr className="odd:bg-slate-500 text-center h-10 border ">
                            <td
                                onClick={() => handleUserSelection("LU-9-10", LU910)}
                                className={`${LU910
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${LU910}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-9-10", MA910)}
                                className={`${MA910
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${MA910}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-9-10", MI910)}
                                className={`${MI910
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${MI910}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-9-10", JU910)}
                                className={`${JU910
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${JU910}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-9-10", VI910)}
                                className={`${VI910
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${VI910}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-9-10", SA910)}
                                className={`${SA910
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${SA910}`}
                            </td>
                        </tr>


                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-10-11", LU1011)}
                                className={`${LU1011
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${LU1011}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-10-11", MA1011)}
                                className={`${MA1011
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${MA1011}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-10-11", MI1011)}
                                className={`${MI1011
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${MI1011}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-10-11", JU1011)}
                                className={`${JU1011
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${JU1011}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-10-11", VI1011)}
                                className={`${VI1011
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${VI1011}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-10-11", SA1011)}
                                className={`${SA1011
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${SA1011}`}

                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-11-12", LU1112)}
                                className={`${LU1112
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${LU1112}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-11-12", MA1112)}
                                className={`${MA1112
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${MA1112}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-11-12", MI1112)}
                                className={`${MI1112
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${MI1112}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-11-12", JU1112)}
                                className={`${JU1112
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${JU1112}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-11-12", VI1112)}
                                className={`${VI1112
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${VI1112}`}

                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-11-12", SA1112)}
                                className={`${SA1112
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${SA1112}`}

                            </td>

                        </tr>

                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-12-1", LU121)}
                                className={`${LU121
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${LU121}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-12-1", MA121)}
                                className={`${MA121
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${MA121}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-12-1", MI121)}
                                className={`${MI121
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${MI121}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-12-1", JU121)}
                                className={`${JU121
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${JU121}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-12-1", VI121)}
                                className={`${VI121
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${VI121}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-12-1", SA121)}
                                className={`${SA121
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${SA121}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-1-2", LU12)}
                                className={`${LU12
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${LU12}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-1-2", MA12)}
                                className={`${MA12
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${MA12}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-1-2", MI12)}
                                className={`${MI12
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${MI12}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-1-2", JU12)}
                                className={`${JU12
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${JU12}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-1-2", VI12)}
                                className={`${VI12
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${VI12}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-1-2", SA12)}
                                className={`${SA12
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${SA12}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-2-3", LU23)}
                                className={`${LU23
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${LU23}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-2-3", MA23)}
                                className={`${MA23
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${MA23}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-2-3", MI23)}
                                className={`${MI23
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${MI23}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-2-3", JU23)}
                                className={`${JU23
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${JU23}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-2-3", VI23)}
                                className={`${VI23
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${VI23}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-2-3", SA23)}
                                className={`${SA23
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${SA23}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-3-4", LU34)}
                                className={`${LU34
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${LU34}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-3-4", MA34)}
                                className={`${MA34
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${MA34}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-3-4", MI34)}
                                className={`${MI34
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${MI34}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-3-4", JU34)}
                                className={`${JU34
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${JU34}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-3-4", VI34)}
                                className={`${VI34
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${VI34}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-3-4", SA34)}
                                className={`${SA34
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${SA34}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-4-5", LU45)}
                                className={`${LU45
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${LU45}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-4-5", MA45)}
                                className={`${MA45
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${MA45}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-4-5", MI45)}
                                className={`${MI45
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${MI45}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-4-5", JU45)}
                                className={`${JU45
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${JU45}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-4-5", VI45)}
                                className={`${VI45
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${VI45}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-4-5", SA45)}
                                className={`${SA45
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${SA45}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-5-6", LU56)}
                                className={`${LU56
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${LU56}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-5-6", MA56)}
                                className={`${MA56
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${MA56}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-5-6", MI56)}
                                className={`${MI56
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${MI56}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-5-6", JU56)}
                                className={`${JU56
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${JU56}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-5-6", VI56)}
                                className={`${VI56
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${VI56}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-5-6", SA56)}
                                className={`${SA56
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${SA56}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-6-7", LU67)}
                                className={`${LU67
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${LU67}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-6-7", MA67)}
                                className={`${MA67
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${MA67}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-6-7", MI67)}
                                className={`${MI67
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${MI67}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-6-7", JU67)}
                                className={`${JU67
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${JU67}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-6-7", VI67)}
                                className={`${VI67
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${VI67}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-6-7", SA67)}
                                className={`${SA67
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${SA67}`}
                            </td>

                        </tr>

                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-7-8", LU78)}
                                className={`${LU78
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${LU78}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-7-8", MA78)}
                                className={`${MA78
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${MA78}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-7-8", MI78)}
                                className={`${MI78
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${MI78}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-7-8", JU78)}
                                className={`${JU78
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${JU78}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-7-8", VI78)}
                                className={`${VI78
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${VI78}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-7-8", SA78)}
                                className={`${SA78
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${SA78}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-slate-500 text-center h-10 border">
                            <td
                                onClick={() => handleUserSelection("LU-8-9", LU89)}
                                className={`${LU89
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${LU89}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MA-8-9", MA89)}
                                className={`${MA89
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${MA89}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("MI-8-9", MI89)}
                                className={`${MI89
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${MI89}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("JU-8-9", JU89)}
                                className={`${JU89
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${JU89}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("VI-8-9", VI89)}
                                className={`${VI89
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${VI89}`}
                            </td>

                            <td
                                onClick={() => handleUserSelection("SA-8-9", SA89)}
                                className={`${SA89
                                    ? "bg-cyan-100 text-slate-600 font-bold  cursor-pointer hover:bg-slate-100 "
                                    : "whitespace-nowrap px-4 py-2 text-slate-200 cursor-pointer hover:bg-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${SA89}`}
                            </td>

                        </tr>


                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default GeneralCalendar