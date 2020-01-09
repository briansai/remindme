import React, { Fragment, useReducer } from 'react';
import PropTypes from 'prop-types';
import 'moment';
import MomentUtils from '@date-io/moment';
import {
  Dialog, DialogContent, DialogActions, Button, TextField, Grid,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker,
} from '@material-ui/pickers';
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
  picker: {
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 0,
    },
    '& .MuiOutlinedInput-input': {
      fontSize: '70%',
      paddingRight: 0,
    },
    '& .MuiInputAdornment-positionEnd': {
      marginLeft: 0,
    },
    '& .MuiSvgIcon-root': {
      fontSize: '70%',
    },
    marginBottom: 10,
  },
  location: {
    width: '100%',
    marginBottom: 10,
  },
}));


const AddDialog = (props) => {
  const {
    addClicked, iconClick, date, changeDate,
  } = props;
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: '',
    },
  );
  const handleDateChange = (selectedDate) => {
    changeDate(selectedDate);
  };
  const formatDate = date.format('YYYY-MM-DD');
  const classes = useStyles();
  const {
    root, dialog, task, description, dialogActions, saveButton, picker, location,
  } = classes;
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
                  name="task"
                  onChange={handleInputChange}
                  label="Add Task"
                  value={input.task}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/DD/YYYY"
                  margin="none"
                  label="Start Date"
                  value={formatDate}
                  onChange={handleDateChange}
                  autoOk
                  className={picker}
                  inputVariant="outlined"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <KeyboardTimePicker
                  margin="none"
                  label="Start Time"
                  value={formatDate}
                  onChange={handleDateChange}
                  className={picker}
                  inputVariant="outlined"
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <KeyboardTimePicker
                  margin="none"
                  label="End Time"
                  value={formatDate}
                  onChange={handleDateChange}
                  className={picker}
                  inputVariant="outlined"
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/DD/YYYY"
                  margin="none"
                  label="End Date"
                  value={formatDate}
                  onChange={handleDateChange}
                  autoOk
                  className={picker}
                  inputVariant="outlined"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  className={location}
                  label="Add a location"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  variant="outlined"
                  label="Add a description"
                  className={description}
                  rows={5}
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
  date: PropTypes.instanceOf(Object).isRequired,
  changeDate: PropTypes.func.isRequired,
};

export default AddDialog;
