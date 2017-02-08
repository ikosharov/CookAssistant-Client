'use strict';

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/Root';
import RecipesContainer from './containers/RecipesContainer';
import AuthenticatedContainer from './containers/AuthenticatedContainer';
import AuthContainer from './containers/AuthContainer';
import CookRecipeContainer from './containers/CookRecipeContainer';
import EditRecipeContainer from './containers/EditRecipeContainer';

let configureRoutes = function (store) {
    let authRequired = function (nextState, replace) {
        if (!store.getState().auth.token) {
            // not signed in. redirect to sign in
            replace({
                pathname: 'Auth',
                state: { nextPathname: nextState.location.pathname }
            });
        }
    }

    let routes = (
        <Route path="" component={Root}>
            <Route path="App" component={AuthenticatedContainer} onEnter={authRequired}>
                <Route path="Recipes" component={RecipesContainer} />
                <Route path="Recipes/:recipeId/Cook" component={CookRecipeContainer} />
                <Route path="Recipes/:recipeId/Edit" component={EditRecipeContainer} />
                <Redirect from="*" to="Recipes" />
            </Route>
            <Route path="Auth" component={AuthContainer} />
            <Redirect from="*" to="App/Recipes" />
        </Route>
    );

    return routes;
}

export default configureRoutes;