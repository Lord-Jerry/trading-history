import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from './Layout';
import store from './redux/store';
import history from './history';
import Routes from './routes';

// import Login from './pages/Login';
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import Portfolio from './pages/Portfolio';
// import Portfolios from './pages/Portfolios';
// import Footer from './components/mini-components/Footer';
// import SignUp from './pages/SignUp';
// import Pricing from './pages/Pricing';

export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <ChakraProvider>
                    <Layout>
                        <Suspense fallback="loading">
                            <Routes />
                        </Suspense>
                    </Layout>
                </ChakraProvider>
            </Router>
        </Provider>
    );
}
