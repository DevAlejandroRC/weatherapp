import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { IconContext } from 'react-icons'
import IconState, {validValue } from '../IconState'

const ForecasItem = ({weekDay, hour, state, tempeture}) => {
  const sizeIcon = useMemo(() => ({size: '4em'}), [])
  return (
    <Grid container direction="column" justify="center" alignItems="center">
        <Grid item><Typography>{weekDay}</Typography></Grid>
        <Grid item><Typography>{hour}</Typography></Grid>
        <Grid item>
            <IconContext.Provider value={sizeIcon}>
              <IconState climate={state}/>
            </IconContext.Provider>
        </Grid>
        <Grid item><Typography>{tempeture}°</Typography></Grid>
    </Grid>
  )
}

ForecasItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValue).isRequired,
  tempeture: PropTypes.number.isRequired
}

export default ForecasItem