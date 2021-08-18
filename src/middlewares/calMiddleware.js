import axios from 'axios';
import { MANAGE_EVENT_SUBMIT, addEvent } from 'src/actions/bigCal';

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
          console.log(reason);
          console.log(datetimeStart);
          console.log(datetimeEnd);
        });
    }
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default calMiddleware;
