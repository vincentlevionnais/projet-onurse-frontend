import { UPDATE_SETTINGS_FIELD, CLEAN_INPUT } from 'src/actions/settings';

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

    case CLEAN_INPUT:

      return {

        ...state,
        email: '',
        confirmationEmail: '',
        password: '',
        confirmationPassword: '',
      };

    default:
      return state;
  }
}

export default logReducer;
