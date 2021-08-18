// import axios from 'axios';
import { MANAGE_EVENT_SUBMIT, addEvent } from 'src/actions/bigCal';

const calMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le autMiddleware: ', action);

  switch (action.type) {
    case MANAGE_EVENT_SUBMIT: {
      // todo appel API
      // const { titleEvent, startDateEvent, endDateEvent } = store.getState().cal;

      // axios.post(
      //   'url API',
      //   {
      //     titleEvent: titleEvent,
      //     startDateEvent: startDateEvent,
      //     endDateEvent: endDateEvent,
      //   },
      // )
      //   .then((response) => {
      //     store.dispatch(addEvent(
      //       response.data.titleEvent,
      //       response.data.startDateEvent,
      //       response.data.endDateEvent,
      //     ));
      //     // console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default calMiddleware;
