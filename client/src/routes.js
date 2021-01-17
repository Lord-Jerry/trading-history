import React from 'react';

const LandingPage = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/Sign-up'));
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));

export default {
    '/': {
        component: LandingPage,
        isProtected: false,
    },
    '/login': {
        component: Login,
        isProtected: false,
    },
    '/register': {
        component: SignUp,
        isProtected: false,
    },
    '/dashboard': {
        component: Dashboard,
        isProtected: true,
    },
};
