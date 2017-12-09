import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import initialState from './reducers/initialState';

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

const store = configureStore(initialState);
console.log(initialState);
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
