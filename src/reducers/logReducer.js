import { UPDATE_LOGIN_FIELD, CONNECT_USER, LOG_OUT } from 'src/actions/login';

const initialState = {
  email: '',
  password: '',
  // indique si l'utilisateur est authentifié
  logged: false,
  // token
  token: null,
};

function logReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CONNECT_USER:
      return {
        ...state,
        token: action.token,
        logged: true,
      };

    case LOG_OUT:
      // todo supprimer le tiroir en local storage?

      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
}

export default logReducer;
