import {
  SAVE_PATIENTS,
  SET_SEARCH,
  ADD_PATIENT,
  SET_PATIENTS_LOADED,
  OPEN_DELETE_POPUP,
  CLOSE_DELETE_POPUP,
  DELETE_STATE_PATIENT,
  UPDATE_ONE_PATIENT,
  SET_REDIRECT,
} from 'src/actions/patients';


const initialState = {
  patientsList: [],
  patientsLoaded: false,
  search: '',
  popupIsOpen: false,
  redirect: false,
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

    case DELETE_STATE_PATIENT: {
      const newListPatients = state.patientsList.filter((items) => parseInt(items.id) !== parseInt(action.id));
      return {
        ...state,
        patientsList: [...newListPatients],
      };
    };
    case SET_REDIRECT:
      return {
        ...state,
        redirect: action.redirect,
      }

    default:
      return state;
  }
}

export default patientReducer;
