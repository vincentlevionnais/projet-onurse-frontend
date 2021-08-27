import { connect } from 'react-redux';

import {
  togglePopup,
  dropEvent,
  resizeEvent,
  updateTitleValue,
  updateStartDateValue,updateEndDateValue,
  updateIdValue,
  updatePatientId
} from 'src/actions/bigCal';
// on importe le composant de présentation
import BigCalendar from 'src/components/BigCalendar';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  events: state.cal.events,
  displayPopup: state.cal.displayPopup,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setDisplayPopup: () => {
    dispatch(togglePopup());
  },

  onEventDrop: (data) => {
    const { start, end } = data;
    // renommage des données reçues pour coller avec le nommage general
    const datetimeStart = start;
    const datetimeEnd = end;
    const idInInt = parseInt(data.event.id, 10);
    const id = idInInt;
    const reason = data.event.title;
    dispatch(dropEvent(id, reason, datetimeStart, datetimeEnd));
  },

  onEventResize: (data) => {
    const { start, end } = data;
    // renommage des données reçues pour coller avec le nommage general
    const datetimeStart = start;
    const datetimeEnd = end;
    const idInInt = parseInt(data.event.id, 10);
    const id = idInInt;
    const reason = data.event.title;
    dispatch(resizeEvent(id, reason, datetimeStart, datetimeEnd));
  },

  updateValueinPopup: (evt) => {
    dispatch(updateTitleValue(evt.title));
    dispatch(updateStartDateValue(evt.start));
    dispatch(updateEndDateValue(evt.end));
    dispatch(updateIdValue(evt.id));
    dispatch(updatePatientId(evt.patient));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(BigCalendar);
