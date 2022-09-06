import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'



const WeatherCard = () => {
    const [apiResponse, setApiResponse] = useState({})
    const [apiTime, setApiTime] = useState("")


    useEffect( () => {

     

      navigator.geolocation.getCurrentPosition(success, options);

      
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };


      function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=31fb8580c76fe83c63502c5bfebcb631`)
            .then(res => {
                setApiResponse(res.data)
                setApiTime(shiftSecconds(res.timezone))
                // shiftSecconds(res.timezone)
                // shiftSecconds(res.timezone)
            
            })
            // .finally((resx) => shiftSecconds(resx.timezone))
      };
  
      }, [])
  
    console.log(apiResponse);

    const shiftSecconds = (timezone => {
        // let d = new Date((new Date().getTime())-(timezone + 14404)*1000);
        // const timezoneOffset = (new Date()).getTimezoneOffset();
        let d = new Date((new Date().getTime())-(timezone)*1000);
        // let d = Date.now()  + 1000 * timezone;
        // d.toISOString();
        // d.toLocaleString('en-US', { timeZone: 'America/La_Paz' });

        // console.log(d);
        // return setApiTime(d);
        // setApiTime(d);
        return d;
    })   
    // const shiftSecconds = (() => {
    //     // let d = new Date((new Date().getTime())-(timezone + 14404)*1000);
    //     apiResponse.timezone = new Date((new Date().getTime())-timezone*1000);
    //     // let d = Date.now()  + 1000 * timezone;
    //     // d.toISOString();
    //     apiResponse.timezone.toLocaleString('en-US', { timeZone: 'America/La_Paz' });

    //     // console.log(d);
    //     // return setApiTime(d);
    // })   

    shiftSecconds(apiResponse.timezone)

    // shiftSecconds();

    

    // console.log(timezoneOffset);    
    
    return (
        <div className='weatherCard'>
            <h1 className='weatherCard-title'>Weather App</h1>
            <p className='weatherCard-location'>{apiResponse.name}, {apiResponse.sys?.country} </p>
            <p>{apiTime}</p>
            <div className='weatherCard-info'>
                <div>
                <img className='weatherCard-icon' src={`http://openweathermap.org/img/wn/${apiResponse.weather?.[0].icon}@2x.png`} alt="" />
                </div>
                <div className='weatherCard-listInfo'>
                    <ul className='weather-list'>
                        <li>"{apiResponse.weather?.[0].description}"</li>
                        <li><b>Humidity: </b>{apiResponse.main?.humidity}</li>
                        <li><b>Pressure: </b>{apiResponse.main?.pressure}</li>
                        <li><b>Wind Speed: </b>{apiResponse.wind?.speed}</li>
                        <li><b>Clouds: </b>{apiResponse.clouds?.all}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;