import React, { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Link, Typography } from '@mui/material'
import { IconContext } from 'react-icons'
import { FiSun } from 'react-icons/fi'
import WelcomeScreen from '../components/WelcomeScreen'

const Welcome = props => {
  const iconSize = useMemo(() => ({size: '6em'}), [])
  return (
    <WelcomeScreen>
      <Grid container direction='row' alignItems='center' className='viewFull'>
        <Grid item container className='highlight' xs={12} direction='column' justifyContent='center' alignItems='center'>
          <IconContext.Provider value={iconSize}>
            <FiSun/>
          </IconContext.Provider>
          <Typography variant='h4' color='inherit'>Weather app</Typography>
          <Link color='inherit' aria-label='menu' component={RouterLink} to='/main'>Ingresar</Link>
        </Grid>
      </Grid>
    </WelcomeScreen>
  )
}

export default Welcome