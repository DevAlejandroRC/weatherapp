import React from 'react'
import { Grid, Link, Typography } from '@mui/material'
import { IconContext } from 'react-icons'
import { FiCloudRain} from 'react-icons/fi'
import { Link as RouterLink} from 'react-router-dom'

const NotFoud = () => {
  return (
    <Grid container direction='row' alignItems='center' className='viewFull'>
      <Grid item container xs={12} direction='column' justifyContent='center' alignItems='center'>
        <IconContext.Provider value={{size: '6em'}}>
          <FiCloudRain/>
        </IconContext.Provider>
        <Typography variant='h1' color='inherit'>404</Typography>
        <Typography variant='h4' color='inherit'>Pagina no encontrada</Typography>
        <Link color='inherit' aria-label='menu' component={RouterLink} to='/'>Quiero navegar</Link>
      </Grid>
    </Grid>
  )
}

export default NotFoud