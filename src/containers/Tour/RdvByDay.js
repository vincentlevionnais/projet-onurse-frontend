import { connect } from 'react-redux';
import RdvByDay from '../../components/Tour/RdvByDay';
import { setStatus } from '../../actions/bigCal';

// === mapStateToProps
const mapStateToProps = (state) => ({
  patients: state.patients.patientsList, 
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  setStatus: (eventId, status) => {
    dispatch(setStatus(eventId, status));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(RdvByDay);
