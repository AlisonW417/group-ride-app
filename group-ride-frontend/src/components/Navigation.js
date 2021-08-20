import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logout from './Logout';

const Navigation = () => {
    return (
        <Container>
            <Navbar>
                <Container>
                    <Navbar.Brand>Group Ride App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/signup">Sign up</Nav.Link>
                        <Nav.Link href="/login">Log in</Nav.Link>
                    </Nav>
                    <Logout />
                </Container>
            </Navbar>    
        </Container>
    )
}

export default Navigation
