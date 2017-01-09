'use strict';

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/Root';
import HomeContainer from './containers/HomeContainer';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';
import RecipeDetailsContainer from './containers/RecipeDetailsContainer';

let configureRoutes = function (store) {
    let authRequired = function (nextState, replace) {
        if (!store.getState().auth.token) {
            // not signed in. redirect to sign in
            replace({
                pathname: 'SignIn',
                state: { nextPathname: nextState.location.pathname }
            });
        }
    }

    let routes = (
        <Route path="/" component={Root}>
            <Route path="Home" component={HomeContainer} onEnter={authRequired} />
            <Route path="Recipes/:recipeType/:recipeId" component={RecipeDetailsContainer} onEnter={authRequired} />
            <Route path="SignIn" component={SignInContainer} />
            <Route path="SignUp" component={SignUpContainer} />
            <Redirect from="*" to="/" />
        </Route>
    );

    return routes;
}

export default configureRoutes;