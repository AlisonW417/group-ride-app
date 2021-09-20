import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logout from './Logout';

const Navigation = ( { currentUser }) => {
    return (
        <Container>
            <Navbar>
                <Container>
                    <Navbar.Brand href='/'>Group Ride App</Navbar.Brand>
                    { currentUser ? 
                        <Nav className="me-auto">
                            <Nav.Link href="/rides/new">Create a Ride</Nav.Link>
                        </Nav>
                    : 
                        <Nav className="me-auto">
                            <Nav.Link href="/signup">Sign up</Nav.Link>
                            <Nav.Link href="/login">Log in</Nav.Link>
                        </Nav>
                    }
                    <Logout />
                </Container>
            </Navbar>    
        </Container>
    )
}

export default Navigation
