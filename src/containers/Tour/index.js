import { connect } from 'react-redux';
import Tour from 'src/components/Tour';

// === mapStateToProps
const mapStateToProps = (state) => ({
  events: state.cal.events,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Tour);
