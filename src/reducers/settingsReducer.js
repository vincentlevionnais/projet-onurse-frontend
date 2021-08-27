import { UPDATE_SETTINGS_FIELD } from 'src/actions/settings';

const initialState = {
  email: '',
  confirmationEmail: '',

  password: '',
  confirmationPassword: '',
};

function logReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SETTINGS_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}

export default logReducer;
