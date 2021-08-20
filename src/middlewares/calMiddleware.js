import axios from 'axios';
import moment from 'moment';
import {
  FETCH_EVENTS, saveEvents, MANAGE_EVENT_SUBMIT, addEvent, DROP_EVENT, updateAfterDrop,
  RESIZE_EVENT, updateAfterResize, UPDATE_ONE_EVENT,
} from 'src/actions/bigCal';

const calMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le autMiddleware: ', action);

  switch (action.type) {
    case FETCH_EVENTS:
      axios.get(
        'http://35.173.138.41/projet-o-nurse/public/api/appointments',
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveEvents(response.data));
        })
        .catch((error) => {
          // todo gerer l'erreur
          console.log(error);
        });

    case MANAGE_EVENT_SUBMIT: {
      // todo appel API
      const { reason, datetimeStart, datetimeEnd } = store.getState().cal;
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
    }
      break;

    case DROP_EVENT:
      axios.post(
        'url API',
        {
          id: action.id,
          datetimeStart: action.datetimeStart,
          datetimeEnd: action.datetimeEnd,
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
        })
        .catch((error) => {
          // todo gerer l'erreur, alert avec message et
          // todo ouverture auto du popup pour nouvel essaie?
          console.log(error);
        })
        .finally(() => {
          // ! enlever ce bloc .then quand le endpoint API sera OK,
          // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
          store.dispatch(updateAfterDrop(
            action.id,
            action.datetimeStart,
            action.datetimeEnd,
          ));
        });
      break;
    case RESIZE_EVENT:
      console.log(action.id);
      console.log(action.datetimeStart);
      console.log(action.datetimeEnd);

      axios.post(
        'url API',
        {
          id: action.id,
          datetimeStart: action.datetimeStart,
          datetimeEnd: action.datetimeEnd,
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
        })
        .catch((error) => {
          // todo gerer l'erreur, alert avec message et
          // todo ouverture auto du popup pour nouvel essaie?
          console.log(error);
        })
        .finally(() => {
          console.log('je passe par finally resize');
          // ! enlever ce bloc .then quand le endpoint API sera OK,
          // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
          store.dispatch(updateAfterResize(
            action.id,
            action.datetimeStart,
            action.datetimeEnd,
          ));
        });
      break;
      // case UPDATE_ONE_EVENT:
      //   console.log(action.value);
      //   const { reason, datetimeStart, datetimeEnd } = store.getState().cal;

      //     return {
      //       ...state,
      //       reason: action.value
      //     }

    //   break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default calMiddleware;
