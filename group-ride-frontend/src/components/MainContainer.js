import React from 'react';
import { Container } from 'react-bootstrap';

const MainContainer = ({ currentUser }) => {
    return (
        <Container>
            <div>
                { currentUser ? <h1>Welcome to the Group Ride App, {currentUser.attributes.username} </h1> : <h1> Please Log in </h1>}  </div>
        </Container>
    )
}

export default MainContainer
