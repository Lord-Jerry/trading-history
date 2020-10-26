import React, { useState } from 'react'
import PageWrapper from './wrapper/PageWrapper'
import axios from "../axios/axios"
import { useHistory, Link } from "react-router-dom"
import logo from "../assets/images/logo.svg"

const Login = () => {
    let history = useHistory()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setname] = useState("Popo Lee")

    const handleSubmit = (e) => {
        e.preventDefault()
        userLogin()
    }

    // sessionStorage.setItem('token', token);
    // sessionStorage.setItem('id', response.userId);
    // let token = sessionStorage.getItem('token');
    // 'content-type': 'application/x-www-form-urlencoded;charset=utf-8'

   
    const userLogin = async () => {
        // console.log({ name, email, password })
        // await axios.post(
        //     '/login', 
        //     { email, password }, 
        //     { headers: { "Content-Type": "application/json" }}
        //     )
        //     .then(res => {
        //         console.log(res)
        //         sessionStorage.setItem('token', res.token);
        //         history.push('/user')
        //     })
        //     .catch(error => console.log(error))
            try {
                const response = await axios.post('/register',
                { Name, Email, Password }, 
                { headers: { "Content-Type": "application/json" }}
                );
                console.log(response);
              } catch (error) {
                console.error(error);
              }
    }

    return (
        <PageWrapper>
            <div className="max-w-md lg:w-2/6 mx-auto px-10 py-16 bg-white rounded-lg border-gray-600 shadow-2xl">
                <div>
                    <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Sign in now
                        </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            Sign Up instead
                            </a>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm">
                        <input aria-label="Email address" 
                                name="email" type="email" required 
                                value={Email}
                                onChange={e => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" 
                                placeholder="Email address" 
                            />
                            <input aria-label="Password" 
                                name="password" type="password" required 
                                value={Password}
                                onChange={e => setPassword(e.target.value)}
                                className="-mt-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" 
                                placeholder="Password" 
                            />
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                            <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                                Remember me
                                </label>
                        </div>

                        <div className="text-sm leading-5">
                            <Link to="/dash" onClick={() => sessionStorage.setItem('token', "res.token")} className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button type="submit" onClick={() => userLogin()} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-blue-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                            </button>
                    </div>
                </form>
            </div>
        </PageWrapper>
    )
}

export default Login
