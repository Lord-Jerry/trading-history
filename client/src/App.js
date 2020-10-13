import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import PageWrapper from './pages/wrapper/PageWrapper'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './pages/Home'
import Main from './pages/wrapper/Main'
import Dash from './pages/Dash'
import Trades from './pages/Trades'
import PortfolioStat from './pages/PortfolioStat'
import Footer from './components/mini-components/Footer'
import Pricing from './pages/Pricing'

function App() {
  // if(token === null) return (<div>Loading...</div>)

  return (
    <div className="App font-sans bg-gray-100 min-h-screen">
      

        {/* { !isLogin ?  */}
          <Switch>
            <Route exact path="/pricing">
              <PageWrapper>
                <Pricing />
              </PageWrapper>
            </Route>
            <Route exact path="/">
              <PageWrapper>
              <Home>
                <SignUp />
              </Home></PageWrapper>
            </Route>
            <Route exact path="/signin">
              <PageWrapper>
                  <Login />
              </PageWrapper>
            </Route>
            <PrivateRoute path="/dash" >
              <Main>
                <Dash >
                    <PortfolioStat />
                </Dash>
              </Main>
            </PrivateRoute>
            <PrivateRoute path="/port-1">
              <Main>
                  <div className="flex flex-col w-full lg:w-6/8">
                      <h4 className="text-1xl title-font font-medium leading-none text-indigo-700 mb-5">PORTFOLIO 1</h4>
                      <PortfolioStat />
                      <Trades />
                  </div>
              </Main>
            </PrivateRoute>
          </Switch> 
          
          {/* } */}

      <Footer />
    </div>
  );
}


function PrivateRoute({ children, ...rest }) {
  let token = sessionStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
