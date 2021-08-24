import { connect } from 'react-redux';

// on importe le composant de présentation
import CreateAccount from 'src/components/CreateAccount';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  lastName: state.create.email,
  firstName: state.create.password,
  email: state.create.loggedMessage,
  password: state.create.loggedMessage,
  phone: state.create.loggedMessage,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  // changeField: (newvalue, name) => {
  //   dispatch(updateLoginField(newvalue, name));
  // },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
