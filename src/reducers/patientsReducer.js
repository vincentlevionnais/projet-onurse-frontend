import {
  ADD_PATIENT,
} from 'src/actions/patients';

const initialState = {
  patients: {
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
  },
};

const patientsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
        patients: [...state.patients, newPatient],

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

    default:
      return state;
  }
};

export default patientsReducer;
