import React, { Fragment, useState, useEffect } from 'react';
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
import { getTodo, todo, addAnotherTodo } from '../../actions/actions';

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
  noItem: {
    height: 'auto',
    textAlign: 'center',
    marginTop: '5%',
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

const formatDate = (date) => moment(date).format('MM-DD-YY');

const Schedule = () => {
  const classes = useStyles();
  const {
    root, header, fab, addIcon, dateFormat, expand, noItem, lowCalendar,
  } = classes;
  const [addClicked, handleAddModal] = useState(false);
  const [date, changeDate] = useState(new Date());
  const [collapseOpen, collapse] = useState(false);
  const listItem = useSelector((state) => {
    const { list } = state.getTodo;
    if (list) {
      for (let x = 0; x < list.length; x += 1) {
        const listDate = moment(new Date(list[x].date)).format('MM-DD-YY');
        const scheduledDate = formatDate(date);
        if (listDate === scheduledDate) {
          return {
            tasks: list[x],
            listLength: list[x].items.length,
          };
        }
      }
      return { listLength: 0 };
    }
    return undefined;
  });
  const dispatch = useDispatch();
  const displayDate = moment(date).format('MMMM D, YYYY');
  const scheduleDate = moment(date);

  const submitSchedule = (taskInput, locationInput, descriptionInput) => {
    let params = {
      _id: 1,
      list: [{
        date: formatDate(date),
        items: [{
          taskInput,
          locationInput,
          descriptionInput,
        }],
      }],
    };

    if (listItem && listItem.listLength >= 0) {
      params = {
        _id: 1,
        date: formatDate(date),
        items: {
          taskInput,
          locationInput,
          descriptionInput,
        },
      };
      return dispatch(addAnotherTodo(params));
    }
    return dispatch(todo(params));
  };
  const handleCollapse = () => {
    collapse(!collapseOpen);
  };

  useEffect(() => {
    dispatch(getTodo({ _id: 1 }));
  }, [addClicked]);

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
        {listItem && listItem.tasks ? (
          <ScheduleList data={listItem.tasks.items} />
        ) : (
          <Typography className={noItem}>
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
