import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

export let store;

export default function configureStore(browserHistory) {
  const middleware = routerMiddleware(browserHistory);

  store =  createStore(
    rootReducer,
    applyMiddleware(middleware)
  );

  return store;
}