import React, { useState } from 'react'
import Trade from './Trade'
import Pagination from './mini-components/Pagination'
import Tabs from './Tabs'
import CreateTrade from "./modals/forms/CreateTrade"

const Trades = ({trades}) => {
  const [hideModal, setHideModal] = useState("hidden")
  return (
    <>
      <div className="flex justify-between -mb-px">
        <h4 className="text-xl title-font font-medium leading-none text-indigo-700 mt-8 mb-5">TRADES</h4>
        <div className="flex items-center">
          <button type="button" onClick={() => setHideModal("")}
            className="py-2 px-4 rounded text-white bg-blue-500"
          > New Trade </button>
          <CreateTrade hideModal={hideModal} setHideModal={setHideModal} />
        </div>
      </div>
      <div className="mx-auto bg-white w-full h-full  rounded-lg shadow borde">
        <Tabs />
        {trades.map(trade => <Trade key={trade.tradeId} trade={trade} />)}
        <Pagination ></Pagination>
      </div>
    </>
  )
}

export default Trades
