import { connect } from 'react-redux';
import { fetchPatients } from 'src/actions/patients';
// on importe le composant de présentation
import PatientsList from 'src/components/PatientsList';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  patients: state.patients.patientsList,
  patientsLoaded: state.patients.patientsLoaded,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  fetchPatients: () => {
    dispatch(fetchPatients());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(PatientsList);
