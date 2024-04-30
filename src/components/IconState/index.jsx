import React from 'react'
import PropTypes from 'prop-types'
import { FiCloudDrizzle,FiCloudLightning,FiCloudRain, FiCloudSnow,FiCloud,FiSun, FiWind, FiAlignCenter } 
from 'react-icons/fi'
//Thunderstorm 
export const validValue = [
  "clear", 
  "wind",
  "mist", 
  "clouds", 
  "rain", 
  "thunderstorm",
  "drizzle", 
  "snow" 
]

const stateByWeather = {
  clear: FiSun,
  wind: FiWind,
  mist: FiAlignCenter,
  clouds: FiCloud,
  rain: FiCloudRain,
  thunderstorm: FiCloudLightning,
  drizzle: FiCloudDrizzle,
  snow: FiCloudSnow,
}

const IconState = ({climate}) => {
  const IconWeather = stateByWeather[climate]
  return (
    <IconWeather/>
  )
}

IconState.propTypes = {
  climate: PropTypes.oneOf(validValue).isRequired
}

export default IconState