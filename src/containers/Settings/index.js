import { connect } from 'react-redux';
import { updateLoginField } from 'src/actions/login';
// on importe le composant de présentation
import Settings from 'src/components/Settings';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.log.email,
  password: state.log.password,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newvalue, name) => {
    dispatch(updateLoginField(newvalue, name));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
