import axios from 'axios';
import { FETCH_PATIENTS, savePatients, SUBMIT_NEW_PATIENT, addPatient } from 'src/actions/patients';

const patientMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PATIENTS:
      axios.get('http://35.173.138.41/projet-o-nurse/public/api/patients')
        .then((response) => {
          // console.log(response);
          store.dispatch(savePatients(response.data));
        })
        .catch((error => {
          console.log(error);
        }));
      break;

    case SUBMIT_NEW_PATIENT:
      console.log(action);
      axios.post('http://35.173.138.41/projet-o-nurse/public/api/patients',
        {
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
          trustedPersonLastName: action.trustedPersonLastName,
          trustedPersonFirstName: action.trustedPersonFirstName,
          relation: action.relation,
          TrustedPersonPhoneNumber: action.TrustedPersonPhoneNumber,
          TrustedPersonAdress: action.TrustedPersonAdress,

        })
        .then((response) => {
          //  console.log(response);

          store.dispatch(addPatient(
            response.data.id,
            response.data.lastName,
            response.data.firstName,
            response.data.dateOfBirth,
            response.data.phoneNumber,
            response.data.adress,
            response.data.complement,
            response.data.information,
            response.data.doctor,
            response.data.nir,
            response.data.mutual,
            response.data.AMC,
            response.data.pathology,
            response.data.trustedPersonLastName,
            response.data.trustedPersonFirstName,
            response.data.relation,
            response.data.TrustedPersonPhoneNumber,
            response.data.TrustedPersonAdress,
          ));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally();

      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default patientMiddleware;
