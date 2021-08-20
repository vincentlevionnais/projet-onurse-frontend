import { connect } from 'react-redux';

import AddPatient from 'src/components/AddPatient';
// on importe le composant de présentation
import submitNewPatient from 'src/actions/patients';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  lastName: state.lastName,
  firstName: state.firstName,
  dateOfBirth: state.dateOfBirth,
  phoneNumber: state.phoneNumber,
  adress: state.adress,
  complement: state.complement,
  information: state.information,

  doctor: state.doctor,
  NIR: state.NIR,
  mutual: state.mutual,
  AMC: state.AMC,
  pathology: state.pathology,

  trustedPersonLastName: state.trustedPersonLastName,
  trustedPersonFirstName: state.trustedPersonFirstName,
  relation: state.relation,
  TrustedPersonPhoneNumber: state.TrustedPersonPhoneNumber,
  TrustedPersonAdress: state.TrustedPersonAdress,

});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleSubmit: () => {
    dispatch(submitNewPatient());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);
