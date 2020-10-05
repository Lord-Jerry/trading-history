import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect, useLocation, useHistory } from "react-router-dom"
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './pages/Home'
import Main from './pages/Main'
import Footer from './components/mini-components/Footer'
import Pricing from './pages/Pricing'


function App() {
  const [isLogin, setisLogin] = useState(true)

  const isAuth = () => {
    let token = sessionStorage.getItem('token');
    if (token) {
      setisLogin(true)
    }
  }

  useEffect(() => {
    isAuth()
  }, [])

  return (
    <div className="App font-sans  bg-gray-100 min-h-screen">
      
      {/* <div className="container h-full my-16 mx-auto flex flex-col lg:flex-row sm:space-x-0 md:space-x-10"> */}

        {/* { !isLogin ?  */}
          <Switch>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
            <Route exact path="/">
              <Navbar isLogin={isLogin} />
              <Home>
                <SignUp setisLogin={setisLogin} />
              </Home>
            </Route>
            <Route exact path="/signin">
              <Home>
                <Login setisLogin={setisLogin} />
              </Home>
            </Route>
            <PrivateRoute path="/dash" isLogin={isLogin} />
            <PrivateRoute path="/dash/port-1" isLogin={isLogin} />
          </Switch> 
          
          {/* } */}
      {/* </div> */}
      <Footer />
    </div>
  );
}


function PrivateRoute({ isLogin }) {
  // let token = sessionStorage.getItem('token');
  let history = useHistory()
  return (
    <>
    {/* { !props.auth ? <Route exact path='/' component={Home}/> : <Route component={AllFeed}/> } */}
    { isLogin ? <Route component={Main}/> : history.push("/signin") }
    </>
  );
}

export default App;
