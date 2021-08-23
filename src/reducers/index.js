import { combineReducers } from 'redux';

// import all reducers
import patientReducer from './patientReducer';
import calReducer from './calReducer';
import logReducer from './logReducer';

const rootReducer = combineReducers({
  patients: patientReducer,
  cal: calReducer,
  log: logReducer,
});

export default rootReducer;
