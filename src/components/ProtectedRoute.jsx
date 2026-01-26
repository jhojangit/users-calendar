import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    // Estado para almacenar si el usuario está autenticado
    const [isAuthenticated, setAuth] = useState(undefined);

    useEffect(() => {
        // Obtiene los valores de autenticación desde sessionStorage
        const authWrite = sessionStorage.getItem('authWrite');
        const authRead = sessionStorage.getItem('authRead');

        // Verifica si el usuario tiene permisos de escritura o lectura
        if (authWrite) {
            setAuth("authWrite");
        } else if (authRead) {
            setAuth("authRead");
        } else {
            setAuth(false);
        }
    }, []);

    // Mientras el estado de autenticación se carga, no renderiza nada (puede mostrar un spinner aquí si se desea)
    if (isAuthenticated === undefined) {
        return (
            <div className="bg-slate-900  flex flex-col justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    // Si el usuario está autenticado, renderiza los componentes hijos (children)
    // Si no, redirige al usuario a la página principal ("/")
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;