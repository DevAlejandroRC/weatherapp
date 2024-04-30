import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ForecastChart = ({data}) => {
  
  const marginSize = useMemo(() => ({top: 20, bottom: 20, left: 5, right: 5}), [])

  return (
    <ResponsiveContainer height={250} width={"95%"} >
      <LineChart margin={marginSize} data={data}>
        <Line type="monotone" stroke="#ff0000" dataKey="max"/>
        <Line type="monotone" stroke="#0000ff" dataKey="min"/>
        <XAxis dataKey="dayWeekend"/>
        <YAxis/>   
        <CartesianGrid/>
        <Tooltip/>
        <Legend/>
      </LineChart>
    </ResponsiveContainer>
  )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
          dayWeekend: PropTypes.string.isRequired,
          min: PropTypes.number.isRequired,
          max: PropTypes.number.isRequired
        }),
    ).isRequired
}

export default ForecastChart