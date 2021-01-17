import React from 'react';
import { Box, Heading, Stack, Button, Link, Flex, Spacer, Divider, Alert } from '@chakra-ui/react';
import { useFormik, Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import BeInput from '../../components/BeInput';

import { loginFormik } from '../../constants/formik';
import colours from '../../constants/colours';

const Login = ({ loginUser, authError, loading, history }) => {
    const formik = useFormik({
        ...loginFormik,
        onSubmit: async (values) => {
            await loginUser(values);
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
                            Log In
                        </Heading>
                        <Divider />
                        <BeInput
                            name="email"
                            type="email"
                            label="Email address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            errorMessage={formik.touched.email && formik.errors.email}
                        />

                        <BeInput
                            name="password"
                            type="password"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
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
                            Submit
                        </Button>

                        <Flex>
                            <Link
                                onClick={() => history.push('/forgot-password')}
                                fontSize="14px"
                                textAlign="right"
                                justifyContent="right"
                                href="/"
                            >
                                Forgot Password?
                            </Link>
                            <Spacer />
                            <Link
                                onClick={() => history.push('/register')}
                                fontSize="14px"
                                textAlign="right"
                                justifyContent="right"
                                to
                            >
                                Create an account
                            </Link>
                        </Flex>
                    </Stack>
                </Box>
            </Form>
        </Formik>
    );
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    authError: PropTypes.string,
    loading: PropTypes.bool,
    history: PropTypes.object.isRequired,
};

Login.defaultProps = {
    authError: '',
    loading: false,
};

export default Login;
