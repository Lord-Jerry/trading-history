import React from 'react';
import Main from './wrapper/Main';
import PortfolioStat from '../components/PortfolioStat';
import TopHoldings from '../components/TopHoldings';
import RecentActivities from '../components/RecentActivities';

const Dashboard = () => (
  <Main>
        <div className="font-sans flex flex-col space-y-10 min-h-screen w-full">
            <h4 className="text-xl title-font font-medium leading-none text-indigo-700 -mb-5">DASHBOARD</h4>
            <PortfolioStat />
            <div className="flex-grow container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <TopHoldings />
                    <RecentActivities />
              </div>
          </div>
    </div>
    </Main>
);

export default Dashboard;
