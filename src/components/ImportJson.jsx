import useUserStore from '../store/usesrStore';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';


const ImportJson = () => {

    const {setMenuCourse, setMenuSede} = useUserStore()
    const navigate = useNavigate()

    // Función para desencriptar el contenido del archivo
    const desencriptarContenido = (contenido, claveSecreta) => {
        const bytes = CryptoJS.AES.decrypt(contenido, claveSecreta);
        const textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
        if (!textoDesencriptado) throw new Error('Desencriptado vacío: clave incorrecta o archivo corrupto');
        return textoDesencriptado;
    };

    const handleImportJson = async (event) => {
        const archivo = event.target.files[0];
        if (!archivo) return;

        try {
            const contenido = await archivo.text();

            // Desencriptar el contenido del archivo JSON
            const claveSecreta = import.meta.env.VITE_PASSWORDENCRIPT;

            if (!claveSecreta) {
                alert('Falta VITE_PASSWORDENCRIPT. Contacta al administrador.');
                return;
            }

            const contenidoDesencriptado = desencriptarContenido(contenido, claveSecreta);
            // Almacena la data desencriptada
            const objetoJSON = JSON.parse(contenidoDesencriptado);
            
            // Iterar sobre todas las claves en el objeto importado
            for (const key in objetoJSON) {
                if (objetoJSON.hasOwnProperty(key)) {
                    const newData = objetoJSON[key];

                    if (localStorage.getItem(key)) {  
                        const currentLocalStorage = JSON.parse(localStorage.getItem(key)); 

                        // Combinar los datos actuales y los importados
                        const combinedData = [...newData, ...currentLocalStorage];

                        // Filtrar duplicados basados en `idNumber`
                        let uniqueUsers = {};
                        combinedData.forEach(user => {
                            uniqueUsers[user.idNumber] = user; 
                        });
                        const uniqueArray = Object.values(uniqueUsers);
                        
                        localStorage.setItem(key, JSON.stringify(uniqueArray)); 
                        setMenuCourse(true);
                        setMenuSede(true);
                    } else { 
                        localStorage.setItem(key, JSON.stringify(newData)); 
                        setMenuCourse(true);
                        setMenuSede(true);
                    }
                }
            }
                navigate("/main");

        } catch (error) {
            setMenuCourse(true);
            setMenuSede(true);
            console.error('Error al leer el archivo:', error);
            alert('Error al leer el archivo:', error);
        }
    };

    return (
        <div className='mt-5 flex flex-col text-center items-center p-2 bg-slate-600 mb-7'>
            <h1 className='text-slate-200 text-lg mb-4'>IMPORTAR ALUMNOS</h1>
            <label className='w-full max-w-xs'>
                <input
                    type="file" 
                    accept=".json" 
                    onChange={handleImportJson} 
                    className="w-full max-h-[40px] p-2 cursor-pointer border border-cyan-100 bg-cyan-100 text-slate-700 rounded-lg text-sm"
                />
            </label>
        </div>
    );
}

export default ImportJson;


