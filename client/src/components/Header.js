/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import colours from '../constants/colours';

const Header = () => {
    const test = 1234;

    return (
        <Flex
            // position="fixed"
            pl="3em"
            pr="3em"
            d="flex"
            w="100%"
            h="5em"
            bg="transparent"
            top="0"
            justifyContent="center"
        >
            <Heading m="auto" size="lg">
                Trade Journal
            </Heading>
            <Spacer />
            <Flex m="auto">
                <Button size="md" bg="#006aff" color="white" mr="1em">
                    Sign In
                </Button>
                <Button size="md" border="1px solid #006aff" bg="white" color="#006aff" ml="1em">
                    Sign Up
                </Button>
            </Flex>
        </Flex>
    );
};

export default Header;
