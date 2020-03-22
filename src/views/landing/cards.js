import React from 'react'
import { timeConverter } from 'Utils/'
const CardComponents = props => {
  const {
    props: { cases, deaths, recovered, updated }
  } = props
  return (
    <div className='center-warning cards'>
      <h1 className='heading-1'>cases : {cases || 'N/A'} </h1>
      <h2 className='heading-2'>deaths : {deaths || 'N/A'} </h2>
      <h3 className='heading-3'>recovered : {recovered || 'N/A'} </h3>
      <h4 className='heading-4'>
        Last updated : {timeConverter(updated) || 'N/A'}
      </h4>
    </div>
  )
}

export default CardComponents
