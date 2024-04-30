import React from 'react'
import Forecast from '.'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItems = [
    { weekDay: "Lunes", hour: 10, state: "clear", tempeture: 20 }, 
    { weekDay: "Martes", hour: 11, state: "wind", tempeture: 30 }, 
    { weekDay: "Miercoles", hour: 12, state: "clouds", tempeture: 24 }, 
    { weekDay: "Jueves", hour: 13, state: "rain", tempeture: 10 }, 
    { weekDay: "Viernes", hour: 14, state: "thunderstorm", tempeture: 8 }, 
    { weekDay: "Sabado", hour: 15, state: "drizzle", tempeture: 12 }, 
    { weekDay: "Domingo", hour: 16, state: "snow", tempeture: 21 }, 
    { weekDay: "Lunes", hour: 9, state: "mist", tempeture: 21 }, 
]


export const ForecastExample = () => <Forecast items={forecastItems}/>