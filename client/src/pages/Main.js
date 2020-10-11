import React from 'react'
import { Switch, Route } from "react-router-dom"
import Dash from './Dash'
import Trades from './Trades'
import PortfolioStat from './PortfolioStat'
import Sidebar from '../components/mini-components/Sidebar'
import AuthNavbar from '../components/AuthNavbar'


const Main = () => {
    return (
        <>
            <AuthNavbar />
            <div className="container my-1 mx-auto flex flex-row sm:space-x-0 md:space-x-10 px-4">
                <Sidebar />

                <Switch>
                    <Route exact path="/dash/port-1">
                        <div className="flex flex-col w-full lg:w-6/8">
                            <h4 className="text-1xl title-font font-medium leading-none text-indigo-700 mb-5">PORTFOLIO 1</h4>
                            <PortfolioStat />
                            <Trades /></div>
                    </Route>
                    <Route exact path="/dash">
                        <Dash >
                            <PortfolioStat />
                        </Dash>
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Main
