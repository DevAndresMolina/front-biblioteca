import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoUnir from "../../images/logo_funir.png";

function NavBarComponent() {
  return (
    <Navbar bg="navbar bg-primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoUnir}
            width="140"
            height="30"
            className="d-inline-block align-top"
          />
          {""}
        </Navbar.Brand>
        <Navbar.Brand href="#home">BIBLIOTECA UNIR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>          
            <NavDropdown title="Usuarios" id="navbarScrollingDropdown" to="/usuarios">
              <NavDropdown.Item href="/usuarios">Ver Usuarios</NavDropdown.Item>
              <NavDropdown.Item href="/registrarusuarios">Registrar Usuario</NavDropdown.Item>              
            </NavDropdown>
            <NavDropdown title="Libros" id="navbarScrollingDropdown">              
            <NavDropdown.Item href="/libros">Ver Libros</NavDropdown.Item>                        
            <NavDropdown.Item href="/buscarLibro">Buscar Libro</NavDropdown.Item>
              <NavDropdown.Item href="/registrarLibro"> Registrar Libro</NavDropdown.Item>     
            </NavDropdown>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
