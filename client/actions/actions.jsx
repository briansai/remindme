import axios from 'axios';

const getTodo = () => (
  (dispatch) => {
    axios.get('/getSchedule')
      .then((res) => {
        dispatch({ type: 'GET_TODO_SUCCESS', payload: res });
      })
      .catch((err) => {
        dispatch({ type: 'GET_TODO_FAILURE', payload: err });
      });
  }
);

const todo = (value) => (
  (dispatch) => {
    axios.post('/postSchedule', value)
      .then((res) => {
        dispatch({ type: 'ADD_TODO_SUCCESS', payload: res });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_TODO_FAILURE', payload: err });
      });
  }
);

const register = (value) => (
  (dispatch) => {
    axios.post('/register', value)
      .then((res) => {
        dispatch({ type: 'REGISTER_SUCCESS', payload: res });
      })
      .catch((err) => {
        dispatch({ type: 'REGISTER_FAILURE', payload: err });
      });
  }
);

export { todo, register, getTodo };
