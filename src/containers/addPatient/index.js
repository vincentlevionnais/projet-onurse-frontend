import { connect } from 'react-redux';

import AddPatient from 'src/components/AddPatient';
// on importe le composant de présentation
import { submitNewPatient } from 'src/actions/patients';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  lastname: state.lastname,
  firstname: state.firstname,
  birthdate: state.birthdate,
  phone: state.phone,
  completeAdress: state.completeAdress,
  informationAdress: state.informationAdress,
  note: state.note,

  doctorName: state.doctorName,
  nir: state.nir,
  mutualName: state.mutualName,
  mutualNumberAmc: state.mutualNumberAmc,
  pathology: state.pathology,

  trustedPerson: state.trustedPerson,

});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  onNewPatient: (data) => {
    dispatch(submitNewPatient(data));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);
