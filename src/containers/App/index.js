import { connect } from 'react-redux';

import { fetchEvents } from 'src/actions/bigCal';
import { fetchPatients } from 'src/actions/patients';
// on importe le composant de présentation
import App from 'src/components/App';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  eventsLoaded: state.cal.eventsLoaded,
  patientsLoaded: state.patients.patientsLoaded,
  events: state.cal.events,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadEvents: () => {
    dispatch(fetchEvents());
  },

  fetchPatients: () => {
    dispatch(fetchPatients());
  }
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
