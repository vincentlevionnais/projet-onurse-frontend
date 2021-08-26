// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Page from 'src/containers/Page';
import './styles.scss';
// import Loader from '../Loader';

// == Composant
const App = ({
  loadEvents, fetchPatients, logged, token, redirectToLogin, makeTokenPersist,
}) => {
  useEffect(() => {
    if (logged) {
      loadEvents();
      fetchPatients();
    }
    if (localStorage.getItem('token') === null) {
      console.log('je suis dans useeffect');
      console.log(token);
      console.log(localStorage.getItem('token'));
      redirectToLogin();
    }
    if (localStorage.getItem('token')) {
      const tokenInLocalStorage = localStorage.getItem('token');
      makeTokenPersist(tokenInLocalStorage);
    }
  }, [logged]);

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
};
// == Export
export default App;
