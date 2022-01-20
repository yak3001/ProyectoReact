import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget.jsx';
import logo from '../media/logo.png';

const estilos = {
    background: 'linear-gradient(to bottom, #ffd202 0%, #010101 50%, #ace4d7 100%)',
    paddingTop: 20,
    paddingBottom: 20,
    color: 'white',
}
const NavBar = () => {
    return (
        <header className="App" style={estilos} >
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <img src={logo} alt='MentorMenta Studio' />
                    <Navbar.Brand href="#home">MentorMenta Studio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#planes">Paquetes integrales</Nav.Link>
                            <Nav.Link href="#servicios">Servicios a tu medida</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#carrito">
                                <CartWidget />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar