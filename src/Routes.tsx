import { Route, Switch, Redirect } from 'react-router-dom'
import { ModelsList, ModelConfigurator }  from './pages'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import React from 'react'

const App = ({ globalLoading }) => {
  return (
    <Spin spinning={globalLoading} size='large'>
      <Switch>
        <Redirect exact from="/" to="/models" />
        <Route exact path='/models' component={ModelsList} />
        <Route exact path='/models/:carCode/trim' component={ModelConfigurator} />
        <Route exact path='/models/:carCode/color' component={ModelConfigurator} />
      </Switch>
    </Spin>
  )
}

interface RootState {
  models: {
    globalLoading: boolean
  }
}

const mapStateToProps = (state: RootState) => ({ 
  globalLoading: state.models.globalLoading
})
export default hot(module)(connect(mapStateToProps)(App))
