import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioRow = ({ name, amountInv, growth, noOfTrades }) => (
    <div className="flex flex-col md:flex-row md:items-center border-b px-6 py-4  min-w-0 text-gray-600">
        <Link
            to="/port-1"
            className="w-40 mr-5 text-xl flex font-bold leading-7 rounded text-indigo-700 sm:leading-9 sm:truncate"
        >
            <span className="">{name}</span>
        </Link>

        {/* <div className="mt-5  md:mt-0 flex flex-col md:flex-row flex-wrap space-x-0 md:space-x-6 space-y-2 md:space-y-0"> */}
        <div className="w-full md:w-40 text-sm leading-5 text-gray-900 flex-no-wrap">
            <span className="mr-4 text-gray-500">Value: </span>
            {amountInv}
        </div>
        <div className="w-full md:w-40 text-sm leading-5 text-gray-900 flex-no-wrap">
            <span className="mr-4 text-gray-500">Growth: </span>
            {growth}
        </div>
        <div className="w-full md:w-40 text-sm leading-5 text-gray-900 flex-no-wrap">
            <span className="mr-4 text-gray-500">Trades: </span>
            {noOfTrades}
        </div>
        {/* </div> */}
    </div>
);

export default PortfolioRow;
