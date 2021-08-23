import { connect } from 'react-redux';

<<<<<<< HEAD
import { fetchEvents } from 'src/actions/bigCal';
// on importe le composant de présentation
import App from 'src/components/App';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
 // todo recuperer le loader dans le state et côté composant APP le mettre en if implicite
=======

import App from 'src/components/App';

// === mapStateToProps
const mapStateToProps = (state) => ({
>>>>>>> feature/FEATURE_DYNAMISATION_PATIENT_LIST
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
<<<<<<< HEAD
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadEvents: () => {
    dispatch(fetchEvents());
  },
=======

>>>>>>> feature/FEATURE_DYNAMISATION_PATIENT_LIST
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
