import React from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/user';

const Login = ( {updateLoginForm, loginFormData, login, history }) => {
    const handleOnChange = (event) => {
        const newFormData = {
            ...loginFormData,
            [event.target.name]: event.target.value
        }
        updateLoginForm(newFormData)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
        <Container>
            <div>
                <h2>Please Log in</h2>
                <Form onSubmit={ handleOnSubmit }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Create a username" name="username" value= { loginFormData.username } onChange={ handleOnChange } />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value= { loginFormData.password } onChange={ handleOnChange } />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)