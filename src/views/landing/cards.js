import React from 'react'
import { timeConverter } from 'Utils/'
const CardComponents = props => {
  const {
    props: { cases, deaths, recovered, updated }
  } = props
  console.log(props.props)
  return (
    <div className='center cards'>
      <h1>cases : {cases || 'N/A'} </h1>
      <h2>deaths : {deaths || 'N/A'} </h2>
      <h3>recovered : {recovered || 'N/A'} </h3>
      <h4>Last updated : {timeConverter(updated) || 'N/A'} </h4>
    </div>
  )
}

export default CardComponents
