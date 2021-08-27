import axios from 'axios';
import {
  FETCH_PATIENTS,
  savePatients,
  SUBMIT_NEW_PATIENT,
  addPatient,
  setPatientLoaded,
  UPDATE_PATIENT,
  updateOnePatient,
} from 'src/actions/patients';

const patientMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PATIENTS:
      axios.get('http://35.173.138.41/projet-o-nurse/public/api/patients',

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          // console.log(response);
          store.dispatch(savePatients(response.data));
        })
        .catch(((error) => {
          console.log(error);
        }))
        .finally(() => {
          store.dispatch(setPatientLoaded());
        });
      break;

    case SUBMIT_NEW_PATIENT:
      {
        console.log(action.patient);
        const {
          lastname,
          firstname,
          birthdate,
          phone,
          completeAdress,
          informationAdress,
          note,
          doctorName,
          nir,
          mutualName,
          mutualNumberAmc,
          pathology,
          trustedPerson,
        } = action.patient;
        console.log(lastname);
        axios.post('http://35.173.138.41/projet-o-nurse/public/api/patients',
          {
            lastname: (lastname.trim() === '' ? null : lastname),
            firstname: (firstname.trim() === '' ? null : firstname),
            birthdate: (birthdate.trim() === '' ? null : birthdate),
            phone: (phone.trim() === '' ? null : phone),
            completeAdress: (completeAdress.trim() === '' ? null : completeAdress),
            informationAdress: (informationAdress.trim() === '' ? null : informationAdress),
            note: (note.trim() === '' ? null : note),
            doctorName: (doctorName.trim() === '' ? null : doctorName),
            nir: (nir.trim() === '' ? null : nir),
            mutualName: (mutualName.trim() === '' ? null : mutualName),
            mutualNumberAmc: (mutualNumberAmc.trim() === '' ? null : mutualNumberAmc),
            pathology: (pathology.trim() === '' ? null : pathology),
            trustedPerson: (trustedPerson.trim() === '' ? null : trustedPerson),
          },

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          .then((response) => {
            //  console.log(response);

            store.dispatch(addPatient(
              response.data.id,
              response.data.lastname,
              response.data.firstname,
              response.data.birthdate,
              response.data.phone,
              response.data.completeAdress,
              response.data.informationAdress,
              response.data.note,
              response.data.doctorName,
              response.data.nir,
              response.data.mutualName,
              response.data.mutualNumberAmc,
              response.data.pathology,
              response.data.trustedPerson,
            ));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally();
      }
      break;
    case UPDATE_PATIENT:
      {
        console.log(action.patient);
        const {
          id,
          lastname,
          firstname,
          birthdate,
          phone,
          completeAdress,
          informationAdress,
          note,
          doctorName,
          nir,
          mutualName,
          mutualNumberAmc,
          pathology,
          trustedPerson,
        } = action.patient;
        console.log(lastname);
        axios.put(`http://35.173.138.41/projet-o-nurse/public/api/patients/${id}`,
          {
            id: id,
            lastname: (lastname.trim() === '' ? null : lastname),
            firstname: (firstname.trim() === '' ? null : firstname),
            birthdate: (birthdate.trim() === '' ? null : birthdate),
            phone: (phone.trim() === '' ? null : phone),
            completeAdress: (completeAdress.trim() === '' ? null : completeAdress),
            informationAdress: (informationAdress.trim() === '' ? null : informationAdress),
            note: (note.trim() === '' ? null : note),
            doctorName: (doctorName.trim() === '' ? null : doctorName),
            nir: (nir.trim() === '' ? null : nir),
            mutualName: (mutualName.trim() === '' ? null : mutualName),
            mutualNumberAmc: (mutualNumberAmc.trim() === '' ? null : mutualNumberAmc),
            pathology: (pathology.trim() === '' ? null : pathology),
            trustedPerson: (trustedPerson.trim() === '' ? null : trustedPerson),

          },

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          .then((response) => {
            //  console.log(response);

            store.dispatch(updateOnePatient(
              response.id,
              response.lastname,
              response.firstname,
              response.birthdate,
              response.phone,
              response.completeAdress,
              response.informationAdress,
              response.note,
              response.doctorName,
              response.nir,
              response.mutualName,
              response.mutualNumberAmc,
              response.pathology,
              response.trustedPerson,
            ));
          })
          .catch((error) => {
            console.log(error);
            alert('Une erreur est survenue, merci de réessayer');
          })
          .finally();
      }
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default patientMiddleware;
