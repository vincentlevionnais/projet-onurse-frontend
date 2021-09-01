import {
  UPDATE_LOGIN_FIELD, CONNECT_USER, LOG_OUT,
  TOKEN_PERSIST, TO_LOGIN, SAVE_USER_INFOS,
  TOGGLE_POPUP,
} from 'src/actions/login';

const initialState = {
  // user's id
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
  isResetSubmit: true,
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

    default:
      return state;
  }
}

export default logReducer;
