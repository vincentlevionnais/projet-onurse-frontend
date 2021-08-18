import { TOGGLE_POPUP, ADD_EVENT, UPDATE_TITLE_VALUE, UPDATE_START_DATE_VALUE, UPDATE_END_DATE_VALUE } from 'src/actions/bigCal';

const initialState = {
  events: [
    {
      id: '1',
      title: 'pansement genevieve',
      start: '2021/08/14',
      end: '2021/08/16',
    },
    {
      id: '2',
      title: 'pansement renéé',
      start: '2021/08/20',
      end: '2021/08/21',
    },
    {
      id: '3',
      title: 'pansement Jacques',
      start: '2021/08/25',
      end: '2021/08/26',
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
