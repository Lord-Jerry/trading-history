import React, {useState} from 'react'
import avatar from '../assets/images/avatar.webp'

const Navbar = ({ isLogin }) => {
    const [hide, setHide] = useState('hidden')
    const [drop, setDrop] = useState(false)
    const [mbDrop, setMbDrop] = useState('hidden')

    const toggleDrop = () => {
        drop ? setHide('hidden') : setHide('')
        setDrop(!drop)
    }
    return (
          <div className="relative z-20 bg-gray-100 shado-md">
            <div className="container max-w-7xl mx-auto px-4 sm:px-4">
              <div className="flex justify-between items-center border-gray-100 py-4 md:justify-start md:space-x-10">
                <div className="lg:w-0 md:flex-1">
                  <a href="/" className="flex items-center">
                      <div className="h-8 w-auto sm:h-10 text-indigo-700">
                          <svg fill="none" className="h-full w-auto" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                              <path fill="currentColor" d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"/>
                              <path fill="currentColor" d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"/>
                          </svg>
                      </div>
                      <div className=" text-indigo-700 hover:text-gray-900 text-3xl font-bold ml-3 md:ml-5">Tradelog</div>
                  </a>
                </div>
                
                <div className="-mr-2 -my-2 md:hidden">
                  <button type="button" onClick={e => setMbDrop('')} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                  { !isLogin ? 
                  <>
                    <a href="/" className="text-base leading-6 font-medium  text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                      Home
                    </a>
                    <a href="/pricing" className="text-base leading-6 font-medium  text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                      Pricing
                    </a>
                    <a href="/dash" className="text-base leading-6 font-medium  text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                      Dash
                    </a>
                    <a href="/signin" className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                      Sign in
                    </a>
                    <span className="inline-flex rounded-md shadow-sm">
                      <a href="/" className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                        Sign up
                      </a>
                    </span>
                  </>
                  :
                  <div class="relative inline-block text-left">
                          <div>
                              <span class="hover hover:cursor-pointer " onClick={e => toggleDrop()}>
                                <img class="h-10 w-10 rounded-full bg-gray-500" src={avatar} alt="" />
                              </span>
                          </div>

                          {/* <!--
                              Dropdown panel, show/hide based on dropdown state.

                              Entering: "transition ease-out duration-100"
                              From: "transform opacity-0 scale-95"
                              To: "transform opacity-100 scale-100"
                              Leaving: "transition ease-in duration-75"
                              From: "transform opacity-100 scale-100"
                              To: "transform opacity-0 scale-95"
                          --> */}
                          <div class={`${hide} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg`}>
                              <div class="rounded-md bg-white shadow-xs">
                              <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                  <a href="/" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Account settings</a>
                                  <a href="/" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Support</a>
                                  <a href="/" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">License</a>
                                  <form method="POST" action="#">
                                  <button type="submit" class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                      Sign out
                                  </button>
                                  </form>
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
                              </div>
                              </div>
                          </div>
                    </div>}
                </div>
              </div>
            </div>

              {/* Mobile menu, show/hide based on mobile menu state.

              Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95" */}
                {/* {`badge px-2 py-1 badge-${delivery[order.orderStatus]}`} */}
            <div className={`${mbDrop} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidde`}>
              <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5 space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                      </div>
                      <div className="-mr-2">
                        <button type="button" onClick={e => setMbDrop('hidden')} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <nav className="grid row-gap-8">
                        <a href="/" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Analytics
                          </div>
                        </a>
                        <a href="/" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Engagement
                          </div>
                        </a>
                        <a href="/" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Security
                          </div>
                        </a>
                        <a href="/" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Integrations
                          </div>
                        </a>
                        <a href="/" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                          <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <div className="text-base leading-6 font-medium text-gray-900">
                            Automations
                          </div>
                        </a>
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    
                    <div className="space-y-6">
                      <span className="w-full flex rounded-md shadow-sm">
                        <a href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                          Sign up
                        </a>
                      </span>
                      <p className="text-center text-base leading-6 font-medium text-gray-500">
                        Existing customer?
                        <a href="/" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                          Sign in
                        </a>
                      </p>
                      

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    )
}

export default Navbar
