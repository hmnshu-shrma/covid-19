import React, { Component } from 'react'
import { getAllCountries } from 'Utils/'
import asyncComponent from 'Hoc/asyncComponents'

const AsyncCard = asyncComponent(() => {
  return import('./cards')
})

class LandingPageComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      data: ''
    }
  }
  componentDidMount() {
    getAllCountries()
      .then(res => {
        this.setState({ data: res })
      })
      .catch(err => {
        console.error(err)
        return false
      })
      .then(() => {
        return true
      })
  }
  handleClick = e => {
    console.log('hello')
    console.log(this.state)
  }
  render() {
    const { data } = this.state
    return (
      <React.Fragment>
        {data ? <AsyncCard props={data} /> : 'No Data Found'}
        <button onClick={this.handleClick}>himashu</button>
      </React.Fragment>
    )
  }
}

export default LandingPageComponent
