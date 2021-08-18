import { connect } from 'react-redux';

// on importe le composant de présentation
import Popup from 'src/components/BigCalendar';

import {
  togglePopup, manageEventSubmit, updateTitleValue, updateStartDateValue, updateEndDateValue,
} from 'src/actions/bigCal';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  titleEvent: state.cal.titleEvent,
  startDateEvent: state.cal.startDateEvent,
  endDateEvent: state.cal.endDateEvent,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setDisplayPopup: (value) => {
    dispatch(togglePopup(value));
  },

  manageSubmit: () => {
    dispatch(manageEventSubmit());
  },

  setTitleEvent: (newValue) => {
    dispatch(updateTitleValue(newValue));
  },

  setStartDateEvent: (newValue) => {
    dispatch(updateStartDateValue(newValue));
  },

  setEndDateEvent: (newValue) => {
    dispatch(updateEndDateValue(newValue));
  },

  // setColor:

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
