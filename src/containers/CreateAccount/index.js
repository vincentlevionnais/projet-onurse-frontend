import { connect } from 'react-redux';

// on importe le composant de présentation
import CreateAccount from 'src/components/CreateAccount';
import { submitCreateAccountForm, updateCreateField } from 'src/actions/create';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  lastName: state.create.lastName,
  firstName: state.create.firstName,
  email: state.create.email,
  password: state.create.password,
  confirmationPassword: state.create.confirmationPassword,
  phone: state.create.phone,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleChange: (newvalue, name) => {
    dispatch(updateCreateField(newvalue, name));
  },
  manageSubmit: () => {
    dispatch(submitCreateAccountForm());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
