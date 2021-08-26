import { connect } from 'react-redux';

import { fetchEvents } from 'src/actions/bigCal';
import { fetchPatients } from 'src/actions/patients';
import { tokenPersist, toLogin } from 'src/actions/login';
// on importe le composant de présentation
import App from 'src/components/App';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  eventsLoaded: state.cal.eventsLoaded,
  patientsLoaded: state.patients.patientsLoaded,
  logged: state.log.logged,
  token: state.log.token,
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
  },

  redirectToLogin: () => {
    dispatch(toLogin());
  },

  makeTokenPersist: (token) => {
    dispatch(tokenPersist(token));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
