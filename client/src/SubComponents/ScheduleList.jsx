import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Delete, Edit } from '@material-ui/icons';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Tooltip,
  Button,
} from '@material-ui/core';

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
    margin: 5,
  },
  listItem: {
    width: '130px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginLeft: '15px',
    marginRight: '15px',
  },
}));

const ScheduleList = (props) => {
  const classes = useStyles();
  const { item, icon, listItem } = classes;
  const { data } = props;
  return (
    <Fragment>
      {data.map((work, index) => {
        const {
          locationInput,
          taskInput,
          descriptionInput,
        } = work;
        return (
          <Fragment key={String(index)}>
            <Tooltip title={descriptionInput || 'No Description'}>
              <ListItem
                className={item}
              >
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
                  <Tooltip title="Edit">
                    <Button>
                      <Edit />
                    </Button>
                  </Tooltip>
                </ListItemIcon>
                <ListItemIcon className={icon}>
                  <Tooltip title="Delete">
                    <Button>
                      <Delete />
                    </Button>
                  </Tooltip>
                </ListItemIcon>
              </ListItem>
            </Tooltip>
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
