import React from 'react';
import { Container, CardGroup } from 'react-bootstrap';
import RideCard from './RideCard';

const UserShow = ({ currentUser, rides }) => {
    const userRides = rides.filter(ride => ride.attributes.user_id === parseInt(currentUser.id)).map(ride => <RideCard ride={ride} key={ride.id}/> )
    return (
        <Container>
            <h1>Welcome to the Group Ride App, {currentUser.attributes.username} </h1>
            <CardGroup> { userRides.length > 0 ? userRides : null } </CardGroup>
        </Container>
    )
}

export default UserShow