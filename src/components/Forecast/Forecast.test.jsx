import React from 'react'
import { render } from '@testing-library/react'
import Forecast from '.'

const forecastItems = [
    { weekDay: "Lunes", hour: 10, state: "clear", tempeture: 20 }, 
    { weekDay: "Martes", hour: 11, state: "wind", tempeture: 30 }, 
    { weekDay: "Miercoles", hour: 12, state: "clouds", tempeture: 24 }, 
    { weekDay: "Jueves", hour: 13, state: "rain", tempeture: 10 }, 
    { weekDay: "Viernes", hour: 14, state: "thunderstorm", tempeture: 8 }, 
    { weekDay: "Sabado", hour: 15, state: "drizzle", tempeture: 12 }, 
    { weekDay: "Domingo", hour: 16, state: "snow", tempeture: 21 }, 
]

test("Forecast test", async() => {
    const {findAllByTestId} = render(<Forecast items={forecastItems}/>) 
    const forecastInfo = await findAllByTestId("item-container")
    expect(forecastInfo).toHaveLength(7)
})