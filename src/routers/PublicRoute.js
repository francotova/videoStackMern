import {Navigate} from 'react-router-dom'
import {useAuth} from '../auth/useAuth'
import constantRoutes from '../helpers/constantRoutes';


export default function PublicRoute(props) {
    /*En esta función realizamos la autenticación para luego permitir la visualización de las rutas públicas. Ya que un user logueado no debería poder ingresar a Login o Register.*/

    
    //Necesitamos que el usuario se eleve hacia un punto alto de la aplicación, un contexto global, por lo tanto utilizaremos los Hooks (useAuth).
    const { isLogin } = useAuth();
    if(isLogin()) return <Navigate to={constantRoutes.projects} />
    else return <>{props.children}</>
    
    
    
}