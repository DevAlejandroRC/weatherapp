import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from '.'

test("Weather Details render", async() =>{
    const {findByText}= render(<WeatherDetails humidity={10} wind={80}/>)
    const humidity = await findByText(/10/)
    const wind = await findByText(/80/)
    expect(humidity).toHaveTextContent("Humedad: 10")
    expect(wind).toHaveTextContent("Viento: 80")
})