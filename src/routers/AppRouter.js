//Dentro de este archivo js tendremos las rutas de nuestra aplicación.
//Empezamos por crear la función del AppRouter.
import {Routes, Route} from 'react-router-dom';
import AccountPage from '../pages/AccountPage';
import UsersPage from '../pages/admin/UsersPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectsPage from '../pages/ProjectsPage';
import RegisterPage from '../pages/RegisterPage';
import ProjectPage from '../pages/ProjectPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import constantRoutes from '../helpers/constantRoutes';
import roles from '../helpers/roles';

//import Navigation from '../components/Navigation';
//import Layout from '../components/layouts/Layout';

export default function AppRouter(){
    return (
        //Dentro del AppRouter utilizaremos los módulos que importamos para generar los enrutamientos.
        //Con Switch(Routes) le permitiremos que elija entre las rutas que tenga dentro según la necesidad.
        
        
            
            <Routes>
                {/*Es necesario diferenciar las rutas privadas de las públicas, es decir, definir la autenticación luego para esto.
                En este caso crearemos un componente PrivateRoute, que devolverá justamente una Ruta y recibirá también los mismos atributos.
                Sería una forma de controlar el redireccionamiento.
                PD: EN ESTE CASO TUVIMOS QUE MODIFICAR LA SINTAXIS EN COMPARACIÓN AL VIDEO YA QUE POR LA V6 DE REACT ROUTER ES NECESARIO RENDERIZAR EL COMPONENTE.*/}

                    <Route exact path={constantRoutes.home} element={<><PublicRoute><HomePage/></PublicRoute></>} />
                    <Route exact path={constantRoutes.login} element={<><PublicRoute><LoginPage/></PublicRoute></>} />
                    <Route exact path={constantRoutes.register} element={<><PublicRoute><RegisterPage/></PublicRoute></>} />
                    <Route exact path={constantRoutes.account} element={<><PrivateRoute><AccountPage/></PrivateRoute></>} />
                    <Route exact path={constantRoutes.projects} element={<><PrivateRoute><ProjectsPage/></PrivateRoute></>} />
                    <Route exact path={constantRoutes.project()} element={<><PrivateRoute><ProjectPage/></PrivateRoute></>} />
                    {/*Creamos una propiedad para el componente PrivateRoute con el fin de condicionar si el usuario que intenta ingresar es administrador.*/}
                    <Route exact path={constantRoutes.admin.users} element={<><PrivateRoute hasRole={roles.admin}><UsersPage/></PrivateRoute></>} />
                    

                    <Route path="*" element={<NotFoundPage/>} />
            </Routes>    
            
        
    )
}