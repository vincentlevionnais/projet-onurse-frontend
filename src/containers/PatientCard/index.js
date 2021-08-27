import { connect } from 'react-redux';
// on importe le composant de présentation
import PatientCard from 'src/components/PatientCard';
import { closePopUp, openPopUp } from '../../actions/patients';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  patients: state.patients.patientsList,
  patientsLoaded: state.patients.patientsLoaded,
  events: state.cal.events,
  popupIsOpen: state.patients.popupIsOpen,
});

// === mapDispatchToProps

const mapDispatchToProps = (dispatch) => ({
  openPopUp: () => {
    dispatch(openPopUp());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(PatientCard);
