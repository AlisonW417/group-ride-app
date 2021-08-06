import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Signup = () => {
    return (
        <Container>
            <div>
                <h2>Sign up for Group Ride to start logging your rides and interacting with other users</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Create a username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default Signup
