import React from 'react'
import avatar from '../../assets/images/avatar.webp'

const Sidebar = () => {
    return (
        <div className="hidden md:flex flex-col lg:w-64 p-5 bg-white shadow border-gray-500 sm:rounded-lg">
                <img class="w-full mb-3 rounded-md bg-gray-500" src={avatar} alt="" />
                <div class="text-xl mb-1 leading-5 font-medium text-gray-900">
                    Jane Cooper
                </div>
                <div class="text-sm leading-5 mb-5 text-gray-500">
                    jane.cooper@example.com
                </div>
                <ul className="mb-3">Profile</ul>
                <details className="mb-3">
                    <summary>Portfolios</summary>
                    <span className="flex flex-col pt-3">
                        <a href="/" className="text-base mb-3 leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                            Portfolio 1
                        </a>
                        <a href="/" className="text-base mb-3 leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                            Portfolio 2
                        </a>
                        <a href="/" className="text-base mb-3 leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                            Portfolio 3
                        </a>
                    </span>
                </details>
                <a href="/" className="text-base mb-3 leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                    Portfolio 2
                </a>
                <a href="/dash" className="text-base mb-3 leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                    Settings
                </a>
                <a href="/dash/port-1" className="text-base mb-3 leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                    Logout
                </a>
            </div>
    )
}

export default Sidebar
