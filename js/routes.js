'use strict';

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/Root';
import Home from './components/Home';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';

let configureRoutes = function (store) {
    let authRequired = function (nextState, replace) {
        if (!store.getState().auth.token) {
            // not signed in. redirect to sign in
            replace({
                pathname: '/SignIn',
                state: { nextPathname: nextState.location.pathname }
            });
        }
    }

    let routes = (
        <Route path="/" component={Root}>
            <IndexRoute component={Home} onEnter={authRequired} />
            <Route path="/SignIn" component={SignInContainer} />
            <Route path="/SignUp" component={SignUpContainer} />
            <Redirect from="*" to="/" />
        </Route>
    );

}


export default configureRoutes;