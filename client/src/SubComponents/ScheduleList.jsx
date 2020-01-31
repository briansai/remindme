import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Cancel, Star } from '@material-ui/icons';
import {
  ListItem, ListItemText, ListItemIcon, Divider,
} from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  item: {
    margin: 10,
  },
  icon: {
    minWidth: 45,
  },
}));

const formatTime = (date) => moment(date).format('LT');

const ScheduleList = (props) => {
  const classes = useStyles();
  const { item, icon } = classes;
  const { data } = props;
  return (
    <Fragment>
      {data.map((work, index) => {
        const {
          start, end, locationInput, taskInput,
        } = work;
        const startTime = formatTime(start);
        const endTime = formatTime(end);
        return (
          <Fragment key={String(index)}>
            <ListItem
              className={item}
            >
              <ListItemText
                primary="Start"
                secondary={`${startTime}`}
              />
              <ListItemText
                primary="End"
                secondary={`${endTime}`}
              />
              <ListItemText
                primary="Task"
                secondary={`${taskInput}`}
              />
              <ListItemText
                primary="Location"
                secondary={`${locationInput}`}
              />
              <ListItemIcon className={icon}>
                <Star />
              </ListItemIcon>
              <ListItemIcon className={icon}>
                <Cancel />
              </ListItemIcon>
            </ListItem>
            <Divider component="li" />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

ScheduleList.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ScheduleList;
