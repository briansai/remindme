import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  button: {
    color: '#fafafa',
    backgroundColor: '#4a148c',
  },
}));

/* eslint-disable import/prefer-default-export */
export const PurpleButton = (props) => {
  const classes = useStyles();
  const { button } = classes;
  const { text, handleSignIn } = props;

  return (
    <Button
      className={button}
      onClick={handleSignIn}
    >
      {text}
    </Button>
  );
};

PurpleButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};
