import { SET_LABEL, SAVE_TASKS, SET_TASKS_LOADED, ADD_TASK, REMOVE_TASK } from 'src/actions/toDoList';

const initialState = {
  label: '',
  tasks: [],
  tasksLoaded: false,
};

function toDoListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    case SET_LABEL:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_TASKS_LOADED:
      return {
        ...state,
        tasksLoaded: true,
      };
    case ADD_TASK:
      const newTask = {
        // propriété d'une tâche
      }

      return {
        ...state,
        tasks: [...tasks, newTask],
      };
    case REMOVE_TASK:
      const newListTasks = state.tasks.filter((items) => items.id !== action.id);
      return {
        ...state,
        tasks: [...newListTasks],
      };
      
    default:
      return state;
  }
}

export default toDoListReducer;
