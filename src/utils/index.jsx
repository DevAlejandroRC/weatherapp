const appid = "32f229d6edc7da0291c386cc03834bcb"

export const getKeyCode = (city, code) => `${city}-${code}`

export const getForecastApi = ({city, code}) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${code}&appid=${appid}`
)

export const getWeatherApi = ({city, code}) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=${appid}`
)