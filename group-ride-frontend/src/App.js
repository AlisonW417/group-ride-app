import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/user';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from "./components/Login";
import MainContainer from './components/MainContainer';
import { Route } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Container>
        <Navigation />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <MainContainer />
      </Container>
    );
  } 
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
