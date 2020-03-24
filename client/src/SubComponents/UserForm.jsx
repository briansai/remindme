import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';
import { PurpleButton } from '../MaterialUI/CustomThemes';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 400,
    minHeight: 300,
    maxHeight: 800,
    margin: '0 auto',
  },
  title: {
    margin: '3%',
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
  formStyle: {
    width: '75%',
    margin: '0 auto',
  },
  buttonContainer: {
    marginTop: '5%',
    marginLeft: '75%',
  },
  switchUser: {
    fontSize: '14px',
    marginTop: '15%',
    left: '13%',
    textAlign: 'center',
    borderTop: '1px solid lightgray',
    paddingTop: '4%',
  },
  transparent: {
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    overflow: 'hidden',
    outline: 'none',
  },
  userText: {
    '&:hover': {
      color: 'blue',
    },
    cursor: 'pointer',
  },
}));

const inputText = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const handleName = (name) => name.replace(/^\w/, (c) => c.toLowerCase()).replace(/\s/g, '');

const UserForm = (props) => {
  const {
    user,
    handleSignIn,
    handleUser,
    newUser,
  } = props;
  const classes = useStyles();
  const {
    text,
    contents,
    buttonText,
    bottomText,
  } = user;
  const {
    card,
    title,
    error,
    formStyle,
    buttonContainer,
    switchUser,
    userText,
    transparent,
  } = classes;
  const [
    {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    },
    setState,
  ] = useState(inputText);
  const [errorMessage, includeError] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const signIn = () => {
    if (!newUser) {
      if (email && password) {
        handleSignIn({ email, password });
      } else {
        includeError('* Please fill in all fields.');
      }
    } else if (newUser) {
      if (firstName && lastName && email && password && confirmPassword) {
        if (password !== confirmPassword) {
          includeError('* Password does not match Password Confirmation.');
        } else {
          handleSignIn({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
          });
        }
      } else {
        includeError('* Please fill in all fields.');
      }
    }
  };

  return (
    <Card className={card}>
      <Typography
        variant="h4"
        align="center"
        className={title}
      >
        {text}
      </Typography>
      <CardContent>
        <div className={error}>
          {errorMessage}
        </div>
        <form className={formStyle}>
          {contents.map((content) => {
            const contentName = handleName(content);
            return (
              <TextField
                label={content}
                variant="outlined"
                size="small"
                fullWidth
                margin="dense"
                onChange={handleInputChange}
                name={contentName}
              />
            );
          })}
          <div className={buttonContainer}>
            <PurpleButton
              text={buttonText}
              handleSignIn={signIn}
            />
          </div>
          <Typography className={switchUser}>
            <button
              type="button"
              className={transparent}
              onClick={(e) => handleUser(e)}
            >
              <div className={userText}>
                {bottomText}
              </div>
            </button>
          </Typography>
        </form>
      </CardContent>
    </Card>
  );
};

UserForm.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  newUser: PropTypes.bool.isRequired,
  handleUser: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};

export default UserForm;
