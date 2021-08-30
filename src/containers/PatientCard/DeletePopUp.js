import { connect } from 'react-redux';
// on importe le composant de présentation
import DeletePopUp from 'src/components/PatientCard/DeletePopUp';
import { closePopUp, deletePatient } from '../../actions/patients';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({

});

// === mapDispatchToProps

const mapDispatchToProps = (dispatch) => ({
  closePopUp: () => {
    dispatch(closePopUp());
  },

  deletePatient: (id) => {
    dispatch(deletePatient(id))
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(DeletePopUp);
