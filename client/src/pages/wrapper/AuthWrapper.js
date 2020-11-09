import React from 'react'
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.svg"

const AuthWrapper = ({children, link, title, linkText}) => {
    return (
        <div className="max-w-md lg:w-2/6 mx-auto px-10 py-16 bg-white rounded-lg border-gray-600 shadow-2xl">
                <div>
                    <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                        <Link to={`/${link}`} className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            {linkText}
                        </Link>
                    </p>
                </div>

                {children}
        </div>
    )
}

export default AuthWrapper
