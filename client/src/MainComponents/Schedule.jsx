import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Fab, List, Typography, ListSubheader,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { MuiPickersUtilsProvider, Calendar } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import AddDialog from '../SubComponents/AddDialog';
import ScheduleList from '../SubComponents/ScheduleList';
import todo from '../../actions/todo';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: '0 auto',
    maxWidth: 500,
    height: 500,
    border: '2px solid #e0e0e0',
    borderRadius: 12,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  header: {
    height: 80,
    backgroundColor: '#bdbdbd',
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  fab: {
    backgroundColor: '#4a148c',
    top: '20%',
  },
  addIcon: {
    color: '#bdbdbd',
  },
  dateFormat: {
    float: 'right',
    margin: '5%',
  },
  expand: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  lowCalendar: {
    marginTop: '0px',
    border: '1px solid black',
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: '10px',
    position: 'fixed',
  },
}));

const Schedule = () => {
  const [addClicked, handleAddModal] = useState(false);
  const [date, changeDate] = useState(new Date());
  const [collapseOpen, collapse] = useState(false);
  const displayDate = moment(date).format('MMMM D, YYYY');
  const scheduleDate = moment(date);
  const classes = useStyles();
  const {
    root, header, fab, addIcon, dateFormat, expand, lowCalendar,
  } = classes;
  const listItem = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const submitSchedule = (taskInput, locationInput, descriptionInput) => {
    const params = {
      taskInput,
      locationInput,
      descriptionInput: descriptionInput || 'No Description',
    };

    dispatch(todo(params));
  };
  const handleCollapse = () => {
    collapse(!collapseOpen);
  };

  return (
    <Fragment>
      <List className={root}>
        <ListSubheader className={header}>
          <Fab
            size="medium"
            aria-label="add"
            display="inline"
            className={fab}
          >
            <AddIcon
              className={addIcon}
              onClick={() => handleAddModal(true)}
            />
          </Fab>
          <Typography
            display="inline"
            variant="h5"
            className={dateFormat}
          >
            {displayDate}
            {collapseOpen ? (
              <Fragment>
                <ExpandMore className={expand} onClick={handleCollapse} />
                <div className={lowCalendar}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Calendar
                      date={scheduleDate}
                      onChange={(e) => {
                        changeDate(e._d);
                        handleCollapse();
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </Fragment>
            ) : (
              <ExpandLess className={expand} onClick={handleCollapse} />
            )}
          </Typography>
        </ListSubheader>
        {listItem && listItem.length ? (
          <ScheduleList data={listItem} />
        ) : (
          <Typography style={{ height: 'auto', textAlign: 'center' }}>
            You have nothing scheduled for today
          </Typography>
        )}
      </List>
      <AddDialog
        addClicked={addClicked}
        handleAddModal={handleAddModal}
        submitSchedule={submitSchedule}
      />
    </Fragment>
  );
};

export default Schedule;
