import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

import calMiddleware from 'src/middlewares/calMiddleware';
import patientMiddleware from '../middlewares/patientMiddleware';
import logMiddleware from '../middlewares/logMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    patientMiddleware,
    calMiddleware,
    logMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
