'use strict';

const apikey = `70a6fd9f3a024cbfb66192841231203`;
const tokenKey = `592250250895046391284x52057`;
const container = document.querySelector('.container');
const weatherIcon = document.querySelector('.icon');
const weather = document.querySelector('.weather-container');
const tempreature = document.querySelector('.temperature-value');
const loc = document.querySelector('.location');
const temperatureDesc = document.querySelector('.temperature-description');


function weatherDetails(city,lat,log, tokenKey, apikey){
    fetch(`https://geocode.xyz/${lat},${log}?geoit=json&auth=${tokenKey}`).then(res => res.json()).then(data =>{ city = `${data.city}`;
    // city = `palanpur`;
    return   fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)})
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(data => {
        console.log(data);
        loc.textContent = `${data.location.name}, ${data.location.region}`;
        temperatureDesc.textContent = data.current.condition.text;
        tempreature.textContent = `${data.current.temp_c} °C`
        weatherIcon.src = `${data.current.condition.icon}`;
        weatherIcon.addEventListener('load', function(){
            weather.classList.remove('hidden');
        })
        

    })
    .catch( err => {
        console.error(err.msg);
    })
}

function getWeatherInfo(city, apikey){
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(data => {
        console.log(data);
        loc.textContent = `${data.location.name}, ${data.location.region}`;
        temperatureDesc.textContent = data.current.condition.text;
        tempreature.textContent = `${data.current.temp_c} °C`
        weatherIcon.src = `${data.current.condition.icon}`;
        weatherIcon.addEventListener('load', function(){
            weather.classList.remove('hidden');
        })
        

    })
    .catch( err => {
        console.error(err.msg);
    })
}
navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords);
    let lat = position.coords.latitude;
    let log = position.coords.longitude;
    let city;
    weatherDetails(city, lat, log,tokenKey, apikey);
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}`)
    // fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=New York`)
    
    
})

document.querySelector('.search-bar').addEventListener('search', function(){
    console.log(document.querySelector('.search-bar').value);
    let city = document.querySelector('.search-bar').value;
    document.querySelector('.search-bar').value = '';
    getWeatherInfo(city, apikey);
})

