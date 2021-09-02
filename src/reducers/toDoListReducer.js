import { SET_LABEL } from 'src/actions/toDoList';

const initialState = {
  label: '',
};

function toDoListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LABEL:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}

export default toDoListReducer;
