import { SAVE_PATIENTS, SET_SEARCH, ADD_PATIENT, SET_PATIENTS_LOADED, OPEN_DELETE_POPUP } from 'src/actions/patients';
import { CLOSE_DELETE_POPUP } from '../actions/patients';

const initialState = {
  patientsList: [],
  patientsLoaded: false,
  search: '',
  popupIsOpen: false,
};

function patientReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_PATIENTS:
      return {
        ...state,
        patientsList: action.patients,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };

    case ADD_PATIENT: {
      const newPatient = {
        id: action.id,
        lastname: action.lastname,
        firstname: action.firstname,
        birthdate: action.birthdate,
        phone: action.phone,
        completeAdress: action.completeAdress,
        informationAdress: action.informationAdress,
        note: action.note,
        doctorName: action.doctorName,
        nir: action.nir,
        mutualName: action.mutualName,
        mutualNumberAmc: action.mutualNumberAmc,
        pathology: action.pathology,
        trustedPerson: action.trustedPerson,

      };

      return {
        ...state,
        patientsList: [...state.patientsList, newPatient],

      };
    }

    case SET_PATIENTS_LOADED:
      return {
        ...state,
        patientsLoaded: true,
      };

    case OPEN_DELETE_POPUP: 
      return {
        ...state,
        popupIsOpen: true,
      };
    case CLOSE_DELETE_POPUP: 
     return {
       ...state,
       popupIsOpen: false,
     };
     
    default:
      return state;
  }
}

export default patientReducer;
