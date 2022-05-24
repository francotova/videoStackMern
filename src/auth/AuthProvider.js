import { createContext, useState } from "react";
import {useNavigate} from "react-router-dom"
//Aquí creamos una constante para exportar con el contexto del AuthProvider. Posteriormente usamos el hook de useContext para consumirlo.
export const AuthContext = createContext()

export default function AuthProvider({children}) {
    //Necesitamos saber el estado del usuario que transmitimos, por ejemplo si está logueando o cerrando sesión.
    //Para ello utilizaremos el hook de useState.
    const [user, setUser] = useState(null);

    //Necesitamos autenticar si el usuario está logueado y si éste tiene permisos (controlo los roles).
    const isLogin = () => !!user; //Con los !! estoy controlando que retorne según si existe o no el user (retura true si existe, false si no)
    const hasRole = (role) => user?.role === role;

    const navigate = useNavigate()

    
    const login = (userCredentials, fromLocation) => {
        //Utilizamos el hook de useHistory ya que al actualizar el usuario se renderizan las rutas que están hijas al contexto, por lo tanto
        //vuelve a chekear la autenticación. Para mantener la información y navegar entre las rutas utilizamos este hook.
        
        //console.log(history);
        setUser({id: 1, role: 'regular'});
        //De la forma que estamos enviando la ruta desde el PrivateRoute hacia el LoginPage (como un objeto), sabemos que fromLocation es un objeto y podemos enviárselo
        //así al push del history.
        if (fromLocation) {
            navigate(fromLocation)
        }
        
    }
    
    
    
    
    const logout = () => setUser(null);



    //const [user, setUser] = useState({id: 1, role: 'regular'});
    //Información que queremos transmitir, la cargamos al contextValue.
    //Agregamos las nuevas funciones al contexto para utilizarlas en PrivateRoute y PublicRoute.
    
    const contextValue = {
        user,
        isLogin,
        hasRole,
        login,
        logout
    };

    return(
        <>
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
        </>
    )
}