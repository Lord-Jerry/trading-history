import React, {useState} from 'react'
import { Link } from "react-router-dom"
import avatar from '../assets/images/avatar.webp'

const AuthNavbar = () => {
    const [hide, setHide] = useState('hidden')
    const [drop, setDrop] = useState(false)

    const toggleDrop = () => {
        drop ? setHide('hidden') : setHide('')
        setDrop(!drop)
    }
    return (
          <div class="bg-blue-700 mb-10">
            <div class="container mx-auto px-4">
              <div class="flex items-center md:justify-between py-4">
                <div class="w-1/4 md:hidden">
                  <svg class="fill-current text-white h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z" /></svg>
                </div>
                <Link to="/" class="w-1/2 md:w-auto text-center text-white text-2xl font-medium"> tradelog </Link>
                
                {/* <div class="w-1/4 md:w-auto md:flex text-right">
                  <div>
                    <img class="inline-block h-8 w-8 rounded-full" src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4" alt="" />
                  </div>
                  <div class="hidden md:flex md:items-center ml-2">
                    <span class="text-white text-sm mr-1">Adam Wathan</span>
                    <div>
                      <svg class="fill-current text-white h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>
                    </div>
                  </div>
                </div> */}

                <div class="relative inline-block text-left">
                          <div class=" " onClick={e => toggleDrop()}>
                            <div class="flex items-center ml-2 hover hover:cursor">
                              <img class="inline-block h-10 w-10 rounded-full bg-gray-500" src={avatar} alt="user avatar" />
                            
                              <span class="hidden md:inline-block text-white text-sm mx-2">Adam Wathan</span>
                              <div>
                                <svg class="fill-current text-white h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>
                              </div>
                            </div>
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
                                  <Link to="/" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Account settings</Link>
                                  <Link to="/" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Support</Link>
                                  <Link to="/" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">License</Link>
                                  <form method="POST" action="#">
                                  <button type="submit" class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                      Sign out
                                  </button>
                                  </form>
                                  <details className="mb-3">
                                      <summary>Portfolios</summary>
                                      <span className="flex flex-col pt-3">
                                          <Link to="/" className="text-base mb-3 leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                                              Portfolio 1
                                          </Link>
                                          <Link to="/" className="text-base mb-3 leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                                              Portfolio 2
                                          </Link>
                                          <Link to="/" className="text-base mb-3 leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                                              Portfolio 3
                                          </Link>
                                      </span>
                                  </details>
                              </div>
                              </div>
                          </div>
                    </div>


              </div>
            </div>
          </div>
    )
}

export default AuthNavbar
