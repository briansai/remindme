import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogContent, DialogActions, Button, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  dialog: {
    width: 500,
    minHeight: 500,
  },
  task: {
    width: 'inherit',
  },
}));


const AddDialog = ({ addClicked, iconClick }) => {
  const classes = useStyles();
  const { dialog, task } = classes;

  return (
    <Fragment>
      <Dialog
        open={addClicked}
        onClose={() => iconClick(false)}
      >
        <DialogContent className={dialog}>
          <TextField
            className={task}
            label="Add Task"
          />
          <DialogActions>
            <Button onClick={() => iconClick(false)}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

AddDialog.propTypes = {
  addClicked: PropTypes.bool.isRequired,
  iconClick: PropTypes.func.isRequired,
};

export default AddDialog;
