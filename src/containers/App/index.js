import { connect } from 'react-redux';


import App from 'src/components/App';

// === mapStateToProps
const mapStateToProps = (state) => ({
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
