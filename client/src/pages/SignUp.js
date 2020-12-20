import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import PageWrapper from './wrapper/PageWrapper';
import AuthWrapper from './wrapper/AuthWrapper';

const SignUp = ({ setisLogin }) => {
    const history = useHistory();

    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        userRegister();
        setisLogin(true);
        console.log('clik');
        history.push('/user');
    };

    // sessionStorage.setItem('token', token);
    // sessionStorage.setItem('id', response.userId);
    // let token = sessionStorage.getItem('token');

    const userRegister = async () => {
        await axios
            .post(
                'https://trading-history.herokuapp.com/api/v1/register',
                {
                    fullName,
                    email,
                    password,
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                },
            )
            .then((res) => {
                console.log(res);
                setisLogin(true);
                // sessionStorage.setItem('token', res.data.data.token)
                history.push('/user');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <PageWrapper>
            <AuthWrapper link="signin" title="Sign up now" linkText="Sign in instead">
                <form onSubmit={handleSubmit} className="mt-8" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm">
                        <input
                            aria-label="name"
                            name="name"
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setfullName(e.target.value)}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            placeholder="Full name"
                        />
                        <input
                            aria-label="Email address"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="-mt-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            placeholder="Email address"
                        />
                        <input
                            aria-label="Password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="-mt-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            placeholder="Password"
                        />
                        <input
                            aria-label="Password"
                            name="confirm-password"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                            className="-mt-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            placeholder="Confirm password"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
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
                            Sign Up
                        </button>
                    </div>
                </form>
            </AuthWrapper>
        </PageWrapper>
    );
};

export default SignUp;
