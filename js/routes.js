'use strict';

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/Root';
import Home from './component/Home';
import SignInContainer from './containers/SignIn';
import SignUpContainer from './containers/SignUp';

let configureRoutes = function (store) {
    let authRequired = function (nextState, replace) {
        if (!store.getState().auth.isAuthenticated) {
            // not signed in. redirect to sign in
            replace({
                pathname: '/SignIn',
                state: { nextPathname: nextState.location.pathname }
            });
        }
    }

    let routes = (
        <Route path="/" component={Root}>
            <IndexRoute path="Home" component={Home} onEnter={authRequired} />
            <Route path="/SignIn" component={SignInContainer} />
            <Route path="/SignUp" component={SignUpContainer} />
            <Redirect from="*" to="/" />
        </Route>
    );

}


export default configureRoutes;