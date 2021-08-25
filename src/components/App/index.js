// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Page from 'src/components/Page';
import './styles.scss';
import Loader from '../Loader';

// == Composant
const App = ({ loadEvents, fetchPatients, eventsLoaded, patientsLoaded }) => {
  useEffect(() => {
    loadEvents();
    fetchPatients();
  }, []);

  return (
    <div className="app">
    {(patientsLoaded && eventsLoaded) && (
      <Page />
    )}
    {(!patientsLoaded || !eventsLoaded) && (
      <Loader />
    )}
    </div>
  );
};

App.propTypes = {
  loadEvents: PropTypes.func.isRequired,
  fetchPatients: PropTypes.func.isRequired,
  eventsLoaded: PropTypes.bool.isRequired,
  patientsLoaded: PropTypes.bool.isRequired,
};
// == Export
export default App;
