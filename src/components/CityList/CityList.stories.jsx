import React from 'react'
import { action } from '@storybook/addon-actions'
import CityList from '.'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Lima" , country: "Peru", code: "PE" },
    { city: "Buenos Aires" , country: "Argentina", code: "AR" },
    { city: "Sao Paulo" , country: "Brasil", code: "BR" },
    { city: "Caracas" , country: "Venezuela", code: "VE" },
    { city: "Quito" , country: "Ecuador", code: "EC" },
    { city: "Bogota" , country: "Colombia", code: "CO" },
]

export const CityListExample = () => <CityList city={cities} event={action("City welcom")}/>