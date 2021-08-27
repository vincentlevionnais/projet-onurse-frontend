import {
  UPDATE_LOGIN_FIELD, CONNECT_USER, LOG_OUT, TOKEN_PERSIST, TO_LOGIN,
} from 'src/actions/login';

const initialState = {
  email: '',
  password: '',
  // to know if user is connect
  logged: false,
  token: localStorage.getItem('token'),
};

function logReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CONNECT_USER:
      localStorage.setItem('token', action.token);

      return {
        ...state,
        logged: true,
        token: localStorage.getItem('token'),
      };

    case LOG_OUT:
      localStorage.removeItem('token');

      return {
        ...state,
        logged: false,
        token: null,
      };

    case TO_LOGIN:
      return {
        ...state,
        logged: false,
      };

    case TOKEN_PERSIST:
      return {
        ...state,
        logged: true,
        token: action.token,
      };
    default:
      return state;
  }
}

export default logReducer;
