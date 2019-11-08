import React, { useState } from 'react';
import './App.scss';
import Login from './whitelist/Login'
import { Route, NavLink } from 'react-router-dom'
import Register from './whitelist/register';
import Logo from './media/ventor_text_logo.svg'
import PrivateRoute from './util/PrivateRoute';
import Dashboard from './blacklist/Dashboard';
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  
  const handleLogout = ()=> {
    setLoggedIn(false)
    window.localStorage.clear()
  }
  return (
    <>
      <div className='navigation'>
        <img src={Logo} />
        <div className='links'>
          {
            !loggedIn ?
              <NavLink className='link' to='/login'>Login</NavLink>
              :
              <NavLink className='link' to='/login' onClick={handleLogout}>Logout</NavLink>
          }
          <NavLink className='link' to='/register'>Sign up</NavLink>
          <a className='link' href='https://ventor-api.herokuapp.com/'>api</a>
        </div>
      </div>
      <Route path='/login' render={(rest)=><Login {...rest} setLoggedIn={setLoggedIn}></Login>} />
      <Route path='/register' component={Register} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
    </>
  );
}
/*
  Routes

  whitelist
    entry point, marketing
    login 
    register

  blacklist
    dashboard
    settings
    posts
    messeges


*/


export default App;
