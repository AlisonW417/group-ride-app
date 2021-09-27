import React from 'react';
import { connect } from 'react-redux';
import { updateRideForm } from '../actions/rideForm';
import { createRide } from '../actions/ride';
import { Container, Form, Button } from 'react-bootstrap';

const RideForm = ( { rideFormData, updateRideForm, createRide, history, userId }) => {
    const handleOnChange = event => {
        const rideData = {
            ...rideFormData,
            [event.target.name]: event.target.value
        }
        updateRideForm(rideData)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        createRide({
            ...rideFormData,
            userId
        }, history)

    }


    return (
        <Container>
            <div>
                <h2>Enter details for your upcoming ride!</h2>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Ride Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your ride's name" name="name" value={rideFormData.name} onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Starting Location</Form.Label>
                        <Form.Control type="text" placeholder="Start location" name="startingLocation" value={rideFormData.startingLocation} onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Starting Time</Form.Label>
                        <Form.Control type="time" placeholder="Start time" name="startingTime" value={rideFormData.startingTime} onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Ride</Form.Label>
                        <Form.Control type="date" placeholder="Date" name="date" value={rideFormData.date} onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Form.Control as="select" placeholder="Level" name="level" type="select" value={rideFormData.level} onChange={handleOnChange}>
                            <option>Select a Ride Level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Distance</Form.Label>
                        <Form.Control type="text" placeholder="Distance (in miles)" name="distance" value={rideFormData.distance} onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="textarea" placeholder="Enter a ride description" name="description" value={rideFormData.description} onChange={handleOnChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create Ride
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        rideFormData: state.rideForm,
        userId
    }
}

export default connect(mapStateToProps, { updateRideForm, createRide })(RideForm)
