import React, { useEffect, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
// import AuthNavbar from '../components/AuthNavbar';
import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
import colours from '../constants/colours';
// import routes from '../routes';
// import Sidebar from '../components/mini-components/Sidebar';

const Layout = ({ children, currentUser, checkUserLoggedIn }) => {
    const history = useHistory();
    useLayoutEffect(() => {
        (async () => {
            await checkUserLoggedIn();
        })();
    }, []);
    useEffect(() => {
        // redirect to the dashbord only if the login or registration is sucessfull
        if (
            currentUser.fname &&
            (history.location.pathname.includes('login') ||
                history.location.pathname.includes('register'))
        ) {
            return history.push('/');
        }
    }, [currentUser]);

    return (
        <Box w="100%" h="100vh" bg={colours.lightest_gray}>
            {/** TODO: check if user is logged in and conditionally render different headers */}
            {/* <AuthNavbar /> */}
            {/* <Sidebar /> */}
            <Header />
            {children}
        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    currentUser: PropTypes.object.isRequired,
    checkUserLoggedIn: PropTypes.func.isRequired,
};

export default Layout;
