import React from 'react';
import PropTypes from 'prop-types';
import AuthNavbar from '../components/AuthNavbar';
import Sidebar from '../components/mini-components/Sidebar';

const Layout = ({ children }) => (
    <div className="App font-sans bg-gray-100 min-h-screen">
        {/** TODO: check if user is logged in and conditionally render different headers */}
        <AuthNavbar />
        <div className="container my-1 mx-auto flex flex-row space-x-0 lg:space-x-10 px-4">
            {/* <Sidebar /> */}
            {children}
      </div>
  </div>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
