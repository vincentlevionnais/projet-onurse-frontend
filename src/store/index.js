import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

import calMiddleware from '../middlewares/calMiddleware';
import patientMiddleware from '../middlewares/patientMiddleware';
import logMiddleware from '../middlewares/logMiddleware';
import createMiddleware from '../middlewares/createMiddleware';
import settingsMiddleware from '../middlewares/settingsMiddleware';
import taskMiddleware from '../middlewares/taskMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    patientMiddleware,
    calMiddleware,
    logMiddleware,
    createMiddleware,
    settingsMiddleware,
    taskMiddleware,
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
