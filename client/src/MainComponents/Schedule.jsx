import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Fab, List, Typography, ListSubheader,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import AddDialog from '../SubComponents/AddDialog';
import ScheduleList from '../SubComponents/ScheduleList';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: '0 auto',
    maxWidth: 500,
    height: 500,
    border: '2px solid #e0e0e0',
    borderRadius: 12,
    backgroundColor: theme.palette.background.paper,
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
}));

const roundTime = (changeMinutes) => {
  const minutes = changeMinutes.getMinutes();
  const roundMinutes = Math.ceil(minutes / 5) * 5;
  return changeMinutes.setMinutes(roundMinutes);
};

const Schedule = () => {
  const [data, setData] = useState([]);
  const [addClicked, handleAddModal] = useState(false);
  const [start, changeStartDate] = useState(new Date());
  const [end, changeEndDate] = useState(new Date());
  const displayDate = moment(start).format('MMMM D, YYYY');
  const classes = useStyles();
  const {
    root, header, fab, addIcon, dateFormat,
  } = classes;
  const submitSchedule = (taskInput, locationInput, descriptionInput) => {
    const params = {
      start,
      end,
      taskInput,
      locationInput,
      descriptionInput,
    };

    axios.post('/postSchedule', params)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  roundTime(start);
  roundTime(end);
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
          </Typography>
        </ListSubheader>
        {data && data.length ? (
          <ScheduleList data={data} />
        ) : (
          <Typography style={{ height: 'auto', textAlign: 'center' }}>
            You have nothing scheduled for today
          </Typography>
        )}
      </List>
      <AddDialog
        addClicked={addClicked}
        handleAddModal={handleAddModal}
        start={start}
        changeStartDate={changeStartDate}
        end={end}
        changeEndDate={changeEndDate}
        submitSchedule={submitSchedule}
      />
    </Fragment>
  );
};

export default Schedule;
