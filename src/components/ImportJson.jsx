import React from 'react'

const ImportJson = () => {

    const handleImportJson = async (event) => {
        const archivo = event.target.files[0]; // Obtener el primer archivo seleccionado
        if (!archivo) return;

        try {
            const contenido = await archivo.text(); // Leer el contenido del archivo como texto
            const objetoJSON = JSON.parse(contenido); // Convertir el texto JSON en un objeto JavaScript
                console.log(contenido);

            if(localStorage.getItem("users")){  // Valida si existe algo en localstorage

                const amountLocalStorage = JSON.parse(localStorage.getItem("users")) //Almacena los datos actuales del local storage

                const newObject = [...objetoJSON, ...amountLocalStorage] //Combina los datos actuales y los importados

                let usuariosUnicos = {}

                newObject.forEach(newObject => {
                    usuariosUnicos[newObject.idNumber] = newObject; //Envia usuarios únicos 
                });

                const nuevoArrayUsuariosUnicos = Object.values(usuariosUnicos);
                

                localStorage.clear()       // Borra el local storage
    
                localStorage.setItem("users", JSON.stringify(nuevoArrayUsuariosUnicos)) // pone los nuevos valores en localstorage
                
                location.reload(); // recarga la pag
                
            }else{ // si no existe nada en localstorage
                localStorage.setItem("users", JSON.stringify(objetoJSON)) // asigna los datos del json a localstorage
                location.reload();
            }

        
        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }
    };


    return (
        <div className='mt-5 flex flex-col text-center items-center'>
            <h1
                className='text-slate-200 text-lg'
                >
                IMPORTAR DATOS
            </h1>
            <input
                type="file" 
                accept=".json" 
                onChange={handleImportJson} 
                className="w-auto p-10 cursor-pointer group flex items-center justify-between gap-4 rounded-lg border border-cyan-100 bg-cyan-100 px-5 py-3 transition-colors hover:bg-slate-100 focus:outline-none focus:ring"
            />
        </div>
    )
}

export default ImportJson