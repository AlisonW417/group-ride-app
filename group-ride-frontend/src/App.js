import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Container>
          <div><h1>Welcome to the Group Ride App</h1></div>
        </Container>
      </Container>
    );
  } 
}

export default App;
