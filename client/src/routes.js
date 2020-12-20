import React from 'react';
import { Route, Switch } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/Sign-up'));

export default () => (
    <Switch>
        <Route exact path="/" component={(props) => <LandingPage {...props} title />} />
        <Route exact path="/login" component={(props) => <Login {...props} title />} />
        <Route exact path="/register" component={(props) => <SignUp {...props} title />} />
    </Switch>
);
