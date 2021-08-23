import { combineReducers } from 'redux';

<<<<<<< HEAD
// on importe tous les reducers
import calReducer from './calReducer';
// import nomReducer2 from './reducer2';
// etc

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  cal: calReducer,
  // nomDuTiroir2: nomReducer2,
  // etc
=======
// import all reducers
import patientReducer from './patientReducer';

const rootReducer = combineReducers({
  patients: patientReducer,
>>>>>>> feature/FEATURE_DYNAMISATION_PATIENT_LIST
});

export default rootReducer;
