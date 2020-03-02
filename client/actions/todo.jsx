import axios from 'axios';

const todo = (value) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_TOD' });
    axios.post('/postSchedule', value)
      .then((res) => {
        dispatch({ type: 'ADD_TODO_SUCCESS', payload: res })
      })
      .catch((err) => {
        dispatch({ type: 'ADD_TODO_FAILURE', payload: err })
      });
  }
};

export default todo;