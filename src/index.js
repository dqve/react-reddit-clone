import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line 
import App from './containers/App';
import Routes from './components/routes';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Routes history={BrowserRouter} />,
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();