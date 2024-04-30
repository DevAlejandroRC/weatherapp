import { useEffect, useState } from 'react'
import axios from 'axios'
import { getKeyCode, getWeatherApi } from '../../utils'
import getAllWeather from '../../utils/getters/getAllWeather'


const useListInfo = (city, allWeather, actions) => {

    //const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {

        const openWeather = async (city, code) => {
            
            const url = getWeatherApi({city, code})
            try {
                //flag
                const propName = getKeyCode(city, code)
                //stateAllWather({ [propName] : {} })
                actions({type:"STATE_ALL_WEATHER", payload: {[propName] : {}} })

                const response = await axios.get(url)

                const weather = getAllWeather(response, city, code)
                //setAllWeather( allWeather => ({ ...allWeather, ...weather }) )
                //stateAllWather(weather)
                actions({type:"STATE_ALL_WEATHER", payload: weather })
                
            } catch (error) {
                
                if (error.response) {
                    setError("No es posible consumir informacion del recurso solicitado")
                }
                else if (error.request) {
                    setError("Error en conexion, revise su conexion a internet")
                } 
                else {
                    setError("Error inesperado, no esperabamos este tipo de respuesta")
                }

            }

            /**Axios**
            axios
            .get(url)
            .then(
                response => {

                    const { data } = response
                    const value = Number(convert(data.main.temp).from('K').to('C').toFixed(0))
                    const climate = String(data.weather[0].main.toLowerCase())
                    
                    const propName = `${city}-${country}`
                    const propValue = { value, climate }

                    setAllWeather( allWeather => ({ ...allWeather, [propName]: propValue }) )
                    
                }
            )
            .catch(
                error => {
                    if (error.response) {
                        setError("No es posible consumir informacion del recurso solicitado")
                    }
                    else if (error.request) {
                        setError("Error en conexion, revise su conexion a internet")
                    } 
                    else {
                        setError("Error inesperado, no esperabamos este tipo de respuesta")
                    }
                }
            )
            */

        }

        city.forEach(({city, code}) => {
            if(!allWeather[getKeyCode(city, code)]){
                openWeather(city, code)
            }
        });

    }, [city, allWeather, actions])

    return {error, setError}
}

export default useListInfo