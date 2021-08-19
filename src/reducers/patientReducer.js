import { SAVE_PATIENTS } from 'src/actions/patients';


const initialState = {
  patientsList: [],
  patientsLoaded: false,
};

function patientReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_PATIENTS:
      return {
        ...state,
        patientsList: action.patients,
        patientsLoaded: true,
      };
    default:
      return state;
  }
}

export default patientReducer;
