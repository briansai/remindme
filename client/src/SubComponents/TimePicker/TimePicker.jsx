import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardTimePicker } from '@material-ui/pickers';
import pickerStyles from '../../MaterialUI/PickerTheme';

const DatePicker = (props) => {
  const { dateInfo } = props;
  const {
    date,
    changeDate,
    label,
  } = dateInfo;
  const classes = pickerStyles();
  const { picker } = classes;
  const handleDateChange = (accepted) => changeDate(accepted._d);
  return (
    <KeyboardTimePicker
      margin="none"
      label={label}
      value={date}
      onChange={handleDateChange}
      initialFocusedDate={new Date()}
      className={picker}
      minutesStep={5}
      inputVariant="outlined"
      mask="__:__ _M"
      KeyboardButtonProps={{
        'aria-label': 'change time',
      }}
    />
  );
};

DatePicker.propTypes = {
  dateInfo: PropTypes.instanceOf(Object).isRequired,
};

export default DatePicker;
