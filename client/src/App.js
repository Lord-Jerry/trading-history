import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect, useLocation, useHistory } from "react-router-dom"
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './pages/Home'
import Main from './pages/Main'
import Dash from './pages/Dash'
import Trades from './pages/Trades'
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
      <div class="bg-white border-t mt-10">
          <div class="container mx-auto px-4">
            <div class="md:flex justify-between items-center text-sm">
              <div class="text-center md:text-left py-3 md:py-4 border-b md:border-b-0">
                <a href="#" class="no-underline text-grey-dark mr-4">Home</a>
                <a href="#" class="no-underline text-grey-dark mr-4">Careers</a>
                <a href="#" class="no-underline text-grey-dark">Legal &amp; Privacy</a>
              </div>
              <div class="md:flex md:flex-row-reverse items-center py-4">
                <div class="text-center mb-4 md:mb-0 md:flex">
                  <div class="w-48 inline-block relative mb-4 md:mb-0 md:mr-4">
                    <select class="leading-tight block appearance-none w-full bg-white border border-grey-light px-3 py-2 pr-8 rounded">
                      <option>English</option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  <div>
                    <a href="#" class="inline-block leading-tight bg-blue border border-blue-dark hover:bg-blue-dark px-3 py-2 text-white no-underline rounded">Need help?</a>
                  </div>
                </div>
                <div class="text-grey text-center md:mr-4">&copy; 2017 Cointoad</div>
              </div>
            </div>
          </div>
        </div>
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
