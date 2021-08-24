import { UPDATE_LOGIN_FIELD, CONNECT_USER, LOG_OUT } from 'src/actions/login';

import { set, remove } from 'src/utils/cookies';

const initialState = {
  email: '',
  password: '',
  // indique si l'utilisateur est authentifié
  logged: false,
};

function logReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CONNECT_USER: {
      const options = { path: '/' };

      set('token', action.token, options);

      return {
        ...state,
        logged: true,
      };
    }
    case LOG_OUT:
      remove('token');

      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
}

export default logReducer;
