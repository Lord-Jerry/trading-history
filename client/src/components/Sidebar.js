/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Link } from '@chakra-ui/react';

const Sidebar = () => {
    const test = 12;

    return (
        <Box color="white" display="flex" flexDir="column" bg="#092A65" h="100vh" w="218px" paddingTop="4rem">
            <Link mr="auto" ml="auto" to="/"> Dashboard</Link>
            <Link mr="auto" ml="auto" to="/"> Trade</Link>
            <Link mr="auto" ml="auto" to="/"> Portfolio</Link>
        </Box>
    );
};

export default Sidebar;
