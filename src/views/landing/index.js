import React, { Component } from 'react'
import { getAllCountries, getEachCountryData, getSingleCountry } from 'Utils/'
import asyncComponent from 'Hoc/asyncComponents'
import Navigation from '../navigation'
import CountryCards from './countrycard'
// import CountriesCards from './countriescards'
import StickyHeadTable from './table'

const AsyncCard = asyncComponent(() => {
  return import('./cards')
})

class LandingPageComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      data: '',
      countries: '',
      country: '',
      countriesVisiblity: true
    }
  }
  componentDidMount() {
    this.handleClick()
  }
  handleClick = e => {
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

    getEachCountryData()
      .then(res => {
        this.setState({ countries: res, country: '', countriesVisiblity: true })
      })
      .catch(err => {
        console.error(err)
        return false
      })
      .then(() => {
        return true
      })
  }

  getDataByCountry = param => {
    const { label } = param
    getSingleCountry(label)
      .then(res => {
        this.setState({ country: res, countriesVisiblity: false })
      })
      .catch(err => {
        console.error(err)
        return false
      })
      .then(() => {
        return true
      })
  }

  render() {
    const { data, countries, country } = this.state
    return (
      <React.Fragment>
        <Navigation countryName={this.getDataByCountry.bind(this)} />
        <main>
          <aside>
            <AsyncCard props={data} />
            <button className='refreshbutton' onClick={this.handleClick}>
              Reset & Reload Search View
            </button>
          </aside>
          <section>
            {country ? <CountryCards country={country} /> : ''}
            <StickyHeadTable countries={countries} />
          </section>
        </main>
        <footer>
          Data Source :
          <a href='https://www.worldometers.info/coronavirus/' target='_blank'>
            https://www.worldometers.info/coronavirus/
          </a>
        </footer>
      </React.Fragment>
    )
  }
}

export default LandingPageComponent

// {country ? <CountryCards country={country} /> : ''}
// {countriesVisiblity ? <CountriesCards countries={countries} /> : ''}
