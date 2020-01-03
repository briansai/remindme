import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="main">
        <NavBar />
      </div>
    );
  }
}
