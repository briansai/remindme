import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Fab, List, ListItem, ListItemText, Divider, Typography, ListSubheader,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Cancel, Star } from '@material-ui/icons';
import moment from 'moment';
import AddDialog from './AddDialog/AddDialog';

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
  item: {
    margin: 10,
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

const Schedule = ({ schedule }) => {
  const [addClicked, iconClick] = useState(false);
  const classes = useStyles();
  const {
    root, header, item, fab, addIcon, dateFormat,
  } = classes;
  const date = moment().format('MMMM D, YYYY');
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
              onClick={() => iconClick(true)}
            />
          </Fab>
          <Typography
            display="inline"
            variant="h5"
            className={dateFormat}
          >
            {date}
          </Typography>
        </ListSubheader>
        {schedule && schedule.length ? (
          <div>
            {schedule.map((work, index) => {
              const { time, toDo } = work;
              return (
                <Fragment key={String(index)}>
                  <ListItem className={item}>
                    <ListItemText primary={`${time}: ${toDo}`} />
                    <Star />
                    <Cancel />
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              );
            })}
          </div>
        ) : (
          <Typography style={{ height: 'auto', textAlign: 'center' }}>
            You have nothing scheduled for today
          </Typography>
        )}
      </List>
      <AddDialog
        addClicked={addClicked}
        iconClick={iconClick}
      />
    </Fragment>
  );
};

Schedule.propTypes = {
  schedule: PropTypes.instanceOf(Array).isRequired,
};

export default Schedule;
