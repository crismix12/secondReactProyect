import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
import RenderWeatherData from './RenderWeatherData';



const WeatherCard = () => {
    // const [apiResponse, setApiResponse] = useState({})
    // const [isKelvin, setIsKelvin] = useState(true);
    const [weather, setWeather] = useState({});

    useEffect( () => {

     

      navigator.geolocation.getCurrentPosition(success);




      function success(pos) {
        var crd = pos.coords;
      
        // console.log('Your current position is:');
        // console.log('Latitude : ' + crd.latitude);
        // console.log('Longitude: ' + crd.longitude);
        // console.log('More or less ' + crd.accuracy + ' meters.');
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=31fb8580c76fe83c63502c5bfebcb631`)
            .then(res => {
                // setApiResponse(res.data)  
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
    //   console.log(apiResponse);
    //   console.log(apiResponse.weather?.[0].icon);
    
    return (
        <div className='weatherCard'>
            {/* <h1 className='weatherCard-title'>Weather App</h1>
            <p className='weatherCard-location'>{apiResponse.name}, {apiResponse.sys?.country} </p>
            <div className='weatherCard-info'>
                <div>
                <img className='weatherCard-icon' src={`http://openweathermap.org/img/wn/${apiResponse.weather?.[0].icon}.png`} alt="" />
                </div>
                <div className='weatherCard-listInfo'>
                    <ul className='weather-list'>
                        <li>"{apiResponse.weather?.[0].description}"</li>
                        <li><b>Humidity: </b>{apiResponse.main?.humidity} %</li>
                        <li><b>Pressure: </b>{apiResponse.main?.pressure} [hPa]</li>
                        <li><b>Wind Speed: </b>{apiResponse.wind?.speed} [m/s]</li>
                        <li><b>Clouds: </b>{apiResponse.clouds?.all} %</li>
                    </ul>
                </div>
            </div> */}
            {/* <p><b>Temperature: </b>{isKelvin ? apiResponse.main?.temp / 273.15 : ((apiResponse.main?.temp − 273.15) × 9/5 + 32)} {isKelvin ? "C" : "F"}</p> */}
            {/* <button onClick={() => setIsKelvin(!isKelvin)}>change</button> */}
            <RenderWeatherData city ={weather.city} country = {weather.country} icon = {weather.icon} description = {weather.description} humidity = {weather.humidity} pressure = {weather.pressure} windSpeed = {weather.windSpeed} clouds = {weather.clouds} temperatureC = {weather.temperatureC} temperatureF = {weather.temperatureF}/>
        </div>
    );
};

export default WeatherCard;