import React from 'react'
import Weather from '.'

export default {
    title: "Weather",
    component: Weather
}

export const WeatherDrizzle = () => <Weather tempeture={10} state="drizzle"/>
export const WeatherSnow = () => <Weather tempeture={10} state="snow"/>