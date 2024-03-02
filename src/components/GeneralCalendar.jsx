import { useNavigate } from 'react-router-dom'
import useUserStore from '../store/usesrStore'

const GeneralCalendar = () => {

    const navigate = useNavigate()


    const handleDataSelection = (e) => {

        navigate(`users/${e}`)

    }

    const { UsersDataStore } = useUserStore()


    const LU910 = UsersDataStore.filter(user => user.calendar.includes("LU-9-10")).length
    const MA910 = UsersDataStore.filter(user => user.calendar.includes("MA-9-10")).length
    const MI910 = UsersDataStore.filter(user => user.calendar.includes("MI-9-10")).length
    const JU910 = UsersDataStore.filter(user => user.calendar.includes("JU-9-10")).length
    const VI910 = UsersDataStore.filter(user => user.calendar.includes("VI-9-10")).length
    const SA910 = UsersDataStore.filter(user => user.calendar.includes("SA-9-10")).length

    const LU1011 = UsersDataStore.filter(user => user.calendar.includes("LU-10-11")).length
    const MA1011 = UsersDataStore.filter(user => user.calendar.includes("MA-10-11")).length
    const MI1011 = UsersDataStore.filter(user => user.calendar.includes("MI-10-11")).length
    const JU1011 = UsersDataStore.filter(user => user.calendar.includes("JU-10-11")).length
    const VI1011 = UsersDataStore.filter(user => user.calendar.includes("VI-10-11")).length
    const SA1011 = UsersDataStore.filter(user => user.calendar.includes("SA-10-11")).length

    const LU1112 = UsersDataStore.filter(user => user.calendar.includes("LU-11-12")).length
    const MA1112 = UsersDataStore.filter(user => user.calendar.includes("MA-11-12")).length
    const MI1112 = UsersDataStore.filter(user => user.calendar.includes("MI-11-12")).length
    const JU1112 = UsersDataStore.filter(user => user.calendar.includes("JU-11-12")).length
    const VI1112 = UsersDataStore.filter(user => user.calendar.includes("VI-11-12")).length
    const SA1112 = UsersDataStore.filter(user => user.calendar.includes("SA-11-12")).length

    const LU121 = UsersDataStore.filter(user => user.calendar.includes("LU-12-1")).length
    const MA121 = UsersDataStore.filter(user => user.calendar.includes("MA-12-1")).length
    const MI121 = UsersDataStore.filter(user => user.calendar.includes("MI-12-1")).length
    const JU121 = UsersDataStore.filter(user => user.calendar.includes("JU-12-1")).length
    const VI121 = UsersDataStore.filter(user => user.calendar.includes("VI-12-1")).length
    const SA121 = UsersDataStore.filter(user => user.calendar.includes("SA-12-1")).length

    const LU12 = UsersDataStore.filter(user => user.calendar.includes("LU-1-2")).length
    const MA12 = UsersDataStore.filter(user => user.calendar.includes("MA-1-2")).length
    const MI12 = UsersDataStore.filter(user => user.calendar.includes("MI-1-2")).length
    const JU12 = UsersDataStore.filter(user => user.calendar.includes("JU-1-2")).length
    const VI12 = UsersDataStore.filter(user => user.calendar.includes("VI-1-2")).length
    const SA12 = UsersDataStore.filter(user => user.calendar.includes("SA-1-2")).length

    const LU23 = UsersDataStore.filter(user => user.calendar.includes("LU-2-3")).length
    const MA23 = UsersDataStore.filter(user => user.calendar.includes("MA-2-3")).length
    const MI23 = UsersDataStore.filter(user => user.calendar.includes("MI-2-3")).length
    const JU23 = UsersDataStore.filter(user => user.calendar.includes("JU-2-3")).length
    const VI23 = UsersDataStore.filter(user => user.calendar.includes("VI-2-3")).length
    const SA23 = UsersDataStore.filter(user => user.calendar.includes("SA-2-3")).length

    const LU34 = UsersDataStore.filter(user => user.calendar.includes("LU-3-4")).length
    const MA34 = UsersDataStore.filter(user => user.calendar.includes("MA-3-4")).length
    const MI34 = UsersDataStore.filter(user => user.calendar.includes("MI-3-4")).length
    const JU34 = UsersDataStore.filter(user => user.calendar.includes("JU-3-4")).length
    const VI34 = UsersDataStore.filter(user => user.calendar.includes("VI-3-4")).length
    const SA34 = UsersDataStore.filter(user => user.calendar.includes("SA-3-4")).length

    const LU45 = UsersDataStore.filter(user => user.calendar.includes("LU-4-5")).length
    const MA45 = UsersDataStore.filter(user => user.calendar.includes("MA-4-5")).length
    const MI45 = UsersDataStore.filter(user => user.calendar.includes("MI-4-5")).length
    const JU45 = UsersDataStore.filter(user => user.calendar.includes("JU-4-5")).length
    const VI45 = UsersDataStore.filter(user => user.calendar.includes("VI-4-5")).length
    const SA45 = UsersDataStore.filter(user => user.calendar.includes("SA-4-5")).length

    const LU56 = UsersDataStore.filter(user => user.calendar.includes("LU-5-6")).length
    const MA56 = UsersDataStore.filter(user => user.calendar.includes("MA-5-6")).length
    const MI56 = UsersDataStore.filter(user => user.calendar.includes("MI-5-6")).length
    const JU56 = UsersDataStore.filter(user => user.calendar.includes("JU-5-6")).length
    const VI56 = UsersDataStore.filter(user => user.calendar.includes("VI-5-6")).length
    const SA56 = UsersDataStore.filter(user => user.calendar.includes("SA-5-6")).length

    const LU67 = UsersDataStore.filter(user => user.calendar.includes("LU-6-7")).length
    const MA67 = UsersDataStore.filter(user => user.calendar.includes("MA-6-7")).length
    const MI67 = UsersDataStore.filter(user => user.calendar.includes("MI-6-7")).length
    const JU67 = UsersDataStore.filter(user => user.calendar.includes("JU-6-7")).length
    const VI67 = UsersDataStore.filter(user => user.calendar.includes("VI-6-7")).length
    const SA67 = UsersDataStore.filter(user => user.calendar.includes("SA-6-7")).length

    const LU78 = UsersDataStore.filter(user => user.calendar.includes("LU-7-8")).length
    const MA78 = UsersDataStore.filter(user => user.calendar.includes("MA-7-8")).length
    const MI78 = UsersDataStore.filter(user => user.calendar.includes("MI-7-8")).length
    const JU78 = UsersDataStore.filter(user => user.calendar.includes("JU-7-8")).length
    const VI78 = UsersDataStore.filter(user => user.calendar.includes("VI-7-8")).length
    const SA78 = UsersDataStore.filter(user => user.calendar.includes("SA-7-8")).length

    const LU89 = UsersDataStore.filter(user => user.calendar.includes("LU-8-9")).length
    const MA89 = UsersDataStore.filter(user => user.calendar.includes("MA-8-9")).length
    const MI89 = UsersDataStore.filter(user => user.calendar.includes("MI-8-9")).length
    const JU89 = UsersDataStore.filter(user => user.calendar.includes("JU-8-9")).length
    const VI89 = UsersDataStore.filter(user => user.calendar.includes("VI-8-9")).length
    const SA89 = UsersDataStore.filter(user => user.calendar.includes("SA-8-9")).length

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
                                className={`${
                                    LU910.length >1
                                    ? "bg-green-300"
                                    : "bg-red-200 whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100"
                                }`}
                                >
                                {`9-10 / ${LU910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-9-10")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`9-10 / ${MA910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-9-10")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`9-10 / ${MI910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-9-10")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`9-10 / ${JU910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-9-10")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`9-10 / ${VI910}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-9-10")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`9-10 / ${SA910}`}
                            </td>
                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-10-11")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`10-11 / ${LU1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-10-11")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`10-11 / ${MA1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-10-11")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`10-11 / ${MI1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-10-11")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`10-11 / ${JU1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-10-11")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`10-11 / ${VI1011}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-10-11")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`10-11 / ${SA1011}`}

                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-11-12")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`11-12 / ${LU1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-11-12")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`11-12 / ${MA1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-11-12")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`11-12 / ${MI1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-11-12")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`11-12 / ${JU1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-11-12")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`11-12 / ${VI1112}`}

                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-11-12")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`11-12 / ${SA1112}`}

                            </td>

                        </tr>

                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-12-1")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`12-1 / ${LU121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-12-1")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`12-1 / ${MA121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-12-1")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`12-1 / ${MI121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-12-1")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`12-1 / ${JU121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-12-1")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`12-1 / ${VI121}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-12-1")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`12-1 / ${SA121}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-1-2")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`1-2 / ${LU12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-1-2")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`1-2 / ${MA12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-1-2")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`1-2 / ${MI12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-1-2")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`1-2 / ${JU12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-1-2")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`1-2 / ${VI12}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-1-2")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`1-2 / ${SA12}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-2-3")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`2-3 / ${LU23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-2-3")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`2-3 / ${MA23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-2-3")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`2-3 / ${MI23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-2-3")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`2-3 / ${JU23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-2-3")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`2-3 / ${VI23}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-2-3")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`2-3 / ${SA23}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-3-4")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`3-4 / ${LU34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-3-4")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`3-4 / ${MA34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-3-4")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`3-4 / ${MI34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-3-4")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`3-4 / ${JU34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-3-4")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`3-4 / ${VI34}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-3-4")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`3-4 / ${SA34}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-4-5")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`4-5 / ${LU45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-4-5")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`4-5 / ${MA45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-4-5")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`4-5 / ${MI45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-4-5")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`4-5 / ${JU45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-4-5")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`4-5 / ${VI45}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-4-5")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`4-5 / ${SA45}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-5-6")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`5-6 / ${LU56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-5-6")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`5-6 / ${MA56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-5-6")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`5-6 / ${MI56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-5-6")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`5-6 / ${JU56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-5-6")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`5-6 / ${VI56}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-5-6")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`5-6 / ${SA56}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-6-7")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`6-7 / ${LU67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-6-7")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`6-7 / ${MA67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-6-7")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`6-7 / ${MI67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-6-7")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`6-7 / ${JU67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-6-7")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`6-7 / ${VI67}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-6-7")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`6-7 / ${SA67}`}
                            </td>

                        </tr>

                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-7-8")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`7-8 / ${LU78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-7-8")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`7-8 / ${MA78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-7-8")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`7-8 / ${MI78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-7-8")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`7-8 / ${JU78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-7-8")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`7-8 / ${VI78}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-7-8")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`7-8 / ${SA78}`}
                            </td>

                        </tr>


                        <tr className="odd:bg-gray-50 text-center">
                            <td
                                onClick={() => handleDataSelection("LU-8-9")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`8-9 / ${LU89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MA-8-9")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`8-9 / ${MA89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("MI-8-9")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`8-9 / ${MI89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("JU-8-9")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`8-9 / ${JU89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("VI-8-9")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
                                {`8-9 / ${VI89}`}
                            </td>

                            <td
                                onClick={() => handleDataSelection("SA-8-9")}
                                className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-400 hover:text-slate-100 ">
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