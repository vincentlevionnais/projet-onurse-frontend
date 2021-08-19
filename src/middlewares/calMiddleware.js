import axios from 'axios';
import { MANAGE_EVENT_SUBMIT, addEvent, DROP_EVENT, updateAfterDrop } from 'src/actions/bigCal';

const calMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le autMiddleware: ', action);

  switch (action.type) {
    case MANAGE_EVENT_SUBMIT: {
      // todo appel API
      const { reason, datetimeStart, datetimeEnd } = store.getState().cal;

      axios.post(
        'url API',
        {
          reason: reason,
          datetimeStart: datetimeStart,
          datetimeEnd: datetimeEnd,
        },
      )
        .then((response) => {
          // console.log(response);
          // todo qu'est ce que le back me retourne??
          // todo à minima l'id de l'event
          /* response.data.reason,
            response.data.datetimeStart,
            response.data.datetimeEnd, */

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
        })
        .finally(() => {
          console.log('je passe par finally');
          // ! enlever ce bloc .then quand le endpoint API sera OK, 
          // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
          const id = '12';
          store.dispatch(addEvent(
            id,
            reason,
            datetimeStart,
            datetimeEnd,
          ));
        });
    }
      break;

    case DROP_EVENT: {
      // todo appel API
      const { id, datetimeStart, datetimeEnd } = store.getState().cal;

      axios.post(
        'url API',
        {
          id: id,
          datetimeStart: datetimeStart,
          datetimeEnd: datetimeEnd,
        },
      )
        .then((response) => {
          // console.log(response);
          // todo qu'est ce que le back me retourne??
          // todo à minima l'id de l'event
          /* response.data.id,
            response.data.datetimeStart,
            response.data.datetimeEnd, */

          store.dispatch() // todo
        })
        .catch((error) => {
          // todo gerer l'erreur, alert avec message et 
          // todo ouverture auto du popup pour nouvel essaie?
          console.log(error);
        })
        .finally(() => {
          console.log('je passe par finally du drop');
          // ! enlever ce bloc .then quand le endpoint API sera OK, 
          // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
          const id = '22';
          store.dispatch(updateAfterDrop(
            id,
            datetimeStart,
            datetimeEnd,
          ));
        });
    }
    break
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default calMiddleware;
