import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Grid, List, ListItem } from '@mui/material'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import useListInfo from '../hooks/useListInfo'
import { getKeyCode } from '../../utils'
import { useDispatchContext, useStateCotentext } from '../../WeatherContext'

/**
 * const areEqual = (prev, next) => {
    console.log("city: ", prev.city===next.city)
    console.log("country: ", prev.country===next.country)
    console.log("code: ", prev.code===next.code)
    console.log("information: ", prev.information===next.information)
    console.log("event: ", prev.event===next.event)

    return false
 *}
 */
const CityItemList = React.memo(({city, country, code, information, event}) => {
//const CityItemList = React.memo(function CityItemList({city, country, code, information, event}){
    return (
        <ListItem button onClick={() => event(city, code)} >
            <Grid container justifyContent="center" alignItems="flex-end">
                <Grid item md={8} sm={8}> 
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                    <Weather tempeture={information && information.value} 
                        state={information && information.climate}/>
                </Grid>
            </Grid>
        </ListItem>
    )
}/** , areEqual*/)

CityItemList.displayName = "CityItemList"

const renderCities = event => (cities, information) =>{

    const {city, code} = cities
    return <CityItemList key={getKeyCode(city, code)}  event={event} information={information} {...cities} />
}

const CityList = ({city, event}) => {
    
    const actions = useDispatchContext()
    const data = useStateCotentext()

    //const {stateAllWather} = actions
    const {allWeather} = data
    
    const {error, setError} = useListInfo(city, allWeather, actions)
    
    return (
        <List>
            {
                error && <Alert severity='error' onClose={()=> setError(null)}>{error}</Alert>
            }
            {
                city.map(
                    collection => renderCities(event)(collection, 
                        allWeather[getKeyCode(collection.city, collection.code)])
                )
            }
        </List>
    )
}

CityList.propTypes = {
    city: PropTypes.arrayOf(
        PropTypes.shape({
          city: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
          code: PropTypes.string.isRequired
        })
    ).isRequired,
    event: PropTypes.func.isRequired
}

export default React.memo(CityList)