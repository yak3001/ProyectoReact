import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


const estilos = {
    background: 'linear-gradient(to bottom, #ffd202 0%, #010101 50%, #ace4d7 100%)',
    paddingTop: 20,
    paddingBottom: 20,
    color: 'white',
}
const NavBar = () => {
    return (
        <div className="App" style={estilos} >
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MentorMenta Studio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#basico">Plan Básico</Nav.Link>
                            <Nav.Link href="#intermedio">Plan Intermedio</Nav.Link>
                            <Nav.Link href="#avanzado">Plan Avanzado</Nav.Link>
                            <Nav.Link href="#premium">Plan Premium</Nav.Link>
                            <Nav.Link href="#imagen">Imagen</Nav.Link>
                            <Nav.Link href="#contenido">Contenido</Nav.Link>
                            <Nav.Link href="#web">Web</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar