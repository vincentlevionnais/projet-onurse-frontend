import { combineReducers } from 'redux';

// import all reducers
import patientReducer from './patientReducer';

const rootReducer = combineReducers({
  patients: patientReducer,
});

export default rootReducer;
