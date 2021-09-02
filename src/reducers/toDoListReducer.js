import { SET_LABEL, SAVE_TASKS } from 'src/actions/toDoList';

const initialState = {
  label: '',
  tasks: [],
};

function toDoListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LABEL:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      }
    default:
      return state;
  }
}

export default toDoListReducer;
