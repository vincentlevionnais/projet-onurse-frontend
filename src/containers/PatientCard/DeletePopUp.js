import { connect } from 'react-redux';
// on importe le composant de présentation
import DeletePopUp from 'src/components/PatientCard/DeletePopUp';
import { closePopUp, openPopUp } from '../../actions/patients';
// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({

});

// === mapDispatchToProps

const mapDispatchToProps = (dispatch) => ({
  closePopUp: () => {
    dispatch(closePopUp());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(DeletePopUp);
