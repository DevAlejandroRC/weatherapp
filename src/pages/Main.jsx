import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper } from '@mui/material'
import AppFrame from '../components/AppFrame'
import CityList from '../components/CityList'
import { getCities } from '../utils/services/cities'

const Main = () => {

  const history = useNavigate()

  const clickHandler = React.useCallback((city, code) => {
    history(`/city/${city}/${code}`)
  }, [history])

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList city={getCities()} event={clickHandler} />
      </Paper>
    </AppFrame>
  )
}

export default Main