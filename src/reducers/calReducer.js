import {
  TOGGLE_POPUP, SAVE_EVENTS, ADD_EVENT, UPDATE_TITLE_VALUE, UPDATE_START_DATE_VALUE,
  UPDATE_END_DATE_VALUE, UPDATE_AFTER_DROP, UPDATE_AFTER_RESIZE, UPDATE_ID_VALUE,
  UPDATE_ONE_EVENT, DELETE_EVENT, SET_EVENTS_LOADED, UPDATE_PATIENT_ID, SET_STATUS,
} from 'src/actions/bigCal';


const initialState = {
  events: [],
  displayPopup: false,
  id: '',
  reason: '',
  datetimeStart: '',
  datetimeEnd: '',
  eventsLoaded : false,
  patient: {},
  status: 1,
};

const calReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        displayPopup: !state.displayPopup,
        reason: '',
        datetimeStart: '',
        datetimeEnd: '',
      };
    case SAVE_EVENTS: {
      const newListEvents = action.events.map((event) => ({
        ...event,
        id: event.id,
        title: event.reason,
        start: new Date(event.datetimeStart),
        end: new Date(event.datetimeEnd),
      }));

      return {
        ...state,
        events: [...newListEvents],
      };
    }

    case ADD_EVENT: {
      const patient_id = {
        id: action.patient
      }
      const newEvents = {
        id: action.id,
        title: action.reason,
        start: action.datetimeStart,
        end: action.datetimeEnd,
        patient: patient_id,
        status: action.status,
      };

      return {
        ...state,
        events: [...state.events, newEvents],
        displayPopup: false,
        reason: '',
        datetimeStart: '',
        datetimeEnd: '',

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

    case UPDATE_ID_VALUE:
      return {
        ...state,
        id: action.id,
      };

    case UPDATE_PATIENT_ID:
      return {
        ...state,
        patient: action.value,
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

    case UPDATE_ONE_EVENT: {
      const newListEvents = state.events.map((items) => {
        if (items.id == action.id) {
          return {
            ...items,
            id: action.id,
            title: action.reason,
            start: action.datetimeStart,
            end: action.datetimeEnd,
            patient: {
              id: action.patient,
            },
          };
        }
        return items;
      });

      return {
        ...state,
        events: [...newListEvents],
        displayPopup: false,
        id: '',
        reason: '',
        datetimeStart: '',
        datetimeEnd: '',

      };
    }
    case DELETE_EVENT: {
      const newListEvents = state.events.filter((items) => items.id !== action.id);

      return {
        ...state,
        events: [...newListEvents],
        displayPopup: false,
        reason: '',
        datetimeStart: '',
        datetimeEnd: '',

      };
    }
    case SET_EVENTS_LOADED:
      return {
        ...state,
        eventsLoaded: true,
      };
    case SET_STATUS : 
      const eventIndex = state.events.findIndex((item) => item.id === action.id);
      const newListEvents = [...state.events];
      newListEvents[eventIndex] = {
        ...newListEvents[eventIndex],
        status: action.status,
      };
      return {
        ...state,
        events: newListEvents,
      };
    default:
      return state;
  }
};

export default calReducer;
