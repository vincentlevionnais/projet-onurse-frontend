import { SAVE_PATIENTS, SET_SEARCH, ADD_PATIENT } from 'src/actions/patients';

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

    case ADD_PATIENT: {
      const newPatient = {
        id: action.id,

        lastname: action.lastName,
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

        lastname: '',
        firstname: '',
        birthdate: '',
        phone: '',
        completeAdress: '',
        informationAdress: '',
        note: '',

        doctorName: '',
        nir: '',
        mutualName: '',
        mutualNumberAmc: '',
        pathology: '',

        trustedPerson: '',
      };
    }

    default:
      return state;
  }
}

export default patientReducer;
