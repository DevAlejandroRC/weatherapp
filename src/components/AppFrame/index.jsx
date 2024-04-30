import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { AppBar, IconButton, Grid, Toolbar, Typography, Link } from '@mui/material'
import { IconContext } from 'react-icons'
import { FiSun } from 'react-icons/fi'
import { Link as LinkRouter } from 'react-router-dom'

const AppFrame = ({children}) => {
  const iconSize = useMemo(() => ({size:'2em'}), [])  
  return (
    <Grid container justifyContent="center" spacing={1}>
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton color='inherit' aria-label='menu'>
                    <Link component={LinkRouter} to='/main' color='inherit' aria-label='menu'>
                            <FiSun/>
                        <IconContext.Provider value={iconSize}>
                        </IconContext.Provider>
                    </Link>
                </IconButton>
                    <Typography variant='h6' color="inherit">
                        Weather app
                    </Typography>
            </Toolbar>
        </AppBar>
        <Grid item xs={12} md={8}>
            {children}
        </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {
    children: PropTypes.node
}
export default AppFrame