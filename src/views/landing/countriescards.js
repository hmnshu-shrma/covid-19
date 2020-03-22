import React from 'react'
import { v4 as uuidv4 } from 'uuid'
const CountryCards = props => {
  console.log(props)
  const { countries } = props
  return countries ? (
    <ul className='cardlist'>
      {countries.map(cntry => (
        <li className='country cards' key={uuidv4()}>
          <h5>{cntry.country || 'N/A'}</h5>
          <p className='casestoday'>
            Today Cases : {cntry.todayCases || 'N/A'}
          </p>
          <p className='totaldeaths'>total Deaths : {cntry.deaths || 'N/A'}</p>
          <p className='todaydeaths'>
            today deaths : {cntry.todayDeaths || 'N/A'}
          </p>
          <p className='recovered'>
            Patients recovered : {cntry.recovered || 'N/A'}
          </p>
          <p className='active'>cases active : {cntry.active || 'N/A'}</p>
          <p className='critical'>critical : {cntry.critical || 'N/A'}</p>
          <p className='cases_pr_mill'>
            Cases/1 Million : {cntry.casesPerOneMillion || 'N/A'}
          </p>
        </li>
      ))}
    </ul>
  ) : (
    'not found'
  )
}
export default CountryCards
