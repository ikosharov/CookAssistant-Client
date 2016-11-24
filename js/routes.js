'use strict';

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/Root';

let routes = (
    <Route path="/" component={Root}>
        <Redirect from="*" to="/" />
    </Route>
);

export default routes;