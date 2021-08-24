import { combineReducers } from 'redux';

// import all reducers
import patientReducer from './patientReducer';
import calReducer from './calReducer';
import logReducer from './logReducer';
import createAccountReducer from './createAccountReducer';

const rootReducer = combineReducers({
  patients: patientReducer,
  cal: calReducer,
  log: logReducer,
  create: createAccountReducer,
});

export default rootReducer;
