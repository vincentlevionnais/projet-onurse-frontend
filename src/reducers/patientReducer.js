import {
  SAVE_PATIENTS, SET_SEARCH, ADD_PATIENT, SET_PATIENTS_LOADED, UPDATE_ONE_PATIENT,
} from 'src/actions/patients';

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

    case UPDATE_ONE_PATIENT: {
      const newPatientList = state.patientsList.map((patient) => {
        if (patient.id === action.id) {
          return {
            ...patient,
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
        }
        return patient;
      });
      console.log(newPatientList);
      return {
        ...state,
        patientsList: [...newPatientList],

      };
    }
    default:
      return state;
  }
}

export default patientReducer;
