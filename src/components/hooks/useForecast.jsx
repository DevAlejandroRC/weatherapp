import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getForecastApi, getKeyCode } from '../../utils'
import getWeekends from '../../utils/getters/getWeekends'
import getHours from '../../utils/getters/getHours'

//const useForecast = (allInfo, allForecastList, stateAllInfo, stateAllForecasList) => {
const useForecast = (allInfo, allForecastList, actions) => {

    const {city, code} = useParams() 

    useEffect( () => {

        const apiForecast = async () => {

            const url = getForecastApi({city,code})
            const uniqueLocation = getKeyCode(city, code)
            
            try {

                const { data } = await axios.get(url)

                const weekends = getWeekends(data)
                //stateAllInfo({ [uniqueLocation]: weekends })
                actions({type: "SET_DATA_INFO", payload: {[uniqueLocation]: weekends} })
                const listForecast = getHours(data)
                //stateAllForecasList({ [uniqueLocation]: listForecast})
                actions({type:"SET_FORECAST_LIST", payload: {[uniqueLocation]: listForecast} })
            } catch (error) {
                console.log(error)
            }
        }

        const cityCode = getKeyCode(city, code)
        if(allInfo && allForecastList && !allInfo[cityCode] && !allForecastList[cityCode]) {
            apiForecast()
        }

    }, [city, code, allInfo, allForecastList, actions])

    return {city, code}
}

export default useForecast