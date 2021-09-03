import {
  UPDATE_LOGIN_FIELD, CONNECT_USER, LOG_OUT,
  TOKEN_PERSIST, TO_LOGIN, SAVE_USER_INFOS,
  TOGGLE_POPUP, LOG_AFTER_RESET, GET_TOKEN_AND_REDIRECT,
} from 'src/actions/login';

const initialState = {
  // user's connected id
  id: '',
  email: '',
  password: '',
  // use in reset password component
  confirmationPassword: '',
  // use in home components
  firstname: '',
  // to know if user is connect
  logged: false,
  token: localStorage.getItem('token'),
  // password lost
  displayPopup: false,
  popupEmail: '',
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
      if (localStorage.getItem('resetToken')) {
        return {
          ...state,
          logged: false,
          token: localStorage.getItem('resetToken'),
        };
      }
      return {
        ...state,
        logged: true,
        token: action.token,
      };

    case SAVE_USER_INFOS:
      return {
        ...state,
        id: action.id,
        firstname: action.firstname,
      };

    case TOGGLE_POPUP:

      return {
        ...state,
        displayPopup: !state.displayPopup,
        popupEmail: '',
      };
    case LOG_AFTER_RESET:
      localStorage.removeItem('resetToken');

      return {
        ...state,
        password: '',
        confirmationPassword: '',
        token: null,
      };

    case GET_TOKEN_AND_REDIRECT:
      localStorage.setItem('resetToken', action.token);

      return {
        ...state,
        token: localStorage.getItem('resetToken'),
        displayPopup: false,
        password: '',
        popupEmail: '',
      };

    default:
      return state;
  }
}

export default logReducer;
