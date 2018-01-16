import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { loadState, saveState } from './localStorage'
import rootReducer from './reducers'

export let store

export default function configureStore(browserHistory) {
  const middleware = routerMiddleware(browserHistory)

  var persistedState = loadState()
  store =  createStore(
    rootReducer,
    persistedState,
    applyMiddleware(middleware)
  )

  store.subscribe(() => {
    saveState({
      auth: store.getState().auth
    })
  })

  return store
}