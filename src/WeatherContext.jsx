import React, { useContext, useReducer } from 'react'

const stateContext = React.createContext()
const dispatchContext = React.createContext()

const initialValue = {
    allWeather: {},
    allInfo: {},
    allForecastList: {}
}

const reducer = (state, action) => {
    switch (action.type) {
      case "STATE_ALL_WEATHER":
        const weatherCity = action.payload
        const weather = {...state.allWeather, ...weatherCity}
        return {...state, allWeather: weather}
      case "SET_DATA_INFO":
        const listCity = action.payload
        const dataList = {...state.allInfo,...listCity}
        return {...state, allInfo: dataList}
      case "SET_FORECAST_LIST":
        const listForecast = action.payload
        const dataForecast = {...state.allForecastList, ...listForecast }
        return {...state, allForecastList: dataForecast}
      default:
        return state
    }
}

/**
   * 
    const [allWeather, setAllWeather] = useState({})
    const [allForecastList, setAllForecast] = useState({})
    const [allInfo, setAllInfo] = useState({})

    const stateAllWather = useCallback(
        (weatherCity) => {
        setAllWeather(
            allWeather => ({...allWeather, ...weatherCity})
        ) 
        }, [setAllWeather])
    const stateAllForecasList = useCallback(
        (listForecast) => {
        setAllForecast(
            dataForecast => ({...dataForecast, ...listForecast })
        )
        }, [setAllForecast])
    const stateAllInfo = useCallback(
        (listCity) => {
        setAllInfo(
            dataList => ({...dataList,...listCity})
        )
        },[setAllInfo])
        
    const actions = useMemo( () => (
        {
        stateAllWather,
        stateAllInfo, 
        stateAllForecasList
        }
    ), [stateAllWather, stateAllInfo, stateAllForecasList])

    const data = useMemo( () => (
        {
        allWeather,
        allInfo,
        allForecastList
        }
    ), [allWeather, allInfo, allForecastList])
   * 
  */

const useDispatchContext = () => {
    const dispatch = useContext(dispatchContext) 
    
    if(!dispatch){
        throw Error("No es posible obtener el set de datos para dispatch")
    }

    return dispatch
}

const useStateCotentext = () => {
    const state = useContext(stateContext)
        
    if(!state){
        throw Error("No es posible obtener el set de datos")
    }

    return state

}

const WeatherContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <dispatchContext.Provider value={dispatch}>
            <stateContext.Provider value={state}>
                {children}
            </stateContext.Provider>
        </dispatchContext.Provider>
    )
}
    
export {
    WeatherContext,
    useDispatchContext,
    useStateCotentext
}