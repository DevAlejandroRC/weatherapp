import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CityList from '.'

const cities = [
    { city: "Bogota" , country: "Colombia", countryCode: "CO"  },
    { city: "Buenos Aires" , country: "Argentina", countryCode: "AR"  },
    { city: "Caracas" , country: "Venezuela", countryCode: "VE"  },
    { city: "Quito" , country: "Ecuador", countryCode: "EC"  },
    { city: "Lima" , country: "Peru", countryCode: "PE" },
    { city: "Sao Paulo" , country: "Brasil", countryCode: "BR"  },
]

test('CityList render ', async () => {
    const { findAllByRole } = render(<CityList city={cities}/>)
    const info = await findAllByRole("button")
    expect(info).toHaveLength(6)
});

test('CityList click', async () => {
    //fuction mock (imitacion de funcion real)
    const clickOnItem = jest.fn()
    const {findAllByRole} = render(<CityList city={cities} event={clickOnItem}/>)
    const item = await findAllByRole("button")
    //fireEvent 
    fireEvent.click(item[0])
    expect(clickOnItem).toHaveBeenCalledTimes(1)
});