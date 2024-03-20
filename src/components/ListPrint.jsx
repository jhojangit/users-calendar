import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';



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

    const Export = ({ onExport }) => <h2 onClick={e => onExport(e.target.value)}>Export</h2>;

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






    return (
        <section className='w-full m-auto h-screen flex flex-col pt-10 items-center'>

            <h1  className='font-bold text-lg'>
                Universidad Antonio Nariño
            </h1>




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