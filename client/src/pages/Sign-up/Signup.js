import React from 'react';
import { Box, Heading, Stack, Button, Flex, Divider, Text, Center, Alert } from '@chakra-ui/react';
import { useFormik, Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import BeInput from '../../components/BeInput';

import { signUpFormik } from '../../constants/formik';
import colours from '../../constants/colours';

const SignUp = ({ createUser, authError, loading }) => {
    const formik = useFormik({
        ...signUpFormik,
        onSubmit: async (values) => {
            await createUser(values);
        },
    });

    return (
        <Formik>
            <Form onSubmit={formik.handleSubmit} autoComplete="off">
                <Box
                    bg={colours.white}
                    w={{
                        base: '80%',
                        md: '40%',
                        xl: '25%',
                    }}
                    h="auto"
                    color={colours.black}
                    m="auto"
                    borderRadius="lg"
                    p="2em"
                >
                    <Stack spacing={4}>
                        {authError && (
                            <Alert variant="subtle" status="error">
                                {authError}
                            </Alert>
                        )}
                        <Heading textAlign="center" fontSize="24px" fontWeight="400">
                            Create an account
                        </Heading>
                        <Divider />
                        <Flex>
                            <BeInput
                                name="fname"
                                label="First name"
                                value={formik.values.fname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                errorMessage={formik.touched.fname && formik.errors.fname}
                            />
                            <Divider orientation="vertical" />
                            <BeInput
                                name="lname"
                                label="Last name"
                                value={formik.values.lname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                errorMessage={formik.touched.lname && formik.errors.lname}
                            />
                        </Flex>

                        <BeInput
                            name="email"
                            type="email"
                            label="Email address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorMessage={formik.touched.email && formik.errors.email}
                        />

                        <BeInput
                            name="password"
                            type="password"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorMessage={formik.touched.password && formik.errors.password}
                        />

                        <Button
                            mt={4}
                            bg="#3d96f5"
                            color={colours.white}
                            _hover="#9ea8c5"
                            isLoading={loading}
                            type="submit"
                        >
                            Create Account
                        </Button>

                        <Center>
                            <Text>Already registered? Login</Text>
                        </Center>
                    </Stack>
                </Box>
            </Form>
        </Formik>
    );
};

SignUp.propTypes = {
    createUser: PropTypes.func.isRequired,
    authError: PropTypes.string,
    loading: PropTypes.bool,
};

SignUp.defaultProps = {
    authError: '',
    loading: false,
};

export default SignUp;
