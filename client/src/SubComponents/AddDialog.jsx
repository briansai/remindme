import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import 'moment';
import MomentUtils from '@date-io/moment';
import {
  Dialog, DialogContent, DialogActions, Button, TextField, Grid,
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    '& label.Mui-focused': {
      color: '#4a148c',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#4a148c',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#bdbdbd',
      },
      '& .Mui-focused fieldset': {
        borderColor: '#4a148c',
      },
    },
    '& .MuiGrid-container': {
      width: '117%',
    },
  },
  dialog: {
    width: 350,
    paddingLeft: 35,
  },
  task: {
    width: '100%',
    marginBottom: 15,
  },
  description: {
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
  },
  dialogActions: {
    marginRight: 15,
  },
  saveButton: {
    color: '#fafafa',
    backgroundColor: '#4a148c',
  },
  location: {
    width: '100%',
    marginBottom: 10,
  },
  expand: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const inputText = {
  taskInput: '',
  locationInput: '',
  descriptionInput: '',
};

const AddDialog = (props) => {
  const classes = useStyles();
  const {
    root, dialog, task, description, dialogActions, saveButton, location,
  } = classes;
  const {
    addClicked, handleAddModal, submitSchedule,
  } = props;
  const [
    { taskInput, locationInput, descriptionInput },
    setState,
  ] = useState(inputText);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSaveClicked = () => {
    submitSchedule(taskInput, locationInput, descriptionInput);
    setState({ ...inputText });
    handleAddModal(false);
  };
  return (
    <Fragment>
      <Dialog
        open={addClicked}
        onClose={() => handleAddModal(false)}
        className={root}
      >
        <DialogContent className={dialog}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <TextField
                  className={task}
                  name="taskInput"
                  onChange={handleInputChange}
                  label="Add Task"
                  value={taskInput}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  variant="outlined"
                  className={location}
                  label="Add a location"
                  size="small"
                  name="locationInput"
                  value={locationInput}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  multiline
                  variant="outlined"
                  label="Add a description"
                  className={description}
                  rows={5}
                  name="descriptionInput"
                  value={descriptionInput}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
          <DialogActions className={dialogActions}>
            <Button onClick={() => handleAddModal(false)}>
              Cancel
            </Button>
            <Button
              className={saveButton}
              onClick={handleSaveClicked}
            >
              Save
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

AddDialog.propTypes = {
  addClicked: PropTypes.bool.isRequired,
  handleAddModal: PropTypes.func.isRequired,
  submitSchedule: PropTypes.func.isRequired,
};

export default AddDialog;
