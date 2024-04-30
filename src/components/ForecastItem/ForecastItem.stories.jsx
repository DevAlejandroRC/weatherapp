import React from 'react'
import ForecasItem from '.'

export default {
    title: "ForecasItem",
    component: ForecasItem
}

export const ForecasItemExample = () => <ForecasItem weekDay='Lunes' hour={10} state="snow" tempeture={23}/>