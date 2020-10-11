import React from 'react'
import { Link } from "react-router-dom"
import heroImg from '../assets/images/hero-img.png'

const Home = ({ children }) => {
    return (
        <>
            <div className="flex-auto flex-col  h-full mb-10 lg:mb-0">
                <main class="max-w-screen-xl sm:mt-12 px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div class="text-center mx-auto lg:mx-0 lg:text-left">
                            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                Track and manage
                                <br class="xl:hidde" />
                                <span class="text-indigo-600">trades with ease</span>
                            </h2>
                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div class="mt-5 sm:mt-8 sm:flex flex-wrap sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                <Link to="/pricing" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                    Get started
                                </Link>
                                </div>
                                <div class="mt-3 sm:mt-0 sm:ml-3">
                                    <Link to="/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                        Live demo
                                    </Link>
                                </div>
                                {/* <button class="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-300 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
                                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                    </svg>

                                    <span class="ml-4 flex items-start flex-col leading-none">
                                        <span class="text-xs text-gray-600 mb-1">Download for</span>
                                        <span class="title-font font-medium">Mobile Device</span>
                                    </span>
                                </button> */}
                            </div>
                        </div>
                    </main>
            </div>
            
            <div className="lg:w-2/5">
                <img class="w-4/5 mb-3 rounded-md mr-auto" src={heroImg} alt="" />
            </div> 
        </>
        
    )
}

export default Home
