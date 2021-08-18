import axios from 'axios';
import { MANAGE_EVENT_SUBMIT, addEvent } from 'src/actions/bigCal';

const calMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le autMiddleware: ', action);

  switch (action.type) {
    case MANAGE_EVENT_SUBMIT: {
      // todo appel API
      const { titleEvent, startDateEvent, endDateEvent } = store.getState().cal;

      axios.post(
        'url API',
        {
          titleEvent: titleEvent,
          startDateEvent: startDateEvent,
          endDateEvent: endDateEvent,
        },
      )
        .then((response) => {
          // console.log(response);
          // todo qu'est ce que le back me retourne??
          // todo à minima l'id de l'event
          /* response.data.titleEvent,
            response.data.startDateEvent,
            response.data.endDateEvent, */

          store.dispatch(addEvent(
            response.data.id,
            titleEvent,
            startDateEvent,
            endDateEvent,
          ));
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          // ! enlever ce bloc .then quand le endpoint API sera OK, 
          // ! il ne sert qu'a faire un test d'ajout de l'event à l'ecran
          const id = '1';

          store.dispatch(addEvent(
            id,
            titleEvent,
            startDateEvent,
            endDateEvent,
          ));
        });
    }
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default calMiddleware;
