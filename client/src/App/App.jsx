import React, { Fragment, useState } from 'react';
import NavBar from '../MainComponents/NavBar';
import Schedule from '../MainComponents/Schedule';
import User from '../MainComponents/User';

const App = () => {
  const [signedIn, signIn] = useState(false);
  // Fields needs to be in parameter to be checked with future database
  const handleSignIn = () => signIn(true);

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
