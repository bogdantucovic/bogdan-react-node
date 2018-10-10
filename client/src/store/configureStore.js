import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const configureStore = (presistedState) => (
  createStore(
    rootReducer,
    presistedState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
)

export { configureStore, sagaMiddleware }