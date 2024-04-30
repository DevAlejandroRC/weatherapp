import React, { useMemo } from 'react'
import { IconContext } from 'react-icons'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '@mui/material'
import Typography from '@mui/material/Typography'
import IconState, {validValue } from '../IconState'

const Weather = ( { tempeture, state } ) => {
  const iconSize = useMemo(() => ({size: '4em'}), [])
  return (
    <Grid container item justifyContent="center" alignItems="flex-end">
      <IconContext.Provider value={iconSize}>
        {
          state 
          ? (<IconState climate={state}/>) 
          : (<Skeleton variant="circular" height={50} width={50}/>)
        }
      </IconContext.Provider>
      {
        tempeture 
        ? (<Typography display="inline" variant='h3'>{tempeture}°</Typography>) 
        : (<Skeleton variant="text" height={30} width={80}/>)
      }
    </Grid>
  )
}

Weather.propTypes = {
  tempeture: PropTypes.number,
  state: PropTypes.oneOf(validValue),
}

export default Weather