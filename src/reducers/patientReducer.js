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
        lastName: action.lastName,
        firstName: action.firstName,
        dateOfBirth: action.dateOfBirth,
        phoneNumber: action.phoneNumber,
        adress: action.adress,
        complement: action.complement,
        information: action.information,
        doctor: action.doctor,
        nir: action.nir,
        mutual: action.mutual,
        AMC: action.AMC,
        pathology: action.pathology,
        trustedPersonLastName: action.pathology,
        trustedPersonFirstName: action.trustedPersonFirstName,
        relation: action.relation,
        TrustedPersonPhoneNumber: action.TrustedPersonPhoneNumber,
        TrustedPersonAdress: action.TrustedPersonAdress,
      };
      return {
        ...state,
        patientsList: [...state.patientsList, newPatient],
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        phoneNumber: '',
        adress: '',
        complement: '',
        information: '',
        doctor: '',
        nir: '',
        mutual: '',
        AMC: '',
        pathology: '',
        trustedPersonLastName: '',
        trustedPersonFirstName: '',
        relation: '',
        TrustedPersonPhoneNumber: '',
        TrustedPersonAdress: '',
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
