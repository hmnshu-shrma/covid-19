import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/style.scss'
import { Route, Switch, Router } from 'react-router-dom'
import history from 'Utils/history'

import RouteSlug from './routes/'
class App extends Component {
  constructor(props) {
    super(props)
    if (history.location.pathname === '/' || history.location.pathname === '') {
      history.push('/covid-19')
    } else if (history.location.pathname !== '/covid-19') {
      history.push('/covid-19')
      console.log('it works')
    }
    console.log(history.location.pathname)
  }

  renderRoutes() {
    return RouteSlug.map((route, i) => {
      return (
        <Route
          key={i}
          exact={route.path === '/'}
          path={route.path}
          component={route.component}
        />
      )
    })
  }

  render() {
    return (
      <Router basename='/app' history={history}>
        <Switch>{this.renderRoutes()}</Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
