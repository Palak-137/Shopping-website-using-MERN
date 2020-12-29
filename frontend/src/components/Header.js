 import {Navbar,Nav,NavDropdown,Form,FormControl,Button, Container} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

 const Header = () => {
    return (
        <Navbar bg="dark" varient='dark' expand="lg" collapseOnSelect>
         <Container>
             <LinkContainer to="/" style={{color: "white"}}>
               <Navbar.Brand>Proshop</Navbar.Brand>
             </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <LinkContainer to="/cart" style={{color: "white"}}>
            <Nav.Link ><i className="fas fa-shopping-cart"/>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login" style={{color: "white"}}>
            <Nav.Link  ><i className="fas fa-user"/>Sign In</Nav.Link>
         </LinkContainer> 
          </Nav>
        </Navbar.Collapse>
        </Container>   
      </Navbar>
    )
}
export default Header
