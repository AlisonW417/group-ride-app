import React from 'react';
import { Container } from 'react-bootstrap';
import UserShow from './UserShow';

const MainContainer = ({ currentUser }) => {
    return (
        <Container>
            <div>
                { currentUser ?  <UserShow currentUser={currentUser} /> : <h1> Please Log in </h1>}  </div>
        </Container>
    )
}

export default MainContainer
