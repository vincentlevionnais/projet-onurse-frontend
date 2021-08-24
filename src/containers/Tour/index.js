import { connect } from 'react-redux';
import Tour from 'src/components/Tour';
import fetchEvents from 'src/actions/bigCal';
// === mapStateToProps
const mapStateToProps = (state) => ({
  events: state.cal.events,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  /* loadEvents: () => {
    dispatch(fetchEvents());
  }, */
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Tour);
