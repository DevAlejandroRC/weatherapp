import React from 'react'
import ForecastChart from '.'

export default {
    title: "ForecastChart",
    component: ForecastChart
}

// dia y hora: "DDD HH"
// Tres posiciones para el día y dos para la hora
// min: Temperatura mínima
// max: Temperatura máxima
const data = [
    {
        "dayWeekend": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayWeekend": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayWeekend": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayWeekend": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayWeekend": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayWeekend": "Dom 12",
        "min": 12,
        "max": 19,
    }
]

export const ForecastChartExample = () => <ForecastChart data={data}/>