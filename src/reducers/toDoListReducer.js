import { SET_LABEL, SAVE_TASKS, SET_TASKS_LOADED, ADD_TASK, REMOVE_TASK, SET_TASKS_STATUS } from 'src/actions/toDoList';
import { SET_TASK_STATUS } from '../actions/toDoList';

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
        id: action.id,
        taskName: action.taskName,
        status: action.status,
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
        label: '',
      };
      
    case REMOVE_TASK:
      const newListTasks = state.tasks.filter((items) => items.id !== action.id);
      return {
        ...state,
        tasks: [...newListTasks],
      };
    case SET_TASK_STATUS: {
      const taskIndex = state.tasks.findIndex((item) => item.id === action.id);
      const newListTasks = [...state.tasks];
      newListTasks[taskIndex] = {
        ...newListTasks[taskIndex],
        status: action.status,
      };
      return {
        ...state,
        tasks: newListTasks,
      }; }
    default:
      return state;
  }
}

export default toDoListReducer;
