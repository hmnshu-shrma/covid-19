import React from 'react'
import { timeConverter } from 'Utils/'
const CardComponents = props => {
  const {
    props: { cases, deaths, recovered, updated }
  } = props
  return (
    <div className='center-warning cards'>
      <span className='heading-1'>cases : {cases || 'N/A'} </span>
      <span className='heading-2'>deaths : {deaths || 'N/A'} </span>
      <span className='heading-3'>recovered : {recovered || 'N/A'} </span>
      <span className='heading-4'>
        Last updated : {timeConverter(updated) || 'N/A'}
      </span>
    </div>
  )
}

export default CardComponents
