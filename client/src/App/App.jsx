import React, { Component, Fragment } from 'react';
import NavBar from '../MainComponents/NavBar';
import Schedule from '../MainComponents/Schedule';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: [],
    };
  }

  render() {
    const { schedule, addModal } = this.state;
    return (
      <Fragment>
        <Fragment>
          <NavBar />
        </Fragment>
        <Fragment>
          <Schedule
            schedule={schedule}
            addModal={addModal}
          />
        </Fragment>
      </Fragment>
    );
  }
}
