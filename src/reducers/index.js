import { combineReducers } from 'redux';

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
});

export default rootReducer;
