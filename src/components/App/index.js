// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Page from 'src/containers/Page';
import './styles.scss';
// import Loader from '../Loader';

// == Composant
const App = ({
  loadEvents, fetchPatients, logged,
}) => {
  useEffect(() => {
    if (logged) {
      loadEvents();
      fetchPatients();
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
