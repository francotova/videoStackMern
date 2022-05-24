import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import constantRoutes from '../helpers/constantRoutes';
import { useAuth } from '../auth/useAuth'
//Utilizaremos componentes de bootstrap para darle estilo a nuestro dom. Contiene clase de css "navbar-expand" para dispositivos móviles.,
//En caso de querer establecer un tamaño en el cual modificarse, utilizamos la clase collapseOnSelect.
//Agregamos la clase expand (según como esté definido en el navbar-expand) y colocamos el tamaño que queremos establecer: lg, md, sm.

export default function Navigation(){

    const {logout} = useAuth();

    return(
        /*Por las recomendaciones de react-bootstrap, utilizamos los elementos que traemos dentro del Navbar: Brand para resaltar un titulo del menu , Toggle 
        es para dar diseño a menus de nagevacion, Collapse para definir los elementos del menu.
        Posteriormente, definimos dos Nav para ordenar los link dentro del menu:utilizamos la clase de Bootstrap "mr-auto" para colocar ese Nav a la izquierda.
        El NavDropdown nos sirve para mostrar una lista de links de redireccionamiento, en este caso lo haremos para el admin.*/
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
          <Navbar.Brand as={NavLink} to="/">
              Gestión de tareas
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                  {/*Utilizamos el atributo as del Nav.Link para que se renderice en un NavLink del router-dom, de esta forma no perderá el diseño. Ya que NavLink genera un <a></a> y eso
                  interfiere con el diseño de Bootstrap*/}
                <Nav.Link as={NavLink} to={constantRoutes.projects}>Projects</Nav.Link>
                <NavDropdown title="Admin">
                    <NavDropdown.Item as={NavLink} to={constantRoutes.admin.users}>Usuarios</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
              <Nav>
              <Nav.Link as={NavLink} to={constantRoutes.login}>Login</Nav.Link>
              <Nav.Link as={NavLink} to={constantRoutes.register}>Register</Nav.Link>
              <Nav.Link as={NavLink} to={constantRoutes.account}>MyAccount</Nav.Link>
              <Nav.Link to={constantRoutes.account} onClick={logout}>Cerrar Sesión</Nav.Link>
              </Nav>
              
                
              
          </Navbar.Collapse>
        </Navbar>
        
        /*<Form outline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>*/
    )
}