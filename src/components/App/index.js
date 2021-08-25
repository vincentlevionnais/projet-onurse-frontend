// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Page from 'src/containers/Page';
import './styles.scss';
// import Loader from '../Loader';

// == Composant
const App = ({
  loadEvents, fetchPatients, eventsLoaded, patientsLoaded, logged,
}) => {
  useEffect(() => {
    console.log('useeffect or If');
    if (logged) {
      console.log('useeffect dans If');
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
  // eventsLoaded: PropTypes.bool.isRequired,
  // patientsLoaded: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};
// == Export
export default App;
