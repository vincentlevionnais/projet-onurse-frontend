import axios from 'axios';
import { SUBMIT_NEW_PATIENT, addPatient } from 'src/actions/patients';

const patientsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le autMiddleware: ', action);

  switch (action.type) {
    case SUBMIT_NEW_PATIENT: {
      const {
        lastName, firstName, dateOfBirth, phoneNumber, adress, complement, information,
        doctor, NIR, mutual, AMC, pathology, trustedPersonLastName, trustedPersonFirstName,
        relation, TrustedPersonPhoneNumber, TrustedPersonAdress
      } = store.getState().cal;

      axios.post(
        'http://35.173.138.41/projet-o-nurse/public/api/patients',
        {
          lastName: lastName,
          firstName: firstName,
          dateOfBirth: dateOfBirth,
          phoneNumber: phoneNumber,
          adress: adress,
          complement: complement,
          information: information,
          doctor: doctor,
          NIR: NIR,
          mutual: mutual,
          AMC: AMC,
          pathology: pathology,
          trustedPersonLastName: trustedPersonLastName,
          trustedPersonFirstName: trustedPersonFirstName,
          relation: relation,
          TrustedPersonPhoneNumber: TrustedPersonPhoneNumber,
          TrustedPersonAdress: TrustedPersonAdress,

        },
      )
        .then((response) => {
          console.log(response);

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
            response.data.NIR,
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
    }
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default patientsMiddleware;
