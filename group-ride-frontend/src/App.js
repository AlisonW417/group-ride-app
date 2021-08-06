import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import MainContainer from './components/MainContainer';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Navigation />
        <MainContainer />
      </Container>
    );
  } 
}

export default App;
