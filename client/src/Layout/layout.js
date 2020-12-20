import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import AuthNavbar from '../components/AuthNavbar';
import colours from '../constants/colours';
// import Sidebar from '../components/mini-components/Sidebar';

const Layout = ({ children, currentUser, history }) => {
    useEffect(() => {
        // redirect to the dashbord only if the login or registration is sucessful
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
            <AuthNavbar />
            {children}
        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    currentUser: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default Layout;
