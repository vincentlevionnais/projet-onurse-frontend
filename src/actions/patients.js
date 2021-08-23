
// ========= action types
// send a request to the API to retrieve the list of patients
export const FETCH_PATIENTS = 'FETCH_PATIENTS';
// records the patients received since the request in the state
export const SAVE_PATIENTS = 'SAVE_PATIENTS';
// stock search in state
export const SET_SEARCH = 'SET_SEARCH';
export const SUBMIT_NEW_PATIENT = 'SUBMIT_NEW_PATIENT';
export const ADD_PATIENT = 'ADD_PATIENT';

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

export const addPatient = (id, lastName, firstName, dateOfBirth, phoneNumber, adress,
  complement, information, doctor, NIR, mutual, AMC, pathology, trustedPersonLastName,
  trustedPersonFirstName, relation, trustedPersonPhoneNumber, trustedPersonAdress) => (
  {
    type: ADD_PATIENT,
    lastName: lastName,
    firstName: firstName,
    dateOfBirth: dateOfBirth,
    phoneNumber: phoneNumber,
    adress: adress,
    complement: complement,
    information: information,
    doctor: doctor,
    NIR: NIR,
    mutual: mutual,
    AMC: AMC,
    pathology: pathology,
    trustedPersonLastName: trustedPersonLastName,
    trustedPersonFirstName: trustedPersonFirstName,
    relation: relation,
    trustedPersonPhoneNumber: trustedPersonPhoneNumber,
    trustedPersonAdress: trustedPersonAdress,

  });

