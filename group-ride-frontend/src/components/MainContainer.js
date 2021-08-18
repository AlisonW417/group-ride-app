import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from './Signup';
import Login from './Login';

const MainContainer = () => {
    return (
        <Container>
            <div>
                <h1>Welcome to the Group Ride App</h1>
                <Signup />
                <Login />
            </div>
        </Container>
    )
}

export default MainContainer
