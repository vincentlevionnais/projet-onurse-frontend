import { connect } from 'react-redux';

import AddPatient from 'src/components/AddPatient';
// on importe le composant de présentation
import { submitNewPatient, updatePatient } from 'src/actions/patients';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  patients: state.patients.patientsList,

});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  onNewPatient: (data) => {
    dispatch(submitNewPatient(data));
  },

  updatePatient: (data) => {
    dispatch(updatePatient(data));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);
