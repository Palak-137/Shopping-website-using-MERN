 import {Navbar,Nav,NavDropdown,Form,FormControl,Button, Container} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import { useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userAction'

 const Header = () => {
   const dispatch = useDispatch();
   const userLogin = useSelector(state=>state.userLogin)
   const { userInfo } = userLogin

   const logoutHandler = () =>{
     console.log('logout')
     dispatch(logout())
   }

    return (
      <header>
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
        {
          userInfo ? (
            <NavDropdown style={{color: "whitesmoke"}} title={userInfo.name} id='userName'>
              <LinkContainer to='/profile'style={{color: 'black'}}>
                <NavDropdown.Item>profile</NavDropdown.Item>
              </LinkContainer>
           
            <NavDropdown.Item onClick={logoutHandler}>
               logout
            </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login" style={{color: "white"}}>
            <Nav.Link  ><i className="fas fa-user"/>Sign In</Nav.Link>
         </LinkContainer> 
          )
        }
       
          </Nav>
        </Navbar.Collapse>
        </Container>   
      </Navbar>
      </header>
    )
}
export default Header