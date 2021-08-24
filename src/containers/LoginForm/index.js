import { connect } from 'react-redux';

// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

import { updateLoginField, submitLogin, logOut } from 'src/actions/login';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.log.email,
  password: state.log.password,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newvalue, name) => {
    dispatch(updateLoginField(newvalue, name));
  },

  handleLogin: () => {
    dispatch(submitLogin());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
