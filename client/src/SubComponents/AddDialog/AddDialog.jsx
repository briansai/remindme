import React, { Fragment, useReducer } from 'react';
import PropTypes from 'prop-types';
import 'moment';
import MomentUtils from '@date-io/moment';
import {
  Dialog, DialogContent, DialogActions, Button, TextField, Grid,
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from '../DatePicker/DatePicker';
import TimePicker from '../TimePicker/TimePicker';

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
      '&.Mui-focused fieldset': {
        borderColor: '#4a148c',
      },
    },
  },
  dialog: {
    width: 500,
    margin: 20,
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
}));


const AddDialog = (props) => {
  const classes = useStyles();
  const {
    root, dialog, task, description, dialogActions, saveButton, location,
  } = classes;
  const {
    addClicked, iconClick, startDate, changeStartDate, endDate, changeEndDate,
  } = props;
  const inputText = {
    taskInput: '',
    locationInput: '',
    descriptionInput: '',
  };
  const [input, setInput] = useReducer((state, newState) => (
    { ...state, ...newState }
  ), inputText);
  const { taskInput, locationInput, descriptionInput } = input;
  const startDateInfo = {
    date: startDate,
    changeDate: changeStartDate,
    label: 'Start Date',
    minDate: new Date(),
  };
  const endDateInfo = {
    date: endDate,
    changeDate: changeEndDate,
    label: 'End Date',
    minDate: startDate,
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ [name]: value });
  };
  return (
    <Fragment>
      <Dialog
        open={addClicked}
        onClose={() => iconClick(false)}
        className={root}
      >
        <DialogContent className={dialog}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  className={task}
                  name="taskInput"
                  onChange={handleInputChange}
                  label="Add Task"
                  value={taskInput}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <DatePicker
                  dateInfo={startDateInfo}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TimePicker
                  dateInfo={startDateInfo}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TimePicker
                  dateInfo={endDateInfo}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <DatePicker
                  dateInfo={endDateInfo}
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
            <Button onClick={() => iconClick(false)}>
              Cancel
            </Button>
            <Button className={saveButton}>
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
  iconClick: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  changeStartDate: PropTypes.func.isRequired,
  changeEndDate: PropTypes.func.isRequired,
};

export default AddDialog;
