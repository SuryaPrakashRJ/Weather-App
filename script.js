//API Key
let api_key = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL =  `${URL}?q=${city}&appid=${api_key}&units=imperial`;
  const weather = fetch(FULL_URL);
  return weather.then((response) => {
    return response.json();
  })
}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  })
}

showWeatherData = (weatherData) =>{
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;S
}
