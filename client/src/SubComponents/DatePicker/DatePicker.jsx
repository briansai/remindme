import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';
import pickerStyles from '../../MaterialUI/PickerTheme';

const DatePicker = (props) => {
  const { dateInfo } = props;
  const {
    date,
    changeDate,
    label,
    minDate,
  } = dateInfo;
  const classes = pickerStyles();
  const { picker } = classes;
  const handleDateChange = (accepted) => changeDate(accepted._d);
  return (
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/DD/YYYY"
      margin="none"
      label={label}
      value={date}
      initialFocusedDate={new Date()}
      onChange={handleDateChange}
      autoOk
      minDate={minDate}
      className={picker}
      inputVariant="outlined"
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  );
};

DatePicker.propTypes = {
  dateInfo: PropTypes.instanceOf(Object).isRequired,
};

export default DatePicker;
