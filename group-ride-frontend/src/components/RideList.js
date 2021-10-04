import React from 'react';
import RideCard from './RideCard';
import { Container, CardDeck } from 'react-bootstrap';

const RideList = ({rides}) => {
    const rideCards = rides.map(ride => <RideCard ride={ride} key={ride.id} /> )
    return (
        <Container>
            <h1>All the Rides</h1>
            <CardDeck>
                { rideCards.length > 0 ? rideCards : null }
            </CardDeck>
        </Container>
    )
}

export default RideList
