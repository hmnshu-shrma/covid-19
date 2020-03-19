import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/style.scss'
import LandingPageComponent from './views/landing'

class App extends Component {
  render() {
    return <LandingPageComponent />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
