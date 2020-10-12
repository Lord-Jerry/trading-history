import React from 'react'
import { Link } from "react-router-dom"

const Tabs = () => {
    return (
        <section className="">
            
            <div className="container mx-auto flex flex-wrap flex-col">
                {/* <h4 className="text-2xl title-font font-medium leading-none text-indigo-700 mb-5">TRADES</h4> */}
                <div className="flex w-full border-b text-sm bg-gray-50 pt-2">
                    <Link to="/" className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b title-font font-medium inline-flex items-center leading-none border-indigo-500 bg-gray-50 text-indigo-700 tracking-wider">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>All
                    </Link>
                    <Link to="/" className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b title-font font-medium inline-flex items-center leading-none border-gray-200 text-gray-800 hover:text-indigo-500 tracking-wider">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>Open
                    </Link>
                    <Link to="/" className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b title-font font-medium inline-flex items-center leading-none border-gray-200 text-gray-800 hover:text-indigo-500 tracking-wider">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>Closed
                    </Link>
                </div>
            </div>
            </section>
    )
}

export default Tabs
