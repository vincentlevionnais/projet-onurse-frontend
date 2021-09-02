import axios from 'axios';

import { FETCH_TASKS, saveTasks } from 'src/actions/toDoList';

const TaskMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TASKS:
      axios.get('http://35.173.138.41/projet-o-nurse/public/api/tasks',

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          // console.log(response);
          store.dispatch(saveTasks(response.data));
        })
        .catch(((error) => {
          console.log(error);
        }))
        .finally(() => {
          //store.dispatch(setPatientLoaded());
          // TODO
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default taskMiddleware;
