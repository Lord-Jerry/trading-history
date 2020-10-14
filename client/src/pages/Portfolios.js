import React from 'react'
import Main from './wrapper/Main'
import Trade from '../components/Trade'
import Pagination from '../components/mini-components/Pagination'
import Tabs from '../components/Tabs'
import TopHoldings from '../components/TopHoldings'

const Portfolio = () => {
    return (
        <Main>
            <div className="flex flex-col w-full lg:w-6/8">
                <TopHoldings />
                <h4 className="text-1xl title-font font-medium leading-none text-indigo-700 mb-5">PORTFOLIOS</h4>
                <div className="mx-auto bg-white w-full h-full  rounded-lg shadow borde">
                    <Tabs />
                    <Trade />
                    <Trade />
                    <Trade />
                    <Trade />
                    <Trade />
                    <Pagination ></Pagination>
                </div>
            </div>
        </Main>
    )
}

export default Portfolio
