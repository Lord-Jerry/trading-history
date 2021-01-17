/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Box, Button, Flex, Heading, Grid } from '@chakra-ui/react';

const Dashboard = () => {
    const test = 12;

    return (
        <Container maxW="95%">
            <Flex w="100%" justifyContent="space-between">
                <Heading>Dashboard</Heading>
                <Button>Create Portfolio</Button>
            </Flex>

            <Grid mt="2em" templateColumns="repeat(5, 1fr)" gap={6}>
                <Box textAlign="center" w="100%" h="6em" bg="white">
                    <h6>New Customeres</h6>
                    <h3>New Customeres</h3>
                    <p>Than last week</p>
                </Box>
                <Box w="100%" h="6em" bg="white" />
                <Box w="100%" h="6em" bg="white" />
                <Box w="100%" h="6em" bg="white" />
                <Box w="100%" h="6em" bg="white" />
            </Grid>
        </Container>
    );
};

export default Dashboard;
