import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom"

const SignUp = ({ setisLogin }) => {
    let history = useHistory()

    const [fullName, setfullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        userRegister()
        setisLogin(true)
        console.log('clik')
        history.push('/user')
    }

    // sessionStorage.setItem('token', token);
    // sessionStorage.setItem('id', response.userId);
    // let token = sessionStorage.getItem('token');

    const userRegister = async () => {
        await axios.post('https://trading-history.herokuapp.com/api/v1/register', {
            fullName, email, password
        }, 
        {headers: {"Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',}}
        )
            .then(res => {
                console.log(res)
                setisLogin(true)
                // sessionStorage.setItem('token', res.data.data.token)
                history.push('/user')
            })
            .catch(error => {
                console.log(error)
            }
            )
    }


    return (
        <div class="max-w-md m px-10 py-16 bg-white rounded-lg border-gray-600 shadow-2xl">
                    <div>
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                    <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Create an account
                    </h2>
                    <p class="mt-2 text-center text-sm leading-5 text-gray-600">
                        <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            Sign in instead
                        </a>
                    </p>
                    </div>
                    <form onSubmit={handleSubmit} class="mt-8" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded-md shadow-sm">
                        <input aria-label="name" 
                            name="name" type="text" required 
                            value={fullName}
                            onChange={e => setfullName(e.target.value)}
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            placeholder="Full name" 
                        />
                        <input aria-label="Email address" 
                            name="email" type="email" required 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            class="-mt-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" 
                            placeholder="Email address" 
                        />
                        <input aria-label="Password" 
                            name="password" type="password" required 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            class="-mt-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" 
                            placeholder="Password" 
                        />
                        <input aria-label="Password" 
                            name="confirm-password" type="password" required 
                            value={confirmPassword}
                            onChange={e => setconfirmPassword(e.target.value)}
                            class="-mt-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" 
                            placeholder="Confirm password" 
                        />
                    </div>

                    <div class="mt-6 flex items-center justify-between">
                        <div class="flex items-center">
                        <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
                            Remember me
                        </label>
                        </div>

                        <div class="text-sm leading-5">
                        <a href="/" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            Forgot your password?
                        </a>
                        </div>
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Sign Up
                        </button>
                    </div>
                    </form>
                </div>

    )
}

export default SignUp
