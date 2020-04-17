import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { InfoProvider } from './components/context';
import { TeamProvider } from './components/pages/TeamInfo/TeamContext';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <InfoProvider>
    <TeamProvider>
      <Router>
        {' '}
        <App />
      </Router>
    </TeamProvider>
  </InfoProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
