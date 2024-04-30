import { getKeyCode } from ".."
import { validValue } from "../../components/IconState"
import convert from "convert-units"

const getAllWeather = (response, city, code) => {
    const { data } = response
    const value = Number(convert(data.main.temp).from('K').to('C').toFixed(0))
    const watherMain = String(data.weather[0].main.toLowerCase())
    const humidity = data.main.humidity
    const wind = data.wind.speed

    const climate = validValue.includes(watherMain) ? watherMain : null

    const propName = getKeyCode(city, code)
    const propValue = { value, climate, humidity, wind }

    return ({ [propName]: propValue })
}


export default getAllWeather