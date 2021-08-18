import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from "./components/Login";
import MainContainer from './components/MainContainer';
import { Route } from 'react-router-dom';

class App extends React.Component {
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

export default App;
