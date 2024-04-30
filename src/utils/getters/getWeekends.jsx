import convert from 'convert-units'
import moment from 'moment'
import 'moment/locale/es'

const getWeekends = (data) => {

    const toCelcius = (stateTemp) => Number(convert(stateTemp).from('K').to('C').toFixed(1))

    const daysInWeekend = [0,1,2,3,4,5]
    const days = daysInWeekend.map(day => moment().add(day, 'd'))
    const weekends = days.map(day => {
        
        const tempObject = data.list.filter(items => {
            const dayYear = moment.unix(items.dt).dayOfYear()
            return dayYear === day.dayOfYear()
        })

        const temp = tempObject.map(item => item.main.temp)
        
        return({
            dayWeekend: day.format('ddd'),
            min: Math.floor(toCelcius(...temp),1),
            max: Math.ceil(toCelcius(...temp),2),
            testTemp: (temp.length > 0 ? true : false)                 
        })
    }).filter(item => item.testTemp)

    return weekends
}

export default getWeekends