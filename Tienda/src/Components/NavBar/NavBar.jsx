import CartWidget from "../CartWidget/CartWidget"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBell} from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
  return (
 <>
    <Navbar bg="primary" variant="dark">
    <Container>
    <FontAwesomeIcon icon={faBell}/>
      <Navbar.Brand href="#home">La Tienda</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#PC">PC</Nav.Link>
        <Nav.Link href="#IPHONE">IPHONE</Nav.Link>
        <Nav.Link href="#TABLET">TABLET</Nav.Link>
        
      </Nav>
      <Nav>
      <CartWidget />
          </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default NavBar
