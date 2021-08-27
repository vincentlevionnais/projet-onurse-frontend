import { connect } from 'react-redux';

// on importe le composant de présentation
import Popup from 'src/components/BigCalendar/Popup';

import {
  togglePopup, manageEventSubmit, updateTitleValue,
  updateStartDateValue, updateEndDateValue, deleteOneEvent, updatePatientId,
} from 'src/actions/bigCal';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  id: state.cal.id,
  reason: state.cal.reason,
  datetimeStart: state.cal.datetimeStart,
  datetimeEnd: state.cal.datetimeEnd,
  patients: state.patients.patientsList,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setDisplayPopup: () => {
    dispatch(togglePopup());
  },
  manageSubmit: () => {
    dispatch(manageEventSubmit());
  },

  setReason: (newValue) => {
    dispatch(updateTitleValue(newValue));
  },

  setdatetimeStart: (newValue) => {
    dispatch(updateStartDateValue(newValue));
  },

  setdatetimeEnd: (newValue) => {
    dispatch(updateEndDateValue(newValue));
  },

  deleteEvent: (id) => {
    dispatch(deleteOneEvent(id));
  },

  setPatientId: (newValue) => {
    dispatch(updatePatientId(newValue));
  },
  // setColor:

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
