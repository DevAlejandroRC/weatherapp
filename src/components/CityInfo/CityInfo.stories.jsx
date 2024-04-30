import React from 'react'
import CityInfo from '.'
import 'typeface-roboto'

export default {
    title: "CityInfo",
    component: CityInfo
}

export const CityExample = (args) => <CityInfo {...args}/>

CityExample.args = { city:"Bogota", country:"Colombia" }