import React from 'react';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const RideCard = ({ride}) => {
    return (
        <div>

{/* name(pin):"Test Ride 1"
starting_location(pin):"Test Location"
starting_time(pin):"2000-01-01T16:40:00.000Z"
date(pin):"2021-09-28"
level(pin):"beginner"
distance(pin):"15 Miles"
description(pin):"Testing the description"
user_id(pin):7 */}
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
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card> 
        </div>
    )
}

export default RideCard
