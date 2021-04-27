import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './route';
import './index.scss';
import { Provider } from "react-redux";
import store from './redux/configureStore'

ReactDOM.render(
  <Provider store = {store}>
    <Routes />
  </Provider>
  ,
  document.getElementById('root'),
);

