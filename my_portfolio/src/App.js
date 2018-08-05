import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import Body from './components/Body/Body'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default App;
