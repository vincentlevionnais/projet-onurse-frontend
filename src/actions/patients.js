
// ========= action types
// send a request to the API to retrieve the list of patients
export const FETCH_PATIENTS = 'FETCH_PATIENTS';
// records the patients received since the request in the state
export const SAVE_PATIENTS = 'SAVE_PATIENTS';
// stock search in state
export const SET_SEARCH = 'SET_SEARCH';
export const SUBMIT_NEW_PATIENT = 'SUBMIT_NEW_PATIENT';
export const ADD_PATIENT = 'ADD_PATIENT';
// change state patientsLoaded;
export const SET_PATIENTS_LOADED = 'SET_PATIENTS_LOADED';

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

export const submitNewPatient = (data) => ({
  type: SUBMIT_NEW_PATIENT,
  patient: data,
});

export const addPatient = (id, lastname, firstname, birthdate, phone, completeAdress, informationAdress,
  note, doctorName, nir, mutualName, mutualNumberAmc, pathology, trustedPerson) => (
  {
    type: ADD_PATIENT,
    lastname: lastname,
    firstname: firstname,
    birthdate: birthdate,
    phone: phone,
    completeAdress: completeAdress,
    informationAdress: informationAdress,
    note: note,
    doctorName: doctorName,
    nir: nir,
    mutualName: mutualName,
    mutualNumberAmc: mutualNumberAmc,
    pathology: pathology,
    trustedPerson: trustedPerson,
  });

export const setPatientLoaded = () => ({
  type: SET_PATIENTS_LOADED,
});
