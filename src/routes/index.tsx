import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Home from '../pages/Home'
import Login from '../pages/Login'

import Settings from '../pages/Settings'

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isPrivate component={Home} />
      <Route path="/settings" isPrivate component={Settings} />
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default routes
