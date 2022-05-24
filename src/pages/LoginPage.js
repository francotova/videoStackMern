import { useLocation } from 'react-router-dom';
import { useAuth } from '../auth/useAuth'


export default function LoginPage(){
    const {login} = useAuth();
    const userCredentials ={};
    const location = useLocation();
    console.log(location);

    //Cuando se quiera ingresar a una ruta privada directamente desde el navegador antes de ir a la página inicial nos envía automáticamente al LoginPage, esto por
    //la condición que se realiza en el componente PrivateRoute, éste utiliza una navegación hacia el componente LoginPage donde utiliza un objeto para enviar
    //la ruta inicial a este componente. Aquí la recibo y la envío a la función de login, para al realizar la autenticación nos envíe a la ruta inicial que
    //indicó el usuario.


    return (
        <div>
            <h1>
            LoginPage
            </h1>
            
            <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar sesión</button>
        </div>
    )
}