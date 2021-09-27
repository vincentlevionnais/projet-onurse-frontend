import axios from 'axios';
import moment from 'moment';
import {
  FETCH_EVENTS, saveEvents, MANAGE_EVENT_SUBMIT, addEvent,
  DROP_EVENT, updateAfterDrop, RESIZE_EVENT, updateAfterResize,
  updateOneEvent, DELETE_ONE_EVENT, deleteEvent, setEventsLoaded, SET_STATUS,
} from 'src/actions/bigCal';

const calMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_EVENTS: {
      axios.get(
        'http://34.201.19.168/projet-onurse-backend/public/api/appointments',

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveEvents(response.data));
        })
        .catch((error) => {
          // todo gerer l'erreur
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setEventsLoaded());
        });
      break;
    }
    case MANAGE_EVENT_SUBMIT: {
      const {
        id, reason, datetimeStart, datetimeEnd, patient, status,
      } = store.getState().cal;

      if (id === '') {
        /* ici je dois formater les dates pour l'envoi API
       /!\ lors du dispatch de mon action j'envoi les données non formater pour que le calendrier
       puisse les lire.
      */
        const datetimeStartGoodFormat = moment(datetimeStart).format();
        const datetimeEndGoodFormat = moment(datetimeEnd).format();
        const patientGoodFormat = parseInt(patient, 10);
        axios.post(
          'http://34.201.19.168/projet-onurse-backend/public/api/appointments',
          {
            reason: reason,
            datetimeStart: datetimeStartGoodFormat,
            datetimeEnd: datetimeEndGoodFormat,
            patient: patientGoodFormat,
            status: status,
          },

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
          .then((response) => {
            console.log(response);
            store.dispatch(addEvent(
              response.data.id,
              reason,
              datetimeStart,
              datetimeEnd,
              patient,
              status,
            ));
          })
          .catch((error) => {
            alert('Une erreur est survenue merci de réessayer');
          });
      }
      else {
        const datetimeStartGoodFormat = moment(datetimeStart).format();
        const datetimeEndGoodFormat = moment(datetimeEnd).format();
        const patientGoodFormat = parseInt(patient, 10);

        axios.put(
          `http://34.201.19.168/projet-onurse-backend/public/api/appointments/${id}`,
          {
            reason: reason,
            datetimeStart: datetimeStartGoodFormat,
            datetimeEnd: datetimeEndGoodFormat,
            patient: patientGoodFormat,
            status: status,
          },

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
          .then((response) => {
            store.dispatch(updateOneEvent(
              id,
              reason,
              datetimeStart,
              datetimeEnd,
              patient,
              status,
            ));
          })
          .catch((error) => {
            alert('Une erreur est survenue merci de réessayer');
          });
      }
    }
      break;

    case DROP_EVENT: {
      /* ici je dois formater les dates pour l'envoi API
       /!\ lors du dispatch de mon action j'envoi les données non formater pour que le calendrier
       puisse les lire.
      */
      const datetimeStartGoodFormat = moment(action.datetimeStart).format();
      const datetimeEndGoodFormat = moment(action.datetimeEnd).format();
      axios.put(
        `http://34.201.19.168/projet-onurse-backend/public/api/appointments/${action.id}`,
        {
          id: action.id,
          datetimeStart: datetimeStartGoodFormat,
          datetimeEnd: datetimeEndGoodFormat,
        },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(updateAfterDrop(
            action.id,
            action.datetimeStart,
            action.datetimeEnd,
          ));
         // alert('Modification effectué');
        })
        .catch((error) => {
          alert('une erreur est survenue, merci de réessayer');
        });
    }
      break;
    case RESIZE_EVENT: {
      /* ici je dois formater les dates pour l'envoi API
       /!\ lors du dispatch de mon action j'envoi les données non formater pour que le calendrier
       puisse les lire.
      */
      const datetimeStartGoodFormat = moment(action.datetimeStart).format();
      const datetimeEndGoodFormat = moment(action.datetimeEnd).format();

      axios.put(
        `http://34.201.19.168/projet-onurse-backend/public/api/appointments/${action.id}`,
        {
          id: action.id,
          datetimeStart: datetimeStartGoodFormat,
          datetimeEnd: datetimeEndGoodFormat,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(updateAfterResize(
            action.id,
            action.datetimeStart,
            action.datetimeEnd,
          ));
          // alert('Modification effectué');
        })
        .catch((error) => {
          alert('une erreur est survenue, merci de réessayer');
        });
    }
      break;
    case DELETE_ONE_EVENT:
      axios.delete(
        `http://34.201.19.168/projet-onurse-backend/public/api/appointments/${action.id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },

      )
        .then((response) => {
         // alert('Rendez-vous supprimé');

          store.dispatch(deleteEvent(action.id));
        })
        .catch((error) => {
          alert('une erreur est survenue, merci de réessayer');
        });
      break;
    case SET_STATUS:
      axios.put(
        `http://34.201.19.168/projet-onurse-backend/public/api/appointments/${action.id}`,
        {
          id: action.id,
          status: action.status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {

        })
        .catch((error) => {
          alert('une erreur est survenue, merci de réessayer');
        });
      break;
    default:
  }

  next(action);
};

export default calMiddleware;
