import React, { useMemo } from 'react'
import { Grid, LinearProgress} from '@mui/material'
import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CityInfo'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import useForecast from '../components/hooks/useForecast'
import useListInfo from '../components/hooks/useListInfo'
import { getKeyCode } from '../utils'
import { getNameCoutryOfCities } from '../utils/services/cities'
import { useDispatchContext, useStateCotentext } from '../WeatherContext'

const City = () => {

    const actions = useDispatchContext()
    const data = useStateCotentext()

    const {allWeather, allInfo, allForecastList} = data
    //const {stateAllWather, stateAllInfo, stateAllForecasList} = actions
    //const { city, code } = useForecast(allInfo, allForecastList, stateAllInfo, stateAllForecasList)
    const { city, code } = useForecast(allInfo, allForecastList, actions)

    const cities = useMemo( 
        () => (
            [{city, code}]
        )
        ,[city, code] 
    )
    useListInfo(cities, allWeather, actions)
    
    const cityCode = getKeyCode(city, code)
    const weather = allWeather[cityCode]

    const chartData = allInfo[cityCode]
    const forecastList = allForecastList[cityCode]

    const climate = weather && weather.climate
    const temp = weather && weather.value
    const location = code && getNameCoutryOfCities(code)
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind


    return (
        <AppFrame>
            <Grid item container xs={12} justifyContent="center" alignItems="flex-end">
                <CityInfo city={city} country={location}/>
            </Grid>
            <Grid container item xs={12} justifyContent="center" alignItems="flex-end">
                    <Weather tempeture={temp} state={climate}/>
                    {humidity && wind && <WeatherDetails humidity={humidity} wind={wind}/>}
            </Grid>
            <Grid item>
                {!chartData && !forecastList && <LinearProgress />}
            
                <Grid container justifyContent="center">
                    <Grid item  xs={12} md={10}>
                        {chartData && <ForecastChart data={chartData}/>}
                    </Grid>
                    <Grid item xs={8} md={12}>
                        {forecastList && <Forecast items={forecastList}/>}
                    </Grid>
                </Grid> 

            </Grid>
               
        </AppFrame>
    )
}

export default City
