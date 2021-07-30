import React from 'react'

import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisterUser } from './pages/NotRegisterUser'

import Context from './Context'
import { Router } from '@reach/router'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) => isAuth
            ? <Router><Favs path='/favs' /><User path='/user' /></Router>
            : <Router><NotRegisterUser path='/favs' /><NotRegisterUser path='/user' /></Router>
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
