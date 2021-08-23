import { SAVE_PATIENTS, SET_SEARCH, SET_PATIENTS_LOADED } from 'src/actions/patients';

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
