import React from 'react';

const TopHoldings = () => (
    <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
        <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
            <div className="border-b flex">
                <h3 className="text-blue-dark pl-6 py-4 font-normal text-lg -mb-px">
                    Top Holdings
                </h3>
            </div>
            <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                    <div className="rounded-full bg-indigo-300 inline-flex mr-3">
                        <svg
                            className="fill-current text-white h-8 w-8 block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                        >
                            <g fillRule="evenodd">
                                <path d="M21.78 15.37c.51-.61.83-1.4.83-2.26 0-2.74-1.6-4.38-4.24-4.38V5.45c0-.12-.1-.22-.22-.22h-1.27c-.11 0-.2.1-.2.21v3.3h-1.7V5.44c0-.12-.1-.22-.22-.22H13.5c-.12 0-.2.1-.21.21v3.3H9.67c-.12 0-.21.09-.21.21v1.31c0 .12.1.22.21.22h.21c.94 0 1.7.79 1.7 1.75v7c0 .92-.68 1.67-1.55 1.75a.21.21 0 0 0-.18.16l-.33 1.32c-.01.06 0 .13.04.19.04.05.1.08.17.08h3.55v3.3c0 .1.1.2.2.2h1.28c.12 0 .21-.1.21-.22v-3.28h1.7v3.3c0 .1.1.2.21.2h1.27c.12 0 .22-.1.22-.22v-3.28h.85c2.65 0 4.24-1.64 4.24-4.37 0-1.28-.68-2.39-1.68-3zm-6.8-4.01h2.54c.94 0 1.7.78 1.7 1.75 0 .96-.76 1.75-1.7 1.75h-2.55v-3.5zm3.39 8.75h-3.4v-3.5h3.4c.93 0 1.7.78 1.7 1.75 0 .96-.77 1.75-1.7 1.75z" />
                            </g>
                        </svg>
                    </div>
                    <span className="text-lg">Bitcoin</span>
                </div>
                <div className="flex w-3/5 md:w/12">
                    <div className="w-1/2 px-4">
                        <div className="text-right">
                            0.0010
                            <span className="hidden md:inline">BTC</span>
                        </div>
                    </div>
                    <div className="w-1/2 px-4">
                        <div className="text-right text-grey">CA$21.28</div>
                    </div>
                </div>
            </div>
            <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                    <div className="rounded-full bg-blue-200 inline-flex mr-3">
                        <svg
                            className="fill-current text-white h-8 w-8 block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 38 38"
                        >
                            <g fillRule="evenodd">
                                <path d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z" />
                            </g>
                        </svg>
                    </div>
                    <span className="text-lg">Litecoin</span>
                </div>
                <div className="flex w-3/5 md:w/12">
                    <div className="w-1/2 px-4">
                        <div className="text-right">
                            0.0000
                            <span className="hidden md:inline">LTC</span>
                        </div>
                    </div>
                    <div className="w-1/2 px-4">
                        <div className="text-right text-grey">CA$0.00</div>
                    </div>
                </div>
            </div>
            <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                    <div className="rounded-full bg-indigo-200 inline-flex mr-3">
                        <svg
                            className="fill-current text-white h-8 w-8 block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                        >
                            <g fillRule="evenodd">
                                <path d="M10.13 17.76c-.1-.15-.06-.2.09-.12l5.49 3.09c.15.08.4.08.56 0l5.58-3.08c.16-.08.2-.03.1.11L16.2 25.9c-.1.15-.28.15-.38 0l-5.7-8.13zm.04-2.03a.3.3 0 0 1-.13-.42l5.74-9.2c.1-.15.25-.15.34 0l5.77 9.19c.1.14.05.33-.12.41l-5.5 2.78a.73.73 0 0 1-.6 0l-5.5-2.76z" />
                            </g>
                        </svg>
                    </div>
                    <span className="text-lg">Ethereum</span>
                </div>
                <div className="flex w-3/5 md:w/12">
                    <div className="w-1/2 px-4">
                        <div className="text-right">
                            0.0000
                            <span className="hidden md:inline">ETH</span>
                        </div>
                    </div>
                    <div className="w-1/2 px-4">
                        <div className="text-right text-grey">CA$0.00</div>
                    </div>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="text-center text-grey">Total Balance &asymp; CA$21.28</div>
            </div>
        </div>
    </div>
);

export default TopHoldings;
