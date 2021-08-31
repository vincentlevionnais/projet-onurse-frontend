import { connect } from 'react-redux';

// on importe le composant de présentation
import Popup from 'src/components/LoginForm/Popup';

import { displayPopup, updateLoginField, managePopupSubmit } from 'src/actions/login';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  popupEmail: state.log.popupEmail,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newvalue, name) => {
    dispatch(updateLoginField(newvalue, name));
  },

  togglePopup: () => {
    dispatch(displayPopup());
  },

  manageSubmit: () => {
    dispatch(managePopupSubmit());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
