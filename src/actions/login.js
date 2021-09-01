// actions type
/** update the login and password lost input value  */
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
/** submit the loginForm component input value */
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
/** use to connect user, adding token */
export const CONNECT_USER = 'CONNECT_USER';
/** use when the logOut button clicked, remove local storage token */
export const LOG_OUT = 'LOG_OUT';
/** use when token expire or removed */
export const TO_LOGIN = 'TO_LOGIN';
/** token persist in localstorage */
export const TOKEN_PERSIST = 'TOKEN_PERSIST';
/** use for get the user connected info */
export const FETCH_USER_INFOS = 'GET_USER_INFOS';
/** save the user connected info in state */
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';
/** use to open or close toggen */
export const TOGGLE_POPUP = 'TOGGLE_POPUP';
/** connect API and post email when password loosed */
export const MANAGE_POPUP_SUBMIT = 'MANAGE_POPUP_SUBMIT';
/** connect API and post password to modify it */
export const MANAGE_RESET_PASSWORD_SUBMIT = 'MANAGE_RESET_PASSWORD_SUBMIT';
/** redirect to login page */
export const LOG_AFTER_RESET = 'LOG_AFTER_RESET';

// action creator
export const updateLoginField = (newvalue, name) => ({
  type: UPDATE_LOGIN_FIELD,
  value: newvalue,
  name: name,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = (token) => ({
  type: CONNECT_USER,
  token: token,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const toLogin = () => ({
  type: TO_LOGIN,
});

export const tokenPersist = (token) => ({
  type: TOKEN_PERSIST,
  token: token,
});

export const fetchUserInfos = () => ({
  type: FETCH_USER_INFOS,
});

export const saveUserInfos = (id, firstname) => ({
  type: SAVE_USER_INFOS,
  id: id,
  firstname: firstname,
});

export const displayPopup = () => ({
  type: TOGGLE_POPUP,
});

export const managePopupSubmit = () => ({
  type: MANAGE_POPUP_SUBMIT,
});

export const manageResetPasswordSubmit = () => ({
  type: MANAGE_RESET_PASSWORD_SUBMIT,
});

export const logAfterReset = () => ({
  type: LOG_AFTER_RESET,
});
