// ========= action types
// send a request to the API to retrieve the list of patients
export const FETCH_PATIENTS = 'FETCH_PATIENTS';
// records the patients received since the request in the state
export const SAVE_PATIENTS = 'SAVE_PATIENTS';
// stock search in state
export const SET_SEARCH = 'SET_SEARCH';
// set patients List
export const SET_PATIENTS = 'SET_PATIENTS';

// ========= action creators
export const fetchPatients = () => ({
  type: FETCH_PATIENTS,
});

export const savePatients = (patients) => ({
  type: SAVE_PATIENTS,
  patients: patients,
});

export const setSearch = (search) => ({
  type: SET_SEARCH,
  search: search,
});

export const setPatients = (patients) => ({
  type: SET_PATIENTS,
  patients: patients,
});
