import React from 'react';
import ModalWrapper from './ModalWrapper';

const Modal = ({ hideModal, setHideModal, trade, tradeStatus, tradeStatusText }) => (
    <ModalWrapper hideModal={hideModal}>
        <div className="w-full bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center flex-wrap min-w-md text-gray-600">
                    <span
                        href="/"
                        className="px-2 py-1 text-xl flex items-center justify-around font-bold leading-7 rounded w-24 bg-gray-100 text-indigo-700 sm:leading-9 sm:truncate"
                    >
                        {trade.name}
                    </span>

                    <div className="pt-5 w-xl md:mt-0 flex flex-row flex-wrap items-cente">
                        <div className="text-sm leading-5 text-gray-500 flex-no-wrap mr-5">
                            Entry Price:
                            <span className="ml-4 text-gray-900">{trade.entryPrice}</span>
                        </div>
                        <div className="text-sm leading-5 text-gray-500 mr-5">
                            <span className="text-gray-900">{trade.noOfCoins}</span> Units
                        </div>
                        <div className={`text-xs leading-5 font-semibold text-${tradeStatus}-800`}>
                            <span className={`px-2 py-1 bg-${tradeStatus}-100 rounded-lg`}>
                                {tradeStatusText}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                    Deactivate
                </button>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                    type="button"
                    onClick={() => setHideModal()}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                    Cancel
                </button>
            </span>
        </div>
    </ModalWrapper>
);

export default Modal;
