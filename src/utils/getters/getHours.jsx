import convert from 'convert-units'
import moment from 'moment'
import 'moment/locale/es'

const getHours = (data) => {

    const toCelcius = (stateTemp) => Number(convert(stateTemp).from('K').to('C').toFixed(0))

    const times = [4, 8, 12, 16, 20, 24]
    const listForecast = data.list
    .filter( (item, index) => times.includes(index) )
    .map(item => {
        return ({
            weekDay: moment.unix(item.dt).format('dddd'),
            hour: moment.unix(item.dt).hour(),
            state: item.weather[0].main.toLowerCase(),
            tempeture: toCelcius(item.main.temp)
        })
    })

    return listForecast
}

export default getHours