import { TOGGLE_POPUP, ADD_EVENT, UPDATE_TITLE_VALUE, UPDATE_START_DATE_VALUE, UPDATE_END_DATE_VALUE } from 'src/actions/bigCal';

const initialState = {
  events: [
    {
      id: '1',
      title: 'pansement genevieve',
      start: new Date('Wed Aug 18 2021 12:30:00 GMT+0200 (heure d’été d’Europe centrale)'),
      end: new Date('Wed Aug 18 2021 14:30:00 GMT+0200 (heure d’été d’Europe centrale)'),
    },
    {
      id: '2',
      title: 'pansement renéé',
      start: new Date('Wed Aug 18 2021 15:30:00 GMT+0200 (heure d’été d’Europe centrale)'),
      end: new Date('Wed Aug 18 2021 16:00:00 GMT+0200 (heure d’été d’Europe centrale)'),
    },
    {
      id: '3',
      title: 'pansement Jacques',
      start: new Date('Tue Aug 19 2021 16:30:00 GMT+0200 (heure d’été d’Europe centrale)'),
      end: new Date('Tue Aug 19 2021 17:30:00 GMT+0200 (heure d’été d’Europe centrale)'),
    },
    {
      id: '4',
      title: 'pansement Gillou',
      start: new Date('Fri Aug 20 2021 14:30:00 GMT+0200 (heure d’été d’Europe centrale)'),
      end: new Date('Fri Aug 20 2021 14:30:00 GMT+0200 (heure d’été d’Europe centrale)'),
    },
  ],
  displayPopup: false,
  titleEvent: '',
  startDateEvent: '',
  endDateEvent: '',

};

const calReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        displayPopup: !state.displayPopup,
      };

    case ADD_EVENT: {
      const newEvents = {
        id: action.id,
        title: action.titleEvent,
        start: action.startDateEvent,
        end: action.endDateEvent,
      };

      return {
        ...state,
        events: [...state.events, newEvents],
        displayPopup: false,
        titleEvent: '',
      };
    }

    case UPDATE_TITLE_VALUE:
      return {
        ...state,
        titleEvent: action.value,
      };

    case UPDATE_START_DATE_VALUE:
      return {
        ...state,
        startDateEvent: action.value,
      };

    case UPDATE_END_DATE_VALUE:
      return {
        ...state,
        endDateEvent: action.value,
      };

    default:
      return state;
  }
};

export default calReducer;
