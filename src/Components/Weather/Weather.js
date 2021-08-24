import './Weather.css'
import axios from 'axios';
import { useState, useEffect } from 'react';






const Weather = () => {

    const [weather, setWeather] = useState('');

    
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?zip=00802&appid=7353796b6bfcfbeeb4fb368ba9c89f7a&units=imperial')
        .then(res =>{
            setWeather(res.data.main)
        }).catch(err => console.log(err))
    }, [])
       
    return(
        <div className = 'weatherContainer'>
         <h1 className = 'weatherHeader'>Weather</h1>
         <p>Current Temperature: {weather?.temp.toFixed(1)}&#8457;</p> 
         
         <p>Feels Like: {weather?.feels_like.toFixed(1)}&#8457;</p>
         
         <p>Min Temp Today: {weather?.temp_min.toFixed(1)}&#8457;</p>
         
         <p>Max Temp Today: {weather?.temp_max.toFixed(1)}&#8457;</p>
         
         <p>Humidity: {weather.humidity}%</p>
       </div>
    )
}

export default Weather

