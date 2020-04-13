import axios from 'axios';

const getTodo = (query) => (
  (dispatch) => {
    axios.get('/schedule', { query })
      .then((res) => {
        dispatch({ type: 'GET_TODO_SUCCESS', payload: res });
      })
      .catch((err) => {
        dispatch({ type: 'GET_TODO_FAILURE', payload: err });
      });
  }
);

const addAnotherTodo = (item) => (
  (dispatch) => {
    axios.post('/addToSchedule', item)
      .then((res) => {
        dispatch({ type: 'ADD_ANOTHER_SUCCESS', payload: res });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_ANOTHER_FAILURE', payload: err });
      });
  }
);

const todo = (item) => (
  (dispatch) => {
    axios.post('/schedule', item)
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

export {
  todo,
  register,
  getTodo,
  addAnotherTodo,
};
