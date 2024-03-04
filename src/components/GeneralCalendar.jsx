import { useNavigate } from 'react-router-dom'
import useUserStore from '../store/usesrStore'
import { useEffect, useState } from 'react'

const GeneralCalendar = () => {

    const navigate = useNavigate()


    const handleDataSelection = (e) => {

        navigate(`users/${e}`)

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

    useEffect(() => {
        setLU910(UsersDataStore.filter(user => user.calendar.includes("LU-9-10")).length)
        setMA910(UsersDataStore.filter(user => user.calendar.includes("MA-9-10")).length)
        setMI910(UsersDataStore.filter(user => user.calendar.includes("MI-9-10")).length)
        setJU910(UsersDataStore.filter(user => user.calendar.includes("JU-9-10")).length)
        setVI910(UsersDataStore.filter(user => user.calendar.includes("VI-9-10")).length)
        setSA910(UsersDataStore.filter(user => user.calendar.includes("SA-9-10")).length)


        setLU1011(UsersDataStore.filter(user => user.calendar.includes("LU-10-11")).length)
        setMA1011(UsersDataStore.filter(user => user.calendar.includes("MA-10-11")).length)
        setMI1011(UsersDataStore.filter(user => user.calendar.includes("MI-10-11")).length)
        setJU1011(UsersDataStore.filter(user => user.calendar.includes("JU-10-11")).length)
        setVI1011(UsersDataStore.filter(user => user.calendar.includes("VI-10-11")).length)
        setSA1011(UsersDataStore.filter(user => user.calendar.includes("SA-10-11")).length)


        setLU1112(UsersDataStore.filter(user => user.calendar.includes("LU-11-12")).length)
        setMA1112(UsersDataStore.filter(user => user.calendar.includes("MA-11-12")).length)
        setMI1112(UsersDataStore.filter(user => user.calendar.includes("MI-11-12")).length)
        setJU1112(UsersDataStore.filter(user => user.calendar.includes("JU-11-12")).length)
        setVI1112(UsersDataStore.filter(user => user.calendar.includes("VI-11-12")).length)
        setSA1112(UsersDataStore.filter(user => user.calendar.includes("SA-11-12")).length)


        setLU121(UsersDataStore.filter(user => user.calendar.includes("LU-12-1")).length)
        setMA121(UsersDataStore.filter(user => user.calendar.includes("MA-12-1")).length)
        setMI121(UsersDataStore.filter(user => user.calendar.includes("MI-12-1")).length)
        setJU121(UsersDataStore.filter(user => user.calendar.includes("JU-12-1")).length)
        setVI121(UsersDataStore.filter(user => user.calendar.includes("VI-12-1")).length)
        setSA121(UsersDataStore.filter(user => user.calendar.includes("SA-12-1")).length)


        setLU12(UsersDataStore.filter(user => user.calendar.includes("LU-1-2")).length)
        setMA12(UsersDataStore.filter(user => user.calendar.includes("MA-1-2")).length)
        setMI12(UsersDataStore.filter(user => user.calendar.includes("MI-1-2")).length)
        setJU12(UsersDataStore.filter(user => user.calendar.includes("JU-1-2")).length)
        setVI12(UsersDataStore.filter(user => user.calendar.includes("VI-1-2")).length)
        setSA12(UsersDataStore.filter(user => user.calendar.includes("SA-1-2")).length)


        setLU23(UsersDataStore.filter(user => user.calendar.includes("LU-2-3")).length)
        setMA23(UsersDataStore.filter(user => user.calendar.includes("MA-2-3")).length)
        setMI23(UsersDataStore.filter(user => user.calendar.includes("MI-2-3")).length)
        setJU23(UsersDataStore.filter(user => user.calendar.includes("JU-2-3")).length)
        setVI23(UsersDataStore.filter(user => user.calendar.includes("VI-2-3")).length)
        setSA23(UsersDataStore.filter(user => user.calendar.includes("SA-2-3")).length)


        setLU34(UsersDataStore.filter(user => user.calendar.includes("LU-3-4")).length)
        setMA34(UsersDataStore.filter(user => user.calendar.includes("MA-3-4")).length)
        setMI34(UsersDataStore.filter(user => user.calendar.includes("MI-3-4")).length)
        setJU34(UsersDataStore.filter(user => user.calendar.includes("JU-3-4")).length)
        setVI34(UsersDataStore.filter(user => user.calendar.includes("VI-3-4")).length)
        setSA34(UsersDataStore.filter(user => user.calendar.includes("SA-3-4")).length)


        setLU45(UsersDataStore.filter(user => user.calendar.includes("LU-4-5")).length)
        setMA45(UsersDataStore.filter(user => user.calendar.includes("MA-4-5")).length)
        setMI45(UsersDataStore.filter(user => user.calendar.includes("MI-4-5")).length)
        setJU45(UsersDataStore.filter(user => user.calendar.includes("JU-4-5")).length)
        setVI45(UsersDataStore.filter(user => user.calendar.includes("VI-4-5")).length)
        setSA45(UsersDataStore.filter(user => user.calendar.includes("SA-4-5")).length)

        setLU56(UsersDataStore.filter(user => user.calendar.includes("LU-5-6")).length)
        setMA56(UsersDataStore.filter(user => user.calendar.includes("MA-5-6")).length)
        setMI56(UsersDataStore.filter(user => user.calendar.includes("MI-5-6")).length)
        setJU56(UsersDataStore.filter(user => user.calendar.includes("JU-5-6")).length)
        setVI56(UsersDataStore.filter(user => user.calendar.includes("VI-5-6")).length)
        setSA56(UsersDataStore.filter(user => user.calendar.includes("SA-5-6")).length)

        setLU67(UsersDataStore.filter(user => user.calendar.includes("LU-6-7")).length)
        setMA67(UsersDataStore.filter(user => user.calendar.includes("MA-6-7")).length)
        setMI67(UsersDataStore.filter(user => user.calendar.includes("MI-6-7")).length)
        setJU67(UsersDataStore.filter(user => user.calendar.includes("JU-6-7")).length)
        setVI67(UsersDataStore.filter(user => user.calendar.includes("VI-6-7")).length)
        setSA67(UsersDataStore.filter(user => user.calendar.includes("SA-6-7")).length)

        setLU78(UsersDataStore.filter(user => user.calendar.includes("LU-7-8")).length)
        setMA78(UsersDataStore.filter(user => user.calendar.includes("MA-7-8")).length)
        setMI78(UsersDataStore.filter(user => user.calendar.includes("MI-7-8")).length)
        setJU78(UsersDataStore.filter(user => user.calendar.includes("JU-7-8")).length)
        setVI78(UsersDataStore.filter(user => user.calendar.includes("VI-7-8")).length)
        setSA78(UsersDataStore.filter(user => user.calendar.includes("SA-7-8")).length)

        setLU89(UsersDataStore.filter(user => user.calendar.includes("LU-8-9")).length)
        setMA89(UsersDataStore.filter(user => user.calendar.includes("MA-8-9")).length)
        setMI89(UsersDataStore.filter(user => user.calendar.includes("MI-8-9")).length)
        setJU89(UsersDataStore.filter(user => user.calendar.includes("JU-8-9")).length)
        setVI89(UsersDataStore.filter(user => user.calendar.includes("VI-8-9")).length)
        setSA89(UsersDataStore.filter(user => user.calendar.includes("SA-8-9")).length)
    
    }, []);







    return (
        <div>
            <div className="overflow-x-auto max-w-screen-lg m-auto mt-5">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">

                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">LUNES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MARTES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MIÉRCOLES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">JUEVES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">VIERNES</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">SÁBADO</th>
                        </tr>
                    </thead>


                    <tbody className="divide-y divide-gray-200">

                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-9-10")}
                                className={`${LU910
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${LU910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-9-10")}
                                className={`${MA910
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${MA910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-9-10")}
                                className={`${MI910
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${MI910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-9-10")}
                                className={`${JU910
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${JU910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-9-10")}
                                className={`${VI910
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${VI910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-9-10")}
                                className={`${SA910
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`9-10 / ${SA910}`}
                            </td>
                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-10-11")}
                                className={`${LU1011
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${LU1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-10-11")}
                                className={`${MA1011
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${MA1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-10-11")}
                                className={`${MI1011
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${MI1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-10-11")}
                                className={`${JU1011
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${JU1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-10-11")}
                                className={`${VI1011
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${VI1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-10-11")}
                                className={`${SA1011
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`10-11 / ${SA1011}`}

                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-11-12")}
                                className={`${LU1112
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${LU1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-11-12")}
                                className={`${MA1112
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${MA1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-11-12")}
                                className={`${MI1112
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${MI1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-11-12")}
                                className={`${JU1112
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${JU1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-11-12")}
                                className={`${VI1112
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${VI1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-11-12")}
                                className={`${SA1112
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`11-12 / ${SA1112}`}

                            </td>

                        </tr>

                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-12-1")}
                                className={`${LU121
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${LU121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-12-1")}
                                className={`${MA121
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${MA121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-12-1")}
                                className={`${MI121
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${MI121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-12-1")}
                                className={`${JU121
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${JU121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-12-1")}
                                className={`${VI121
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${VI121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-12-1")}
                                className={`${SA121
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`12-1 / ${SA121}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-1-2")}
                                className={`${LU12
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${LU12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-1-2")}
                                className={`${MA12
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${MA12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-1-2")}
                                className={`${MI12
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${MI12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-1-2")}
                                className={`${JU12
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${JU12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-1-2")}
                                className={`${VI12
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${VI12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-1-2")}
                                className={`${SA12
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`1-2 / ${SA12}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-2-3")}
                                className={`${LU23
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${LU23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-2-3")}
                                className={`${MA23
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${MA23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-2-3")}
                                className={`${MI23
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${MI23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-2-3")}
                                className={`${JU23
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${JU23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-2-3")}
                                className={`${VI23
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${VI23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-2-3")}
                                className={`${SA23
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`2-3 / ${SA23}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-3-4")}
                                className={`${LU34
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${LU34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-3-4")}
                                className={`${MA34
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${MA34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-3-4")}
                                className={`${MI34
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${MI34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-3-4")}
                                className={`${JU34
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${JU34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-3-4")}
                                className={`${VI34
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${VI34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-3-4")}
                                className={`${SA34
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`3-4 / ${SA34}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-4-5")}
                                className={`${LU45
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${LU45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-4-5")}
                                className={`${MA45
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${MA45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-4-5")}
                                className={`${MI45
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${MI45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-4-5")}
                                className={`${JU45
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${JU45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-4-5")}
                                className={`${VI45
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${VI45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-4-5")}
                                className={`${SA45
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`4-5 / ${SA45}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-5-6")}
                                className={`${LU56
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${LU56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-5-6")}
                                className={`${MA56
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${MA56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-5-6")}
                                className={`${MI56
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${MI56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-5-6")}
                                className={`${JU56
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${JU56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-5-6")}
                                className={`${VI56
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${VI56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-5-6")}
                                className={`${SA56
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`5-6 / ${SA56}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-6-7")}
                                className={`${LU67
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${LU67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-6-7")}
                                className={`${MA67
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${MA67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-6-7")}
                                className={`${MI67
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${MI67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-6-7")}
                                className={`${JU67
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${JU67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-6-7")}
                                className={`${VI67
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${VI67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-6-7")}
                                className={`${SA67
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`6-7 / ${SA67}`}
                            </td>

                        </tr>

                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-7-8")}
                                className={`${LU78
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${LU78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-7-8")}
                                className={`${MA78
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${MA78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-7-8")}
                                className={`${MI78
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${MI78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-7-8")}
                                className={`${JU78
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${JU78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-7-8")}
                                className={`${VI78
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${VI78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-7-8")}
                                className={`${SA78
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`7-8 / ${SA78}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-8-9")}
                                className={`${LU89
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${LU89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-8-9")}
                                className={`${MA89
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${MA89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-8-9")}
                                className={`${MI89
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${MI89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-8-9")}
                                className={`${JU89
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${JU89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-8-9")}
                                className={`${VI89
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                    }`}
                            >
                                {`8-9 / ${VI89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-8-9")}
                                className={`${SA89
                                        ? "bg-green-400 text-white cursor-pointer "
                                        : "whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
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