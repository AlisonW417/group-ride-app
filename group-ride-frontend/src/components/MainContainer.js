import React from 'react';
import { Container } from 'react-bootstrap';
import UserShow from './UserShow';

const MainContainer = ({ currentUser, rides }) => {
    return (
        <Container>
            <div>
                { currentUser ?  <UserShow currentUser={currentUser} rides={rides} /> : <h1> Please Log in </h1>}  
            </div>
        </Container>
    )
}

export default MainContainer
