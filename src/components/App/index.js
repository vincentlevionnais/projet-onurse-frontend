// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Page from 'src/components/Page';
import './styles.scss';

// == Composant
const App = ({ loadEvents, fetchPatients }) => {
  useEffect(() => {
    loadEvents();
    fetchPatients();
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
};
// == Export
export default App;
