import { connect } from 'react-redux';

// on importe le composant de présentation
import ResetPassword from 'src/components/LoginForm/ResetPassword';

import { updateLoginField, manageResetPasswordSubmit } from 'src/actions/login';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  password: state.log.password,
  confirmationPassword: state.log.confirmationPassword,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newvalue, name) => {
    dispatch(updateLoginField(newvalue, name));
  },

  manageSubmit: () => {
    dispatch(manageResetPasswordSubmit());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
