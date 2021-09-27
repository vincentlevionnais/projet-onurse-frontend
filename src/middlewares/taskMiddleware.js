import axios from 'axios';

import {
  FETCH_TASKS,
  saveTasks,
  setTasksLoaded,
  SUBMIT_TASK,
  addTask,
  DELETE_TASK,
  removeTask,
  SET_TASK_STATUS
} from 'src/actions/toDoList';

const taskMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TASKS:
      console.log('fetch tasks');
      axios.get('http://34.201.19.168/projet-onurse-backend/public/api/tasks',
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
    case SUBMIT_TASK:
      const { label } = store.getState().task;
      axios.post(
        'http://34.201.19.168/projet-onurse-backend/public/api/tasks',
        {
          taskName: label,
          status: 0,
        },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(addTask(
            response.data.id,
            response.data.taskName,
            response.data.status,
          ));
        })
        .catch((error) => {
          alert('Une erreur est survenue merci de réessayer');
        });
        break;
      case DELETE_TASK:
        axios.delete(
          `http://34.201.19.168/projet-onurse-backend/public/api/tasks/${action.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
          .then((response) => {
            store.dispatch(removeTask(action.id));
          })
          .catch((error) => {
            alert('une erreur est survenue, merci de réessayer');
          });
        break;
      case SET_TASK_STATUS:
        axios.put(
          `http://34.201.19.168/projet-onurse-backend/public/api/tasks/${action.id}`,
          {
            id: action.id,
            status: action.status,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response) => {
          
        })
        .catch((error) => {
          console.log('une erreur est survenue, merci de réessayer');
        });
        break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default taskMiddleware;
