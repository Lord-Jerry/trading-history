import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Portfolio from './pages/Portfolio'
import Footer from './components/mini-components/Footer'
import Pricing from './pages/Pricing'

function App() {
  // if(token === null) return (<div>Loading...</div>)

  return (
    <div className="App font-sans bg-gray-100 min-h-screen">
      <Switch>
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Login} />
        <PrivateRoute path="/dash" >
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/port-1">
          <Portfolio />
        </PrivateRoute>
      </Switch>

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
