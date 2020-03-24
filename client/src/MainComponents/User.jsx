import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../SubComponents/UserForm';

const User = (props) => {
  const { handleSignIn } = props;
  const [newUser, handleNewUser] = useState(true);
  const handleUser = (e) => {
    handleNewUser(!newUser);
    e.preventDefault();
  };
  const user = newUser ? ({
    text: 'Create New User',
    buttonText: 'Create',
    contents: ['First Name', 'Last Name', 'Email', 'Password', 'Confirm Password'],
    bottomText: 'Already a member? Sign In.',
  }) : ({
    text: 'Sign In',
    buttonText: 'Next',
    contents: ['Email', 'Password'],
    bottomText: 'Create New User',
  });

  return (
    <Fragment>
      <UserForm
        user={user}
        handleSignIn={handleSignIn}
        handleUser={handleUser}
        newUser={newUser}
      />
    </Fragment>
  );
};

User.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
};

export default User;
