import React from 'react';
import { Provider } from 'react-redux';
import { sagaMiddleware, configureStore  } from './store/configureStore'
import rootSaga from './sagas/';
import { loadState, saveState } from './localStorage';
import AppRouter from './appRouter/AppRouter';

const presistedState = loadState();
const store = configureStore(presistedState);

store.subscribe(() => {
  const { notification, dialog, ...dataStates } = store.getState();
  saveState({ ...dataStates });
});

sagaMiddleware.run(rootSaga);

const Main = () => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

export default Main;
export { store };