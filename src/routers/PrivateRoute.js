import {Navigate, useLocation} from 'react-router-dom'
import {useAuth} from '../auth/useAuth'
import constantRoutes from '../helpers/constantRoutes';



export default function PrivateRoute({hasRole:role, ...props}) {
    /*En esta función realizamos la autenticación para luego permitir la visualización de las rutas privadas.*/
    const location = useLocation();
    //const user = null;
    //const user = {id: 1, role:'regular'}
    console.log(location);
    const { hasRole, isLogin } = useAuth();
    //Controlamos que exista el rol indicado y además, que el user no sea nulo mediante el "?" de la función hasRole.
    if(role && !hasRole(role)) return <Navigate to={constantRoutes.home} />
    
    //Controlamos que esté logueado mediante la función que nos pasamos desde el contexto.
    if(!isLogin()) return <Navigate to={constantRoutes.login} state={{from: location}} />
    else return <>{props.children}</>
    

    
}