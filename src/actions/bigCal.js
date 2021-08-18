// actions types
// ouverture ou fermeture du popup
export const TOGGLE_POPUP = 'OPEN_POPUP';
// màj de la valeur du titre de l'event
export const UPDATE_TITLE_VALUE = 'UPDATE_TITLE_VALUE';
// màj de la valeur de la date de debut de l'event
export const UPDATE_START_DATE_VALUE = 'UPDATE_START_DATE_VALUE';
// màj de la valeur de la date de debut de l'event
export const UPDATE_END_DATE_VALUE = 'UPDATE_END_DATE_VALUE';
// connexion api et envoi des données
export const MANAGE_EVENT_SUBMIT = 'MANAGE_EVENT_SUBMIT';
// rajout des données sur le calendrier
export const ADD_EVENT = 'ADD_EVENT';
// modifier la date d'un rendez vous via un drop
export const DROP_EVENT = 'DROP_EVENT';

// actions creators
export const togglePopup = () => ({
  type: TOGGLE_POPUP,
});

export const manageEventSubmit = () => ({
  type: MANAGE_EVENT_SUBMIT,
});

export const addEvent = (id, reason, startDateEvent, endDateEvent) => ({
  type: ADD_EVENT,
  id: id,
  reason: reason,
  startDateEvent: startDateEvent,
  endDateEvent: endDateEvent,
});

export const updateTitleValue = (newValue) => ({
  type: UPDATE_TITLE_VALUE,
  value: newValue,
});

export const updateStartDateValue = (newValue) => ({
  type: UPDATE_START_DATE_VALUE,
  value: newValue,
});
export const updateEndDateValue = (newValue) => ({
  type: UPDATE_END_DATE_VALUE,
  value: newValue,
});

export const dropEvent = (start, end, id) => ({
  type: DROP_EVENT,
  start: start,
  end: end,
  id: id,

});
