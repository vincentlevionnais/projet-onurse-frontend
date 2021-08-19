import {
  TOGGLE_POPUP, ADD_EVENT, UPDATE_TITLE_VALUE, UPDATE_START_DATE_VALUE,
  UPDATE_END_DATE_VALUE, UPDATE_AFTER_DROP, UPDATE_AFTER_RESIZE,
} from 'src/actions/bigCal';

const initialState = {
  events: [
    {
      id: '1',
      title: 'pansement genevieve',
      start: new Date('2021-08-18T15:50'),
      end: new Date('2021-08-18T16:50'),
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
  reason: '',
  datetimeStart: '',
  datetimeEnd: '',

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
        title: action.reason,
        start: action.datetimeStart,
        end: action.datetimeEnd,
      };

      return {
        ...state,
        events: [...state.events, newEvents],
        displayPopup: false,
        reason: '',
      };
    }

    case UPDATE_TITLE_VALUE:
      return {
        ...state,
        reason: action.value,
      };

    case UPDATE_START_DATE_VALUE:
      return {
        ...state,
        datetimeStart: action.value,
      };

    case UPDATE_END_DATE_VALUE:
      return {
        ...state,
        datetimeEnd: action.value,
      };

    case UPDATE_AFTER_DROP: {
      const newListEvents = state.events.map((items) => {
        if (items.id == action.id) {
          return {
            ...items,
            start: action.datetimeStart,
            end: action.datetimeEnd,

          };
        }
        return items;
      });

      return {
        ...state,
        events: [...newListEvents],
      };
    }
    case UPDATE_AFTER_RESIZE: {
      const newListEvents = state.events.map((items) => {
        if (items.id == action.id) {
          return {
            ...items,
            start: action.datetimeStart,
            end: action.datetimeEnd,

          };
        }
        return items;
      });

      return {
        ...state,
        events: [...newListEvents],
      };
    }
    default:
      return state;
  }
};

export default calReducer;
