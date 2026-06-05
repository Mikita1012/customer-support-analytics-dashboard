import React from 'react'
import './MetricCard.css'

function MetricCard({title, value}) {
  return (
    <div className='metric-card'>
        <h1>{title}</h1>
        <p>{value}</p>
    </div>
  )
}

export default MetricCard