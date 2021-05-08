import logo from './logo.svg';
import React, { useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs'; 
import './App.css';

const api = {
  key: "**********",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json() )
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(weather)
        });
    }


   }
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day}   ${date} , ${month} ,${year}`; 
  }

  
  return (

    <div className={(typeof weather.main !="undefined") ?((weather.main.temp > 16 ) ? 'app warm' : 'app') : 'app'}>
      <main>
          <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />         
          {(typeof weather.main != "undefined") ? (
            <div >          
            <div className="location-box">
          <div className="location">
            {weather.name}, {weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())} </div>
          </div>
           <div className="weather-box">
            <div className="temp">
                  {Math.round(weather.main.temp)}°C <img style={{width: "200px" , height: "200px"}} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].main}></img>
          </div>
                <div className="weather">{weather.weather[0].main} </div> 
                <div className="weather"> Wind Speed: {weather.wind.speed}</div>  
              </div>
             
              </div>

              
          ) : (<p>Please Type the city or country name here ....</p>)
          }  
        </div>
           
         

      </main>
      </div>
    
  );
}

export default App;