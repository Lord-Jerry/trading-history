import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Portfolio from './pages/Portfolio'
import Portfolios from './pages/Portfolios'
import Footer from './components/mini-components/Footer'
import SignUp from './pages/SignUp'
import Pricing from './pages/Pricing'

function App() {

  return (
    <div className="App font-sans bg-gray-100 min-h-screen">
      <Switch>
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute path="/dash">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/port-1">
          <Portfolio />
        </PrivateRoute>
        <PrivateRoute path="/ports">
          <Portfolios />
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
