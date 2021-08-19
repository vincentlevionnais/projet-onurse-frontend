import { connect } from 'react-redux';

import { togglePopup, dropEvent } from 'src/actions/bigCal';
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
    const datetimeStart = start;
    const datetimeEnd = end;
    const idInInt = parseInt(data.event.id, 10);
    const id = idInInt;
    const reason = data.event.title;
    // console.log(idInInt);
    // console.log(start);
    // console.log(end);
    // console.log(datetimeStart);
    // console.log(data);
    // const eventDropped = {
    //   id,
    //   datetimeStart,
    //   datetimeEnd,
    // };
    // console.log(eventDropped);
    dispatch(dropEvent(id, reason, datetimeStart, datetimeEnd));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(BigCalendar);
