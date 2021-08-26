import { connect } from 'react-redux';
import RdvByDay from 'src/components/Tour/RdvByDay';
import manageEventSubmit from '../../actions/bigCal';
// === mapStateToProps
const mapStateToProps = (state) => ({

});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
 /*  manageEvent : (eventId) => {
    dispatch(manageEventSubmit(eventId));
  } */
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(RdvByDay);
