import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
import RenderWeatherData from './RenderWeatherData';



const WeatherCard = () => {
    const [weather, setWeather] = useState({});

    useEffect( () => {

      navigator.geolocation.getCurrentPosition(success);

      function success(pos) {
        var crd = pos.coords;
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=31fb8580c76fe83c63502c5bfebcb631`)
            .then(res => {
                setWeather({
                    city: res.data.name,
                    country: res.data.sys.country,
                    icon: res.data.weather[0].icon,
                    description: res.data.weather[0].description,
                    humidity: res.data.main.humidity,
                    pressure: res.data.main.pressure,
                    windSpeed: res.data.wind.speed,
                    clouds: res.data.clouds.all,
                    temperatureC: (res.data.main.temp - 273.15).toFixed(2),
                    temperatureF: ((res.data.main.temp - 273.15) * (9/5) + 32).toFixed(2)
                    
                })     
            })
      };
  
      }, [])
    
    return (
        <div className='weatherCard'>
            <RenderWeatherData city ={weather.city} country = {weather.country} icon = {weather.icon} description = {weather.description} humidity = {weather.humidity} pressure = {weather.pressure} windSpeed = {weather.windSpeed} clouds = {weather.clouds} temperatureC = {weather.temperatureC} temperatureF = {weather.temperatureF}/>
        </div>
    );
};

export default WeatherCard;