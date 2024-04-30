import React from 'react'
//import React, { useCallback, useMemo, useState, useReducer } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import City from './pages/City'
import Main from './pages/Main'
import NotFoud from './pages/NotFoud'
import Welcome from './pages/Welcome'
import { WeatherContext } from './WeatherContext'

const App = () => {

  return (
    <WeatherContext>
      <Router>
        <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/city/:city/:code' element={<City/>}/>
            <Route path='*' element={<NotFoud/>}/>
        </Routes>
      </Router>
    </WeatherContext>
  )
}

export default App