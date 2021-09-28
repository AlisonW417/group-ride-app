import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/user';
import { loadRides } from './actions/ride';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from './components/Login';
import RideForm from './components/RideForm';
import MainContainer from './components/MainContainer';
import { Route } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { currentUser } = this.props
    return (
      <Container>
        <Navigation currentUser={currentUser} />
        <Route exact path='/' render={() => {
          const user = currentUser
          return <MainContainer currentUser={user} />
        }
        }/>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/rides/new' component={RideForm} />
      </Container>
    );
  } 
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
    rides: state.rideList
  })
}

export default connect(mapStateToProps, { getCurrentUser, loadRides })(App);
