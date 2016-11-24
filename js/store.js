import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

export default function configureStore(browserHistory) {
  const middleware = routerMiddleware(browserHistory);

  return createStore(
    rootReducer,
    applyMiddleware(middleware)
  );
}