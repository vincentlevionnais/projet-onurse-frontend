import { connect } from 'react-redux';
import { fetchPatients, setSearch } from 'src/actions/patients';
// on importe le composant de présentation
import PatientsList from 'src/components/PatientsList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  patients: state.patients.patientsList,
  patientsLoaded: state.patients.patientsLoaded,
  search: state.patients.search,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchPatients: () => {
    dispatch(fetchPatients());
  },
  setSearch: (search) => {
    dispatch(setSearch(search));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(PatientsList);
