import React, { useState } from 'react'
import Main from './wrapper/Main'
import PortfolioRow from '../components/PortfolioRow'
import Pagination from '../components/mini-components/Pagination'
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
                        className="py-2 px-4 rounded text-white bg-blue-500"
                    > New Portfolio </button>
                    <CreatePortfolio hideModal={hideModal} setHideModal={setHideModal} />
                    </div>
                </div>
                <div className="mx-auto pt-2 bg-white w-full h-full  rounded-lg shadow border">
                    <span className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b title-font font-medium inline-flex items-center leading-none border-indigo-500 bg-gray-50 text-indigo-700 cursor-pointer tracking-wider">
                        <svg className="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M11 12h2v2h9s-.149-4.459-.2-5.854C21.75 6.82 21.275 6 19.8 6h-3.208l-1.197-2.256C15.064 3.121 14.951 3 14.216 3H9.783c-.735 0-.847.121-1.179.744-.165.311-.7 1.318-1.196 2.256H4.199c-1.476 0-1.945.82-2 2.146C2.145 9.473 2 14 2 14h9v-2zM9.649 4.916c.23-.432.308-.516.817-.516h3.067c.509 0 .588.084.816.516L14.924 6h-5.85l.575-1.084zM13 17h-2v-2H2.5s.124 1.797.199 3.322c.031.633.218 1.678 1.8 1.678H19.5c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H13v2z" fillRule="nonzero" />
                        </svg> Portfolio list
                    </span>
                    <hr></hr>
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