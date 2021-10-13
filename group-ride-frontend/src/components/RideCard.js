import React from 'react';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const RideCard = ({ride}) => {
    return (
        ride ?
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{ride.attributes.name}</Card.Title>
                <Card.Text>
                    {ride.attributes.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                Date: <ListGroupItem>{ride.attributes.date}</ListGroupItem>
                Starting Location: <ListGroupItem>{ride.attributes.starting_location}</ListGroupItem>
                Start Time: <ListGroupItem>{ride.attributes.starting_time}</ListGroupItem>
                Level: <ListGroupItem>{ride.attributes.level}</ListGroupItem>
                Distance: <ListGroupItem>{ride.attributes.distance}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Sign up!</Card.Link>
            </Card.Body>
        </Card> 
        </div>:
        null
    )
}

export default RideCard
