import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {

  return (
    <div className="App">
      <WeatherCard />
    </div>
  )
}

export default App
