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
  loadEvents, fetchPatients, logged, redirectToLogin, makeTokenPersist, getUserInfos, fetchTasks
}) => {
  useEffect(() => {
    if (logged) {
      loadEvents();
      fetchPatients();
      fetchTasks();
      getUserInfos();
    }
  }, [logged]);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      redirectToLogin();
    }

    if (localStorage.getItem('token')) {
      const tokenInLocalStorage = localStorage.getItem('token');
      const payload = getPayload(tokenInLocalStorage);
      const expiration = new Date(payload.exp);
      const now = new Date();

      if ((expiration.getTime() * 1000) - now.getTime() <= 0) {
        redirectToLogin();
      }
      else {
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
  fetchTasks: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
  makeTokenPersist: PropTypes.func.isRequired,
  getUserInfos: PropTypes.func.isRequired,
};
// == Export
export default App;
