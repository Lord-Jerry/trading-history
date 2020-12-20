import React, { useState } from 'react';
import ViewTrade from './modals/ViewTrade';

const Trade = ({ trade }) => {
    const [hideModal, setHideModal] = useState('hidden');
    const [dropModal, setDropModal] = useState(false);

    const toggleDropModal = () => {
        dropModal ? setHideModal('hidden') : setHideModal('');
        setDropModal(!dropModal);
        console.log('modal', dropModal);
    };
    const tradeStatus = trade.exitPrice === '' ? 'green' : 'red';
    const tradeStatusText = trade.exitPrice === '' ? 'open' : 'closed';

    return (
        <div className="lg:flex lg:items-center lg:justify-between px-6 py-4 bg-white border-b">
            <div className="flex items-center flex-wrap min-w-0 text-gray-600">
                <a
                    href="/"
                    className="mr-5 text-xl flex items-center justify-around font-bold leading-7 rounded w-24 bg-gray-100 text-indigo-700 sm:leading-9 sm:truncate"
                >
                    <span className="px-2 py-1">{trade.name}</span>
                </a>

                <div className="sm:mt-5  md:mt-0 flex flex-col lg:flex-row flex-wrap items-cente space-x-0 md:space-x-8 space-y-2 md:space-y-0">
                    <div className="text-sm leading-5 text-gray-500 flex-no-wrap">
                        Entry Price:
                        <span className="ml-4 text-gray-900">{trade.entryPrice}</span>
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                        <span className="text-gray-900">{trade.noOfCoins}</span> Units
                    </div>
                    <div className={`text-xs leading-5 font-semibold text-${tradeStatus}-800`}>
                        <span className={`px-2 py-1 bg-${tradeStatus}-100 rounded-lg`}>
                            {tradeStatusText}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className=" shadow-sm rounded-md">
                    <button
                        type="button"
                        onClick={(e) => toggleDropModal()}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                    >
                        <svg className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                clipRule="evenodd"
                            />
                        </svg>
                        View
                    </button>
                </span>

                <ViewTrade
                    hideModal={hideModal}
                    trade={trade}
                    tradeStatus={tradeStatus}
                    tradeStatusText={tradeStatusText}
                    setHideModal={toggleDropModal}
                />

                <span className="ml-3 shadow-sm rounded-md">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        <svg className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Close
                    </button>
                </span>
            </div>
        </div>
    );
};

export default Trade;
