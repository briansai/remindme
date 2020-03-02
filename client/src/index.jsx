import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import App from './App/App';
import rootReducer from '../reducers/index';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'normalize.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
