'use strict';

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/Root';
import RecipesShellContainer from './containers/RecipesShellContainer';
import RecipesListsContainer from './containers/RecipesListsContainer';
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
            <Route path="Recipes" component={RecipesShellContainer} onEnter={authRequired}>
                <IndexRoute component={RecipesListsContainer} />
                <Route path=":recipeId/Cook" component={CookRecipeContainer} />
                <Route path=":recipeId/Edit" component={EditRecipeContainer} />
            </Route>
            <Route path="Auth" component={AuthContainer} />
            <Redirect from="*" to="Recipes" />
        </Route>
    );

    return routes;
}

export default configureRoutes;