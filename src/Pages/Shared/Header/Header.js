import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/Logo/logo-2.png'


const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    console.log(user);
    
    return (
        <div >
            <Navbar className='nav-container' collapseOnSelect expand="lg" sticky='top'  variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        
                        <img height={150} src={logo} alt="" />
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            
                            <NavDropdown title="Album" as={Link} to="/album"  id="collasible-nav-dropdown">
                                <NavDropdown.Item href="album#weddings">Wedding</NavDropdown.Item>
                                <NavDropdown.Item href="album#events">Events</NavDropdown.Item>
                                
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/checkout">CheckOut</Nav.Link>
                            <Nav.Link as={Link} to="/about">about</Nav.Link>
                            {
                                user ?
                                <Nav.Link onClick={handleLogOut} className='nav-container-img' as={Link} to='/login'>Logout   <img  src={user.photoURL} alt="" /></Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login">
                                    login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
