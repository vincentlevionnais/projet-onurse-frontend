import axios from 'axios';
import moment from 'moment';
import {
  FETCH_EVENTS, saveEvents, MANAGE_EVENT_SUBMIT, addEvent, DROP_EVENT, updateAfterDrop,
  RESIZE_EVENT, updateAfterResize, updateOneEvent, DELETE_ONE_EVENT, deleteEvent,
} from 'src/actions/bigCal';

const calMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le autMiddleware: ', action);

  switch (action.type) {
    case FETCH_EVENTS:
      axios.get(
        'http://35.173.138.41/projet-o-nurse/public/api/appointments',
      )
        .then((response) => {
          store.dispatch(saveEvents(response.data));
        })
        .catch((error) => {
          // todo gerer l'erreur
          console.log(error);
        });
      break;
    case MANAGE_EVENT_SUBMIT: {
      const {
        id, reason, datetimeStart, datetimeEnd,
      } = store.getState().cal;

      console.log(id);

      if (id === '') {
        /* ici je dois formater les dates pour l'envoi API
       /!\ lors du dispatch de mon action j'envoi les données non formater pour que le calendrier
       puisse les lire.
      */
        const datetimeStartGoodFormat = moment(datetimeStart).format();
        const datetimeEndGoodFormat = moment(datetimeEnd).format();
        axios.post(
          'http://35.173.138.41/projet-o-nurse/public/api/appointments',
          {
            reason: reason,
            datetimeStart: datetimeStartGoodFormat,
            datetimeEnd: datetimeEndGoodFormat,
          },
        )
          .then((response) => {
            store.dispatch(addEvent(
              response.data.id,
              reason,
              datetimeStart,
              datetimeEnd,
            ));
          })
          .catch((error) => {
            // todo gerer l'erreur, alert avec message et
            // todo ouverture auto du popup pour nouvel essaie?
            console.log(error);
          });
        // .finally(() => {
        //   console.log('je passe par finally');
        //   // console.log(datetimeStartGoodFormat);
        //   // console.log(datetimeEndGoodFormat);
        //   // ! enlever ce bloc .then quand le endpoint API sera OK,
        //   // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
        //   const idTest = '12';
        //   store.dispatch(addEvent(
        //     idTest,
        //     reason,
        //     datetimeStart,
        //     datetimeEnd,
        //   ));
        // });
      }
      else {
        const datetimeStartGoodFormat = moment(datetimeStart).format();
        const datetimeEndGoodFormat = moment(datetimeEnd).format();
        axios.put(
          `http://35.173.138.41/projet-o-nurse/public/api/appointments/${id}`,
          {
            reason: reason,
            datetimeStart: datetimeStartGoodFormat,
            datetimeEnd: datetimeEndGoodFormat,
          },
        )
          .then((response) => {
            store.dispatch(updateOneEvent(
              id,
              reason,
              datetimeStart,
              datetimeEnd,
            ));
          })
          .catch((error) => {
            // todo gerer l'erreur, alert avec message et
            // todo ouverture auto du popup pour nouvel essaie?
            console.log(error);
          });
        // .finally(() => {
        //   // console.log('je passe par finally');
        //   // console.log(datetimeStartGoodFormat);
        //   // console.log(datetimeEndGoodFormat);
        //   // ! enlever ce bloc .then quand le endpoint API sera OK,
        //   // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
        //   store.dispatch(updateOneEvent(
        //     id,
        //     reason,
        //     datetimeStart,
        //     datetimeEnd,
        //   ));
        // });
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
      console.log(datetimeStartGoodFormat);
      axios.put(
        `http://35.173.138.41/projet-o-nurse/public/api/appointments/${action.id}`,
        {
          id: action.id,
          datetimeStart: datetimeStartGoodFormat,
          datetimeEnd: datetimeEndGoodFormat,
        },
      )
        .then((response) => {
          // console.log(response);
          // todo le back me retourne un 201, alert avec un mot "ajout ok"??
          // todo et dispatch action
          store.dispatch(updateAfterDrop(
            action.id,
            action.datetimeStart,
            action.datetimeEnd,
          ));
          alert('Modification effectué');
        })
        .catch((error) => {
          // todo gerer l'erreur, alert avec message et
          // todo ouverture auto du popup pour nouvel essaie?
          alert('une erreur est survenue, merci de réessayer');
          console.log(error);
        });
      // .finally(() => {
      //   // ! enlever ce bloc .then quand le endpoint API sera OK,
      //   // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
      //   store.dispatch(updateAfterDrop(
      //     action.id,
      //     action.datetimeStart,
      //     action.datetimeEnd,
      //   ));
      // });
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
        `http://35.173.138.41/projet-o-nurse/public/api/appointments/${action.id}`,
        {
          id: action.id,
          datetimeStart: datetimeStartGoodFormat,
          datetimeEnd: datetimeEndGoodFormat,
        },
      )
        .then((response) => {
          // console.log(response);
          // todo le back me retourne un 201, alert avec un mot "ajout ok"??
          // todo et dispatch action
          store.dispatch(updateAfterResize(
            action.id,
            action.datetimeStart,
            action.datetimeEnd,
          ));
          alert('Modification effectué');
        })
        .catch((error) => {
          // todo gerer l'erreur, alert avec message et
          // todo ouverture auto du popup pour nouvel essaie?
          console.log(error);
          alert('une erreur est survenue, merci de réessayer');
        });
      // .finally(() => {
      //   console.log('je passe par finally resize');
      //   // ! enlever ce bloc .then quand le endpoint API sera OK,
      //   // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
      //   store.dispatch(updateAfterResize(
      //     action.id,
      //     action.datetimeStart,
      //     action.datetimeEnd,
      //   ));
      // });
    }
      break;
    case DELETE_ONE_EVENT:
      axios.delete(
        `http://35.173.138.41/projet-o-nurse/public/api/appointments/${action.id}`,

      )
        .then((response) => {
          alert('Rendez-vous supprimé');

          store.dispatch(deleteEvent(action.id));
        })
        .catch((error) => {
          console.log(error);
          alert('une erreur est survenue, merci de réessayer');
        });
      // .finally(() => {
      //   console.log('je passe par finally');
      //   console.log(datetimeStartGoodFormat);
      //   console.log(datetimeEndGoodFormat);
      //   // ! enlever ce bloc .then quand le endpoint API sera OK,
      //   // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
      //   const id = '12';
      //   store.dispatch(addEvent(
      //     id,
      //     reason,
      //     datetimeStart,
      //     datetimeEnd,
      //   ));
      // });
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default calMiddleware;
