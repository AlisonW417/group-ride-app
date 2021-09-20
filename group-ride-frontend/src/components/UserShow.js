import React from 'react';
import { Container } from 'react-bootstrap';

const UserShow = ({ currentUser }) => {
    return (
        <Container>
            <div>
                <h1>Welcome to the Group Ride App, {currentUser.attributes.username} </h1>
            </div>
        </Container>
    )
}

export default UserShow