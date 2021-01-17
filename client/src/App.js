/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Layout from './Layout';
import store from './redux/store';
import routes from './routes';

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
};

const theme = extendTheme({ colors });

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <ChakraProvider theme={theme}>
                    <Layout>
                        <Suspense fallback="loading">
                            <Switch>
                                {Object.keys(routes).map((value) => {
                                    const { component: PageComponent } = routes[value];
                                    return (
                                        <Route
                                            key={value}
                                            exact
                                            path={value}
                                            render={(props) => <PageComponent {...props} title />}
                                        />
                                    );
                                })}
                            </Switch>
                        </Suspense>
                    </Layout>
                </ChakraProvider>
            </Router>
        </Provider>
    );
}
