import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../actions/user';

const Logout = ({ logout, history }) => {
    const handleOnClick = () => {
        logout()
        history.push('/')
    }
    return (
        <Button onClick={handleOnClick}>Log out</Button>
    )
}

export default withRouter(connect(null, { logout } )(Logout));