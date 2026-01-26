import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/uan_logo.png';

const Welcome = () => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();



    const handleLogin = () => {
        // Almacena las claves que están almacenadas como variables de entorno
        const correctPasswordWrite = import.meta.env.VITE_PASSWORD_WRITE;
        const correctPasswordRead = import.meta.env.VITE_PASSWORD_READ;
        


        // Evalua si hay coincidencias de contraseña. De lo contrario, lanza error.
        if (password === correctPasswordWrite) {
            sessionStorage.setItem('authWrite', 'true');
            navigate('/main'); 
        } else if (password === correctPasswordRead) {
            sessionStorage.setItem('authRead', 'true');
            navigate('/main'); 
        } else {
            console.log("nocas");
            
            setErrorMessage('Contraseña incorrecta');
        }
    };

    // Permite ingresar dandlo click al botón "Enter"
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen text-white bg-slate-900 pb-36">
            <div className="p-8 max-w-sm text-center text-slate-400 mt-36">
                <h1 className="text-3xl font-bold mb-4">Bienestar Universitario</h1>
                <img src={logo} alt="Logo UAN" className="mb-4" />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setErrorMessage(''); // Limpiar el mensaje de error al escribir
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Introduce la contraseña"
                    className="mb-4 p-2 rounded text-black"
                />
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Entrar
                </button>
                {errorMessage && (
                    <div className="mt-4 p-2 bg-red-600 text-white rounded">
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Welcome;
