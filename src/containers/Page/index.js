import { connect } from 'react-redux';
// on importe le composant de présentation
import Page from 'src/components/Page';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isCreate: state.create.isCreate,
  logged: state.log.logged,
  patientsLoaded: state.patients.patientsLoaded,
  eventsLoaded: state.cal.eventsLoaded,
});

// === mapDispatchToProps

const mapDispatchToProps = (dispatch) => ({

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Page);
