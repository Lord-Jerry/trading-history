import React, { useState } from 'react'
import Main from './wrapper/Main'
import PortfolioRow from '../components/PortfolioRow'
import Pagination from '../components/mini-components/Pagination'
import Tabs from '../components/Tabs'
import CreatePortfolio from "../components/modals/forms/CreatePortfolio"

const Portfolios = () => {
    const [hideModal, setHideModal] = useState("hidden")
    return (
        <Main>
            <div className="flex flex-col w-full lg:w-6/8">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl title-font font-medium leading-none text-indigo-700 uppercase">portfolios</h4>
                    <div className="flex items-center">
                    <button type="button" onClick={() => setHideModal("")}
                        className="py-1 px-4 rounded text-white bg-blue-500"
                    > New Portfolio </button>
                    <CreatePortfolio hideModal={hideModal} setHideModal={setHideModal} />
                    </div>
                </div>
                <div className="mx-auto bg-white w-full h-full  rounded-lg shadow borde">
                    <Tabs />
                    {portfoliosObject.map(portfolio => <PortfolioRow key={portfolio.tradeId} {...portfolio} />)}
                    {portfoliosObject.map(portfolio => <PortfolioRow key={portfolio.tradeId} {...portfolio} />)}
                    {portfoliosObject.map(portfolio => <PortfolioRow key={portfolio.tradeId} {...portfolio} />)}
                    <Pagination ></Pagination>
                </div>
            </div>
        </Main>
    )
}

export default Portfolios

const portfoliosObject = [
    {
        name: "Defi Coins", portId: "498625E", amountInv: "350 USDT", noOfTrades: "34", growth: "10.2%", createDate: "14/10/2020",
    },
    {
        name: "Defi Coins", portId: "498625F", amountInv: "350 USDT", noOfTrades: "34", growth: "10.2%", createDate: "14/10/2020",
    },
]