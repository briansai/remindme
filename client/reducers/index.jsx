import { combineReducers } from 'redux';
import {
  todo,
  register,
  getTodo,
  addAnotherTodo,
} from './reducers';

const rootReducer = combineReducers({
  todo,
  register,
  getTodo,
  addAnotherTodo,
});

export default rootReducer;
