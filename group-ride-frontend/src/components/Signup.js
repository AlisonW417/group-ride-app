import React from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/user';

const Signup = ( { signupFormData, updateSignupForm, signup, history }) => {
    const handleOnChange = (event) => {
        const newFormData = {
            ...signupFormData,
            [event.target.name]: event.target.value
        }
        updateSignupForm(newFormData)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        signup(signupFormData, history)
    }

    return (
        <Container>
            <div>
                <h2>Sign up for Group Ride to start logging your rides and interacting with other users</h2>
                <Form onSubmit={ handleOnSubmit }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value= { signupFormData.email } onChange={ handleOnChange } />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Create a username" name="username" value= { signupFormData.username } onChange={ handleOnChange } />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value= { signupFormData.password } onChange={ handleOnChange } />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
