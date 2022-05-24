import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './components/layouts/Layout';

function App() {
  return (
    <div>

    {/*Necesitamos poder acceder a los hooks del react router dom desde el AuthProvider, en el caso de querer acceder a una ruta privada (ingresar la URL en el navegador
    directamente sin estar en la página) sin estar logueado, te redirige a la página de Login. Por lo tanto, al poder loguearte el usuario espera poder ingresar
    a la ruta que había ingresado, para ello necesitamos utilizar el hook de useLocation desde el componente PrivateRoute el cual traerá la ruta y podremos setearle el estado
    con la ruta que se ingresó inicialmente. Entonces, ya que desde el login debemos redireccionar a una página anterior, para mantener el estado del usuario (al loguearse se setea)
    debemos utilizar el hook de useHistory de react-router y para eso nuestro Provider debe estar dentro del Router. 
    Para esto retiramos el Router del AppRouter y lo colocamos por fuera del Provider, para que ambos queden como hijos y puedan compartir la información. */}

      {/*El AuthProvider es un componente que se utiliza para retornar un contexto a sus hijos (información), es decir un valor global para que pueda ser consumido.*/}
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter  />
          </Layout>
        </AuthProvider>
      </Router>
      
    </div>
  );
}

export default App;
