import { combineReducers } from 'redux';

// import all reducers
import patientReducer from './patientReducer';
import calReducer from './calReducer';

const rootReducer = combineReducers({
  patients: patientReducer,
  cal: calReducer,
});

export default rootReducer;
