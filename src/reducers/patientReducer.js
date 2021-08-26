import { SAVE_PATIENTS, SET_SEARCH, ADD_PATIENT, SET_PATIENTS_LOADED } from 'src/actions/patients';

const initialState = {
  patientsList: [],
  patientsLoaded: false,
  search: '',
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
    default:
      return state;
  }
}

export default patientReducer;
