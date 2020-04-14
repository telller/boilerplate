import { Route, Switch, Redirect } from 'react-router-dom'
import { ModelsList, ModelConfigurator }  from './pages'
import { hot } from 'react-hot-loader'
import React from 'react'

const App = () => (
  <Switch>
    <Redirect exact from="/" to="/models" />
    <Route exact path='/models' component={ModelsList} />
    <Route exact path='/models/:carCode/trim' component={ModelConfigurator} />
    <Route exact path='/models/:carCode/color' component={ModelConfigurator} />
  </Switch>
)

export default hot(module)(App)
