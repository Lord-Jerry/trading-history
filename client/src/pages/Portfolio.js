import React from 'react'
import Main from './wrapper/Main'
import Trades from '../components/Trades'
import PortfolioStat from './PortfolioStat'


const Portfolio = () => {
    return (
        <Main>
            <div className="flex flex-col w-full lg:w-6/8">
                <h4 className="text-1xl title-font font-medium leading-none text-indigo-700 mb-5">PORTFOLIO 1</h4>
                <PortfolioStat />
                <Trades />
            </div>
        </Main>
    )
}

export default Portfolio
