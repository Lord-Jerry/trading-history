import React from 'react';
import { Route, Switch } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));

export default () => (
    <Switch>
        <Route exact path="/" component={(props) => <LandingPage {...props} title />} />
        <Route exact path="/login" component={(props) => <Login {...props} title />} />
    </Switch>
);
