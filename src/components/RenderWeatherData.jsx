import React from 'react';
import { useEffect, useState } from 'react'

const RenderWeatherData = ({city, country, icon, description, weatherId, humidity, pressure, windSpeed, clouds, temperatureC, temperatureF}) => {
    const [isCelsius, setIsCelsius] = useState(true);
    const [background, setBackground] = useState('');
    document.body.style = `background: url(${background}) no-repeat center; background-size: 100% 100%`;

    useEffect(() => {
        changeBackground(weatherId);
    },[weatherId]);

    const changeBackground = (weatherId) => {
        if(weatherId === "800"){
            setBackground('https://lh3.googleusercontent.com/CnHg3skxcIhFKh5oE_ZV61x-a-tqWKIWC04a4hWkmQymuBRGlp3Kgnr_d3bEj-jgvPZAM1kh4nkpALUr0bDaUJdzPQ=w640-h400-e365-rj-sc0x00ffffff')
        }else if(weatherId?.[0] ==="8"){
            setBackground('https://img.freepik.com/free-photo/scattered-clouds-blue-sky_23-2148824961.jpg?w=2000')
        }else if(weatherId?.[0] ==="5"){
            setBackground("https://i.pinimg.com/originals/20/0e/08/200e0847167f87449c866fb2910b0b14.jpg")
        }else if(weatherId?.[0] === "2"){
            setBackground("https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/08/16467777883078.jpg")
        }else if(weatherId?.[0] === "6"){
            setBackground("https://static.seetheworld.com/image_uploader/photos/14/original/great-pre-season-snow-conditions-in-curchevel-courchevel-valley.jpg")
        }else if(weatherId?.[0] === "7"){
            setBackground("https://static.diffen.com/uploadz/2/24/Mist-1.jpg")
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
                        <li><b>Description: </b>"{description}"</li>
                        <li><b>Humidity: </b>{humidity} %</li>
                        <li><b>Pressure: </b>{pressure} [hPa]</li>
                        <li><b>Wind Speed: </b>{windSpeed} [m/s]</li>
                        <li><b>Clouds: </b>{clouds} %</li>
                    </ul>
                </div>
            </div>
            <p className='tempText'><b>Temperature: </b>{isCelsius ? temperatureC : temperatureF} {isCelsius ? "C ??" : "??F"}</p>
            <button className='tempBtn' onClick={() => setIsCelsius(!isCelsius)}>Change Temperature to {isCelsius ? "Farhenheit" : "Celsius"}</button>
        </div>
    );
};

export default RenderWeatherData;