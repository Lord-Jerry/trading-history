import React from 'react';

const PortfolioStat = () => (
    <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 space-x-0 md:space-x-10">
        {statData.map((stat) => (
            <div className="lg:w-1/3 md:w-1/2 w-full flex items-center bg-white border border-gray-200 p-4 rounded-lg">
                <span className="w-16 h-16 flex items-center justify-around bg-gray-100 text-indigo-500 tracking-wider rounded-full mr-4">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </span>
                <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium text-3xl">{stat[1]}</h2>
                    <p className="text-gray-500">{stat[0]}</p>
                </div>
            </div>
        ))}
    </div>
);

export default PortfolioStat;

const statData = [
    ['Portfolio value', '$4,351.00'],
    ['Portfolio growth', '55.37%'],
    ['Open Trades', 21],
];
