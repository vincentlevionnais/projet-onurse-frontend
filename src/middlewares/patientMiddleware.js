import axios from 'axios';
import { FETCH_PATIENTS, savePatients, setPatientLoaded } from 'src/actions/patients';

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
        }))
        .finally (() => {
          store.dispatch(setPatientLoaded());
        })
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default patientMiddleware;
