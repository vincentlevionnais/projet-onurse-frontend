import { SAVE_PATIENTS, SET_SEARCH, SET_PATIENTS } from 'src/actions/patients';

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
        patientsLoaded: true,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case SET_PATIENTS:
      return {
        ...state,
        patientsList: action.patients,
      };
    default:
      return state;
  }
}

export default patientReducer;
