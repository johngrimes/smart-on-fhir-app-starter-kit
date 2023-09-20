import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import FHIR from 'fhirclient';

const rootElement = document.getElementById('root');

const smartLaunch = () => {
  // Authorize application
  FHIR.oauth2
    .init({
      clientId: 'defbd422-1acc-44f1-9172-f7c7d023d9c2',
      scope: 'launch/patient openid profile patient/*.cruds'
    })
    .then(client => {
      ReactDOM.render(<App client={client} />, rootElement);
    });
};

smartLaunch();