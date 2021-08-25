// actions type
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
export const LOG_OUT = 'LOG_OUT';

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
