import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
<<<<<<< HEAD

import reducer from 'src/reducers';

import calMiddleware from 'src/middlewares/calMiddleware';
// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    calMiddleware,
=======
import reducer from 'src/reducers';
import patientMiddleware from '../middlewares/patientMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    patientMiddleware,
>>>>>>> feature/FEATURE_DYNAMISATION_PATIENT_LIST
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
<<<<<<< HEAD
  // enhancer
=======
  // enhancers
>>>>>>> feature/FEATURE_DYNAMISATION_PATIENT_LIST
  enhancers,
);

export default store;
