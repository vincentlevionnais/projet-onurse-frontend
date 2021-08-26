// actions type
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
export const LOG_OUT = 'LOG_OUT';
export const TO_LOGIN = 'TO_LOGIN';
export const TOKEN_PERSIST = 'TOKEN_PERSIST';

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
