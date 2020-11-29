import React, { useState } from 'react';
import Main from './wrapper/Main';
import Trade from '../components/Trade';
import Pagination from '../components/mini-components/Pagination';
import Tabs from '../components/Tabs';
import PortfolioStat from '../components/PortfolioStat';
import CreateTrade from '../components/modals/forms/CreateTrade';

const Portfolio = () => {
    const [hideModal, setHideModal] = useState('hidden');
    const [activeTab, setactiveTab] = useState('open');

    return (
        <Main>
            <div className="flex flex-col w-full lg:w-6/8">
                <h4 className="text-xl title-font font-medium leading-none text-indigo-700 mb-5 uppercase">Portfolio</h4>
                <PortfolioStat />
                <div className="flex justify-between items-center my-4">
                    <h4 className="text-xl title-font font-medium leading-none text-indigo-700 uppercase">trades</h4>
                    <div className="flex items-center">
                    <button
                          type="button" onClick={() => setHideModal('')}
                          className="py-2 px-4 rounded text-white bg-blue-500"
                        >
                          {' '}
                          New Trade
{' '}
                        </button>
                    <CreateTrade hideModal={hideModal} setHideModal={setHideModal} />
                  </div>
              </div>
                <div className="flex flex-col bg-white w-full h-full rounded-lg shadow borde">
                    <Tabs activeTab={activeTab} handleActiveTab={setactiveTab} />
                {tradesObject.filter((trade) => (activeTab === 'open' ? trade.exitPrice === '' : trade.exitPrice !== ''))
                        .map((trade) => <Trade key={trade.tradeId} trade={trade} />)}
                    <Pagination />
              </div>
          </div>
      </Main>
    );
};

export default Portfolio;

const tradesObject = [
    {
        name: 'LITC',
        tradeId: '1275',
        portId: '498625E',
        amountInv: '350 USDT',
        noOfCoins: '34.78',
        entryPrice: '10.2 USDT',
        stopLoss: '',
        exitPrice: '',
        percent: '',
        comment: '',
        entryDate: '14/10/2020',
        exitDate: '',
    },
    {
        name: 'WTCO',
        tradeId: '1276',
        portId: '498625E',
        amountInv: '150 USDT',
        noOfCoins: '50.56',
        entryPrice: '4.28 USDT',
        stopLoss: '2.78 USDT',
        exitPrice: '35',
        percent: '',
        comment: 'Whats on your mind',
        entryDate: '14/10/2020',
        exitDate: '',
    },
    {
        name: 'WTCO',
        tradeId: '1277',
        portId: '498625E',
        amountInv: '150 USDT',
        noOfCoins: '50.56',
        entryPrice: '4.28 USDT',
        stopLoss: '2.78 USDT',
        exitPrice: '35',
        percent: '',
        comment: 'Whats on your mind',
        entryDate: '14/10/2020',
        exitDate: '',
    },
];
