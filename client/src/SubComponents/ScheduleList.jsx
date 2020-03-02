import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Cancel, Star } from '@material-ui/icons';
import {
  ListItem, ListItemText, ListItemIcon, Divider, Grid,
} from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  item: {
    '& .MuiGrid-container': {
      width: '30%',
    },
  },
  icon: {
    '&:hover': {
      cursor: 'pointer',
    },
    minWidth: 45,
  },
  listItem: {
    width: '130px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginRight: '10px',
  },
}));

const formatTime = (date) => moment(date).format('LT');

const ScheduleList = (props) => {
  const classes = useStyles();
  const { item, icon, listItem } = classes;
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
              <Grid container direction="column">
                <ListItemText
                  secondary={`Start: ${startTime}`}
                />
                <ListItemText
                  secondary={`End: ${endTime}`}
                />
              </Grid>
              <ListItemText
                primary="Task"
                secondary={`${taskInput}`}
                className={listItem}
              />
              <ListItemText
                primary="Location"
                secondary={`${locationInput}`}
                className={listItem}
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
