import { combineReducers } from 'redux';
import { todo, register, getTodo } from './reducers';

const rootReducer = combineReducers({ todo, register, getTodo });

export default rootReducer;
