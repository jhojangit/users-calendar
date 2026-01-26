import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CryptoJS from 'crypto-js';
import logo from '/logo_blue.png'
import useUserStore from '../store/usesrStore';

const ListPrint = ({ users, allUsers }) => {

    const authRead = sessionStorage.getItem("authRead")
    const authWrite = sessionStorage.getItem("authWrite")

    const [showExportOptions, setShowExportOptions] = useState(false);
    const handleExportCSV = () => {
        setShowExportOptions(!showExportOptions);
    };


    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);


    const { CurrentCourse } = useUserStore()
    // Formateo del nombre
    const CurrentCoursefix = CurrentCourse.replaceAll("_", " ")


    const date = new Date(); // Obtener la fecha actual
    const day = String(date.getDate()).padStart(2, '0'); // Obtener el día y asegurarse de que tenga dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtener el mes (recuerda que getMonth() devuelve un índice basado en 0, así que agregamos 1) y asegurarse de que tenga dos dígitos
    const year = date.getFullYear();




    // Convierte el array en string con formato csv
    function convertArrayOfObjectsToCSV(array, selectedFields) {
        let result;
        const columnDelimiter = ',';
        const lineDelimiter = '\n';
    
        // Usa solo los campos seleccionados
        const keys = selectedFields;
    
        result = '';
        result += keys.join(columnDelimiter); // Agrega los headers
        result += lineDelimiter;
    
        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;
                result += item[key] || ''; // Agrega el valor o vacío si no existe
                ctr++;
            });
            result += lineDelimiter;
        });
    
        return result;
    }
    
    // Descarga CSV
    function downloadCSV(array, name) {
        toastNotification();
    
        // Campos que se exportarán
        const selectedFields = [
            'name', 
            'curso', 
            'sede',
            'programa', 
            'semestre', 
            'email',
            'phoneNumber', 
            'tipoDocumento', 
            'idNumber', 
            'inscriptionDay',
            'calendar',
        ]; 
    
        let csv = convertArrayOfObjectsToCSV(array, selectedFields);
        if (csv == null) return;
    
        const filename = `${name.replaceAll("_", " ").replace("users", "")} ${day}/${month}/${year}`;
    
        const link = document.createElement('a');
        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }
    
        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }





    // Datos que se muestran en la tabla
    const columns = [
        { name: "Sede", selector: row => row.sede, sortable: true, wrap: true, reorder: true },
        { name: "Nombre", selector: row => row.name, sortable: true, wrap: true, reorder: true },
        { name: "Programa", selector: row => row.programa, sortable: true, wrap: true, reorder: true },
        { name: "Semestre", selector: row => row.semestre, sortable: true, wrap: true, reorder: true },
        { name: "Correo", selector: row => row.email, sortable: true, wrap: true, reorder: true },
        { name: "Tipo de documento", selector: row => row.tipoDocumento, sortable: true, wrap: true, reorder: true },
        { name: "Número de documento", selector: row => row.idNumber, sortable: true, wrap: true, reorder: true },
        { name: "Número de celular", selector: row => row.phoneNumber, sortable: true, wrap: true, reorder: true },
    ]

    const navigate = useNavigate()

    const handleReturn = () => {
        navigate(-1)
    }


    // Exportar JSON
    const exportJSON = () => {
        const exportData = {};

        // Recorrer todas las keys en localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            if (value !== null) {
                exportData[key] = JSON.parse(value); // Convertir JSON string a objeto/array
            }
        }

        // Combierte exportData en JSON
        const jsonString = JSON.stringify(exportData);

        // Almacena la contraseña de desencriptado y valida
        const passphrase = import.meta.env.VITE_PASSWORDENCRIPT;
        if (!passphrase) {
            toast.error('Falta VITE_PASSWORDENCRIPT. Contacta al administrador.');
            return;
        }

        // Encrípta el JSON usando la passphrase como string (compatible con decrypt)
        const encrypted = CryptoJS.AES.encrypt(jsonString, passphrase).toString();

        const blob = new Blob([encrypted], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        // Nombre de archivo seguro y con extensión
        a.download = `Bienestar_horarios_${day}-${month}-${year}.json`;
        document.body.appendChild(a);
        a.click();
        // Mantener el URL un momento antes de revocarlo para evitar cancelación prematura
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 500);

        // Notificar éxito
        toastNotification();
    };

    // Notificación emergente
    const toastNotification = () => {
        toast('Descargado en tu carpeta de DESCARGAS', {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    // Opciones de la tabla
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    
    return (
        <section className='w-full h-screen flex flex-col items-center justify-center z-0 p-0 m-0 gap-10'>
            <ToastContainer />
            <div className='flex w-full absolute top-10 z-10 px-5 mb-20 sm:mb-0'>
                <button
                    onClick={handleReturn}
                    className='bg-blue-700 p-2 rounded-lg hover:bg-blue-600 text-white'>
                    Regresar
                </button>

                {
                    authWrite && (
                        <>
                            <div className='flex-grow flex justify-center mx-4'>
                                <button
                                    className='bg-slate-500 p-2 rounded-lg hover:bg-slate-400 text-white'
                                    onClick={exportJSON}>
                                    Exportar datos
                                </button>
                            </div>

                            {/* Botón para mostrar opciones de exportación CSV */}
                            <div className="relative">
                                <button
                                    className='bg-slate-500 text-white p-2 rounded-lg hover:bg-slate-400'
                                    onClick={handleExportCSV}>
                                    Exportar CSV
                                </button>

                                {/* Opciones de exportación CSV */}
                                {showExportOptions && (
                                    <div className="absolute bg-white shadow-lg rounded-lg mt-2 p-2">
                                        <button
                                            className='block bg-blue-600 text-white w-full text-left p-2 rounded-lg hover:bg-blue-500'
                                            onClick={() => {
                                                downloadCSV(users, CurrentCourse);
                                                setShowExportOptions(false);
                                            }}>
                                            Exportar curso actual
                                        </button>
                                        <button
                                            className='block bg-blue-600 text-white w-full text-left p-2 rounded-lg hover:bg-blue-500 mt-2'
                                            onClick={() => {
                                                downloadCSV(allUsers, "Todos los cursos");
                                                setShowExportOptions(false);
                                            }}>
                                            Exportar todos los cursos
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )
                }
            </div>

            <div className='w-full flex-grow overflow-y-auto p-4' style={{ maxHeight: 'calc(100vh - 140px)' }}>
                <DataTable
                    title={
                        <div className="relative flex flex-col items-center text-center 
                            ml-[0px] sm:ml-[-20px] 
                            mt-8 
                            pb-10 
                            w-full">
                            <img src={logo} alt="Logo" className="h-[50px] mb-2.5" />
                            <strong className="italic text-blue-900">
                                {CurrentCoursefix.replace("users", "").toUpperCase()}
                            </strong>
                        </div>
                    }
                    columns={columns}
                    data={users}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    responsive
                />
            </div>
        </section>
    );
};


export default ListPrint
