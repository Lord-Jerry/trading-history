import React, { useState } from 'react';
import Trade from '../components/Trade'
import Pagination from '../components/mini-components/Pagination'
import Tabs from '../components/Tabs'
import Modal from '../components/mini-components/Modal'
import Sidebar from '../components/mini-components/Sidebar'


const Main = () => {
    const [hideModal, setHideModal] = useState('hidden')
    const [dropModal, setDropModal] = useState(false)

    const toggleDropModal = (a) => {
        dropModal ? setHideModal('hidden') : setHideModal('')
        setDropModal(!dropModal)
        console.log('modal', dropModal)
    }
    
    return (
        <div className="container my-1 mx-auto flex flex-row sm:space-x-0 md:space-x-10 px-4">
            
            <Sidebar />
            
            <div className="flex flex-col w-full lg:w-6/8">
                <h4 className="text-2xl title-font font-medium leading-none text-indigo-700 mb-5">PORTFOLIO 1</h4>
                
                <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 space-x-0 md:space-x-10">
                    <div class="lg:w-1/3 md:w-1/2 w-full flex items-center bg-white border border-gray-200 p-4 rounded-lg">
                        <span class="w-16 h-16 flex items-center justify-around bg-gray-100 text-indigo-500 tracking-wider rounded-full mr-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </span>
                    <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium text-3xl">$4,351.00</h2>
                            <p class="text-gray-500">Portfolio value</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full flex items-center bg-white border border-gray-200 p-4 rounded-lg">
                        <span class="w-16 h-16 flex items-center justify-around bg-gray-100 text-indigo-500 tracking-wider rounded-full mr-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </span>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium text-3xl">55.37%</h2>
                            <p class="text-gray-500">Portfolio growth</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full flex items-center bg-white border border-gray-200 p-4 rounded-lg">
                        <span class="w-16 h-16 flex items-center justify-around bg-gray-100 text-indigo-500 tracking-wider rounded-full mr-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </span>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium text-3xl">21</h2>
                            <p class="text-gray-500">Open Trades</p>
                        </div>
                    </div>
                    
                </div>

                <h4 className="text-xl title-font font-medium leading-none text-indigo-700 mt-8 mb-5">TRADES</h4>
                <div className="mx-auto bg-white w-full h-full  rounded-lg shadow borde">
                    <Tabs />
                    <Trade toggleDropModal={toggleDropModal} />
                    <Trade />
                    <Trade />
                    <Trade />
                    <Trade />
                    {/* <DescList /> */}
                    <Pagination ></Pagination>
                </div>
                <Modal hideModal={hideModal} setHideModal={toggleDropModal} />
            </div>
        </div>
    )
}

export default Main
