import { connect } from 'react-redux';
import { updateSettingsField, manageSettingsSubmit, deleteSubmit } from 'src/actions/settings';
// on importe le composant de présentation
import Settings from 'src/components/Settings';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.settings.email,
  confirmationEmail: state.settings.confirmationEmail,
  password: state.settings.password,
  confirmationPassword: state.settings.confirmationPassword,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateSettingsField(newValue, name));
  },
  manageSubmit: () => {
    dispatch(manageSettingsSubmit());
  },

  manageDeleteSubmit: () => {
    dispatch(deleteSubmit());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
