import { combineReducers } from 'redux';

// import all reducers
import patientReducer from './patientReducer';
import calReducer from './calReducer';

// import nomReducer2 from './reducer2';
// etc

const rootReducer = combineReducers({
  patients: patientReducer,
  cal: calReducer,
  // nomDuTiroir2: nomReducer2,
  // etc
});

export default rootReducer;
