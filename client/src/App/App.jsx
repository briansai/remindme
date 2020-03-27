import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from '../MainComponents/NavBar';
import Schedule from '../MainComponents/Schedule';
import User from '../MainComponents/User';
import { register } from '../../actions/actions';

const App = () => {
  const [signedIn, signIn] = useState(false);
  const dispatch = useDispatch();
  // Fields needs to be in parameter to be checked with future database
  const handleSignIn = (fields) => {
    dispatch(register(fields));
    signIn(true);
  };

  return (
    <Fragment>
      <NavBar />
      {
        signedIn ? (
          <Schedule handleSignIn={handleSignIn} />
        ) : (
          <User handleSignIn={handleSignIn} />
        )
      }
    </Fragment>
  );
};

export default App;
