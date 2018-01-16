'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Promise } from 'es6-promise'
import assign from 'es6-object-assign'

assign.polyfill()
Promise.polyfill()

import configureRoutes from './routes'
import configureStore from './store'

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const routes = configureRoutes(store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
)