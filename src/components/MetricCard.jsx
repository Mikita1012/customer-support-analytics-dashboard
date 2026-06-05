import React from 'react'
import './MetricCard.css'

function MetricCard({title, value}) {
  return (
    <div className='metric-card'>
        <h2>{title}</h2>
        <p>{value}</p>
    </div>
  )
}

export default MetricCard