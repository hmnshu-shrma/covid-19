import React from 'react'
const CountryCards = props => {
  console.log(props)
  const { country } = props
  return (
    <ul className='cardlist'>
      <li className='country cards speciale'>
        <h5>{country.country || 'N/A'}</h5>
        <p className='casestoday'>
          Today Cases : {country.todayCases || 'N/A'}
        </p>
        <p className='totaldeaths'>total Deaths : {country.deaths || 'N/A'}</p>
        <p className='todaydeaths'>
          today deaths : {country.todayDeaths || 'N/A'}
        </p>
        <p className='recovered'>
          Patients recovered : {country.recovered || 'N/A'}
        </p>
        <p className='active'>cases active : {country.active || 'N/A'}</p>
        <p className='critical'>critical : {country.critical || 'N/A'}</p>
        <p className='cases_pr_mill'>
          Cases/1 Million : {country.casesPerOneMillion || 'N/A'}
        </p>
      </li>
    </ul>
  )
}
export default CountryCards
