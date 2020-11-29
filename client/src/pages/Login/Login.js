import React, { Fragment, useLayoutEffect } from 'react';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { loginFormik } from '../../constants/formik';

const Login = ({ loginUser, currentUser, history, authError, loading }) => {
    const formik = useFormik({
        ...loginFormik,
        onSubmit: async (values) => {
            await loginUser(values);
        },
    });

    useLayoutEffect(() => {
        console.log(currentUser, loading, 'user');
        if (!isEmpty(currentUser)) {
            history.push('/dashbord');
        }
    }, [currentUser]);

    return (
        <Fragment>
            <form onSubmit={formik.handleSubmit} className="mt-8" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm">
                    {formik.errors.email}
                    <input
                        aria-label="Email address"
                        name="email"
                        type="email"
                        required
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                        placeholder="Email address"
                    />
                    {authError ?? null}
                    {formik.errors.password}
                    <input
                        aria-label="Password"
                        name="password"
                        type="password"
                        required
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className="-mt-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                        placeholder="Password"
                    />
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <label
                            control="remember"
                            htmlFor="remember_me"
                            className="ml-2 block text-sm leading-5 text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm leading-5">
                        <Link
                            to="/dash"
                            onClick={() => sessionStorage.setItem('token', 'res.token')}
                            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        onClick={formik.handleSubmit}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg
                                className="h-5 w-5 text-blue-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        Sign in
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    authError: PropTypes.string,
    loading: PropTypes.bool,
};

Login.defaultProps = {
    currentUser: {},
    authError: '',
    loading: false,
};

export default Login;
