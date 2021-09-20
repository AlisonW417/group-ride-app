import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RideForm = () => {
    return (
        <Container>
            <div>
                <h2>Enter details for your upcoming ride!</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Ride Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your ride's name" name="name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Starting Location</Form.Label>
                        <Form.Control type="text" placeholder="Start location" name="startingLocation" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Starting Time</Form.Label>
                        <Form.Control type="text" placeholder="Start time" name="startingTime" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Ride</Form.Label>
                        <Form.Control type="date" placeholder="Date" name="date" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select a Ride Level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Distance</Form.Label>
                        <Form.Control type="text" placeholder="Distance (in miles)" name="distance" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="textarea" placeholder="Enter a ride description" name="description" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create Ride
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default RideForm
