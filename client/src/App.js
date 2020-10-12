import React, { useEffect, useState } from 'react'
import { Switch, Route, useHistory, Redirect } from "react-router-dom"
import PageWrapper from './pages/wrapper/PageWrapper'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './pages/Home'
import Main from './pages/Main'
import Footer from './components/mini-components/Footer'
import Pricing from './pages/Pricing'

function App() {
  const [isLogin, setisLogin] = useState(true)
  let token = sessionStorage.getItem('token');

  const isAuth = () => {
    
    if (token) {
      setisLogin(true)
    }
  }

  useEffect(() => {
    // isAuth()
    // sessionStorage.setItem('token', "res.token")
    console.log(token)
  }, [])

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
                <SignUp setisLogin={setisLogin} />
              </Home></PageWrapper>
            </Route>
            <Route exact path="/signin">
              <PageWrapper>
                  <Login setisLogin={setisLogin} />
              </PageWrapper>
            </Route>
            <PrivateRoute path="/dash" isLogin={isLogin} />
            <PrivateRoute path="/dash/port-1" isLogin={isLogin} />
          </Switch> 
          
          {/* } */}

      <Footer />
    </div>
  );
}


function PrivateRoute({ isLogin, children, ...rest }) {
  let token = sessionStorage.getItem('token');
  // let history = useHistory()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        // fakeAuth.isAuthenticated
        token !== null ? (
          // children
          <Route component={Main}/>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
          // history.push("/signin")
        )
      }
    />
  );
}

export default App;
