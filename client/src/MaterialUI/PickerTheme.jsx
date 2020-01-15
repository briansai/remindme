import { makeStyles } from '@material-ui/core/styles';

const pickerStyles = makeStyles(() => ({
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
}));

export default pickerStyles;
