import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Schedule from './Schedule/Schedule';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: [],
    };
  }

  render() {
    const { schedule } = this.state;
    return (
      <div>
        <div className="main">
          <NavBar />
        </div>
        <div>
          <Schedule schedule={schedule} />
        </div>
      </div>
    );
  }
}
