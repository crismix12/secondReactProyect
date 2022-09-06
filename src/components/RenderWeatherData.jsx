import React from 'react';
import { useEffect, useState } from 'react'

const RenderWeatherData = ({city, country, icon, description, humidity, pressure, windSpeed, clouds, temperatureC, temperatureF}) => {
    const [isCelsius, setIsCelsius] = useState(true);
    const [background, setBackground] = useState('');
    // document.body.style = `background: url(${background}) no-repeat center center fixed;
    // -webkit-background-size: cover;
    // background-size: 100% 100%`;
    // document.body.style = `background: ${background}`;
    // document.body.style.backgroundColor = `green`;
    // document.body.style.backgroundColor = "red";
    document.body.style.backgroundColor = `${background}`;

    useEffect(() => {
        changeBackground(description);
    },[description]);

    const changeBackground = (description) => {
        switch (description){
            case "clear sky":
                setBackground('green')
        }
    }
   
    return (
        <div>
            <h1 className='weatherCard-title'>Weather App</h1>
            <p className='weatherCard-location'>{city}, {country} </p>
            <div className='weatherCard-info'>
                <div>
                <img className='weatherCard-icon' src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
                </div>
                <div className='weatherCard-listInfo'>
                    <ul className='weather-list'>
                        <li>"{description}"</li>
                        <li><b>Humidity: </b>{humidity} %</li>
                        <li><b>Pressure: </b>{pressure} [hPa]</li>
                        <li><b>Wind Speed: </b>{windSpeed} [m/s]</li>
                        <li><b>Clouds: </b>{clouds} %</li>
                    </ul>
                </div>
            </div>
            <p><b>Temperature: </b>{isCelsius ? temperatureC : temperatureF} {isCelsius ? "C °" : "°F"}</p>
            <button onClick={() => setIsCelsius(!isCelsius)}>Change Temperature to {isCelsius ? "Farhenheit" : "Celsius"}</button>
        </div>
    );
};

export default RenderWeatherData;