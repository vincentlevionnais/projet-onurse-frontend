// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getPayload } from 'src/utils/localStorage';
// == Import
import Page from 'src/containers/Page';
import './styles.scss';
// import Loader from '../Loader';

// == Composant
const App = ({
  loadEvents, fetchPatients, logged, redirectToLogin, makeTokenPersist,
}) => {
  useEffect(() => {
    if (logged) {
      loadEvents();
      fetchPatients();
    }
  }, [logged]);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      redirectToLogin();
      console.log('premier redirect');
    }

    if (localStorage.getItem('token')) {
      const tokenInLocalStorage = localStorage.getItem('token');
      const payload = getPayload(tokenInLocalStorage);
      const expiration = new Date(payload.exp);
      const now = new Date();

      console.log((expiration.getTime() * 1000) - now.getTime());

      if ((expiration.getTime() * 1000) - now.getTime() <= 0) {
        console.log('JWT has expired or will expire soon');
        redirectToLogin();
        console.log('deuxieme redirect');
      }
      else {
        console.log('JWT is valid for more than 5 minutes', payload);
        makeTokenPersist(tokenInLocalStorage);
      }
    }
  }, []);

  return (
    <div className="app">
      <Page />
    </div>
  );
};

App.propTypes = {
  loadEvents: PropTypes.func.isRequired,
  fetchPatients: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
  makeTokenPersist: PropTypes.func.isRequired,
};
// == Export
export default App;
