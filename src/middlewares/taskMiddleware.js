import axios from 'axios';

import { FETCH_TASKS, saveTasks, setTasksLoaded, SUBMIT_TASK, addTask, DELETE_TASK, removeTask } from 'src/actions/toDoList';

const taskMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TASKS:
      console.log('fetch tasks');
      axios.get('http://35.173.138.41/projet-o-nurse/public/api/tasks',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(saveTasks(response.data));
        })
        .catch(((error) => {
          console.log(error);
        }))
        .finally(() => {
          store.dispatch(setTasksLoaded());
        });
      break;
    
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default taskMiddleware;
