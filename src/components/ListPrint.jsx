import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';



const ListPrint = ({ users }) => {


    function convertArrayOfObjectsToCSV(array) {
        let result;
    
        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(array[0]);
    
        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
    
        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;
    
                result += item[key];
                
                ctr++;
            });
            result += lineDelimiter;
        });
    
        return result;
    }

    function downloadCSV(array) {
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;
    
        const filename = 'export.csv';
    
        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }
    
        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }

    const Export = ({ onExport }) => <button 
            className='bg-slate-500 text-white p-2 rounded-lg hover:bg-slate-400 absolute top-0 right-5 text-xl'
            onClick={e => onExport(e.target.value)}>Exportar
        </button>;

	const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(users)} />, []);

    const columns = [
        {
            name: "Nombre",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Facultad",
            selector: row => row.facultad,
            sortable: true
        },
        {
            name: "Correo",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Tipo de documento",
            selector: row => row.tipoDocumento,
            sortable: true
        },
        {
            name: "Número de documento",
            selector: row => row.idNumber,
            sortable: true
        },
        {
            name: "Número de celular",
            selector: row => row.phoneNumber,
            sortable: true
        },
    ]


    const navigate = useNavigate()

    const handleReturn = () =>{
        navigate(-1)
    } 

    return (
        <section className='w-full m-auto h-screen flex flex-col items-center '>

            <div className='absolute top-10 z-10 left-5'>
                <button
                    onClick={handleReturn}
                    className='bg-blue-700 p-2 rounded-lg hover:bg-blue-600 text-white'>
                    Regresar
                </button>
            </div>


            <DataTable
                columns={columns}
                data={users}    
                pagination
                actions={actionsMemo}
            >
            </DataTable>
        </section>
    )
}

export default ListPrint