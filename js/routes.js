'use strict'

import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Root from './components/Root'
import RecipesShell from './components/RecipesShell'
import RecipesListsContainer from './containers/RecipesListsContainer'
import AuthContainer from './containers/AuthContainer'
import CookRecipeContainer from './containers/CookRecipeContainer'
import EditRecipeContainer from './containers/EditRecipeContainer'
import NewRecipeContainer from './containers/NewRecipeContainer'

let configureRoutes = function (store) {
    let authRequired = function (nextState, replace) {
        if (!store.getState().auth.token) {
            // not signed in. redirect to sign in
            replace({
                pathname: 'Auth',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    }

    let routes = (
        <Route path="" name="root" component={Root}>
            <Route path="Recipes" name="recipes" component={RecipesShell} onEnter={authRequired}>
                <IndexRoute component={RecipesListsContainer} name="home" />
                <Route path=":recipeId/Cook" name="cook" component={CookRecipeContainer} />
                <Route path=":recipeId/Edit" name="edit" component={EditRecipeContainer} />
                <Route path="new" name="new" component={NewRecipeContainer} />
            </Route>
            <Route path="Auth" name="auth" component={AuthContainer} />
            <Redirect from="*" to="Recipes" />
        </Route>
    )

    return routes
}

export default configureRoutes