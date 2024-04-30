import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import ForecasItem from '../ForecastItem'
import {validValue } from '../IconState'

const renderForecastItems = forecast =>{
    //Destructuring    
    const { weekDay, hour, state, tempeture } = forecast

    return (
        <Grid item key={`${weekDay}${hour}`} data-testid="item-container">
            <ForecasItem weekDay={ weekDay } hour={ hour } state={ state } tempeture={ tempeture }/>
        </Grid>
    )
}

const Forecast = ({ items }) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
        { items.map( listForecast => renderForecastItems(listForecast) ) }
    </Grid>
  )
}

Forecast.propTypes = {
    items: PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValue).isRequired,
        tempeture: PropTypes.number.isRequired
    })
}

export default Forecast