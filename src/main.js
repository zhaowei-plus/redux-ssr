import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
// import reducer from './reducers';

// const store = createStore(reducer);

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);