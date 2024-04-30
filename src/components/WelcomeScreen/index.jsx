import React from 'react'
import PropTypes from 'prop-types'
import useVanta from '../hooks/useVanta'

const WelcomeScreen = ({children}) => {

  const {elementRef} = useVanta()

  return (
    <div ref={elementRef} className='viewFull'>{children}</div>
  )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node.isRequired
}

export default WelcomeScreen