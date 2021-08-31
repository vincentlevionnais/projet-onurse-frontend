// ==========================actions types
// ouverture ou fermeture du popup
export const TOGGLE_POPUP = 'OPEN_POPUP';
// màj de la valeur de l'id de l'event
export const UPDATE_ID_VALUE = 'UPDATE_ID_VALUE';
// màj de la valeur du titre de l'event
export const UPDATE_TITLE_VALUE = 'UPDATE_TITLE_VALUE';
// màj de la valeur de la date de debut de l'event
export const UPDATE_START_DATE_VALUE = 'UPDATE_START_DATE_VALUE';
// màj de la valeur de la date de debut de l'event
export const UPDATE_END_DATE_VALUE = 'UPDATE_END_DATE_VALUE';
// màj de la valeur de patient_id
export const UPDATE_PATIENT_ID = 'UPDATE_PATIENT_ID';
// màj de la valeur de patientChoosed
export const UPDATE_PATIENT_CHOOSED = 'UPDATE_PATIENT_CHOOSED';
// connexion api et envoi des données a api
export const MANAGE_EVENT_SUBMIT = 'MANAGE_EVENT_SUBMIT';
// rajout des données sur le calendrier
export const ADD_EVENT = 'ADD_EVENT';
// modifier la date d'un rendez vous via un drop et envoi des données api
export const DROP_EVENT = 'DROP_EVENT';
// update des données de date au drop d'un event sur le calendrier
export const UPDATE_AFTER_DROP = 'UPDATE_AFTER_DROP';
// modifier la date d'un rdv via un resize et envoi données à API
export const RESIZE_EVENT = 'RESIZE_EVENT';
// update des données date au resize d'un event sur le calendrier
export const UPDATE_AFTER_RESIZE = 'UPDATE_AFTER_RESIZE';
// update des données titre et autres
export const UPDATE_ONE_EVENT = 'UPDATE_ONE_EVENT';
/** delete One event by id in BDD */
export const DELETE_ONE_EVENT = 'DELETE_ONE_EVENT';
/** delete one event by id */
export const DELETE_EVENT = 'DELETE_EVENT';
// recuperations des events depuis API
export const FETCH_EVENTS = 'FETCH_EVENTS';
// sauvegarde des events dans le state
export const SAVE_EVENTS = 'SAVE_EVENTS';
// change eventsLoaded
export const SET_EVENTS_LOADED = 'SET_EVENTS_LOADED';
// change status of the event
export const SET_STATUS = 'SET_STATUS';
// ========================actions creators

/** ouverture ou fermeture du popup */
export const togglePopup = () => ({
  type: TOGGLE_POPUP,
});

/** envoi des données du nouvel evenement vers API */
export const manageEventSubmit = (id) => ({
  type: MANAGE_EVENT_SUBMIT,
  id: id,
});

/** si retour api ok, affichage de l'event à l'ecran */
export const addEvent = (id, reason, datetimeStart, datetimeEnd, patient, status) => ({
  type: ADD_EVENT,
  id: id,
  reason: reason,
  datetimeStart: datetimeStart,
  datetimeEnd: datetimeEnd,
  patient: patient,
  status: status,
});

/** mise à jour de l'id dans le state */
export const updateIdValue = (id) => ({
  type: UPDATE_ID_VALUE,
  id: id,
});

/** mise à jour du titre dans le state */
export const updateTitleValue = (newValue) => ({
  type: UPDATE_TITLE_VALUE,
  value: newValue,
});

/** mise à jour de la date de debut de l'event dans le state */
export const updateStartDateValue = (newValue) => ({
  type: UPDATE_START_DATE_VALUE,
  value: newValue,
});

/** mise à jour de la date de debut de l'event dans le state */
export const updateEndDateValue = (newValue) => ({
  type: UPDATE_END_DATE_VALUE,
  value: newValue,
});

/** mise à jour de patient_id */
export const updatePatientId = (newValue) => ({
  type: UPDATE_PATIENT_ID,
  value: newValue,
});
/** mise à jour de patientChoosed qui sert
 * à faire la comparaison avec patient.id dans le composant popup
 */
export const updatePatientChoosed = (newValue) => ({
  type: UPDATE_PATIENT_CHOOSED,
  value: newValue,
});

/** mise à jour des nouvelles données après drop,  vers l'api */
export const dropEvent = (id, reason, datetimeStart, datetimeEnd) => ({
  type: DROP_EVENT,
  id: id,
  reason: reason,
  datetimeStart: datetimeStart,
  datetimeEnd: datetimeEnd,
});

/** si retour api ok, affichage de l'event au nouvel emplacement */
export const updateAfterDrop = (id, datetimeStart, datetimeEnd) => ({
  type: UPDATE_AFTER_DROP,
  id: id,
  datetimeStart: datetimeStart,
  datetimeEnd: datetimeEnd,
});

/** mise à jour des nouvelles données après resize vers l'api */
export const resizeEvent = (id, reason, datetimeStart, datetimeEnd) => ({
  type: RESIZE_EVENT,
  id: id,
  reason: reason,
  datetimeStart: datetimeStart,
  datetimeEnd: datetimeEnd,
});

/** si retour api ok, affichage de l'event au nouvel emplacement */
export const updateAfterResize = (id, datetimeStart, datetimeEnd) => ({
  type: UPDATE_AFTER_RESIZE,
  id: id,
  datetimeStart: datetimeStart,
  datetimeEnd: datetimeEnd,
});

/** màj d'un event déjà crée */
export const updateOneEvent = (id, reason, datetimeStart, datetimeEnd, patient, status) => ({
  type: UPDATE_ONE_EVENT,
  id: id,
  reason: reason,
  datetimeStart: datetimeStart,
  datetimeEnd: datetimeEnd,
  patient: patient,
  status: status,
});

/** delete One event by id in BDD */
export const deleteOneEvent = (id) => ({
  type: DELETE_ONE_EVENT,
  id: id,
});
/** delete One event by id  */
export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  id: id,
});

/** recuperation des events depuis API */
export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

/** sauvegarde des données dans le state */
export const saveEvents = (events) => ({
  type: SAVE_EVENTS,
  events: events,
});

/** change la valeur de eventsLoaded quand les données sont chargées */
export const setEventsLoaded = () => ({
  type: SET_EVENTS_LOADED,
});

/** change la valeur du status de l'évènement */
export const setStatus = (id, status) => ({
  type: SET_STATUS,
  status: status,
  id: id,
});
