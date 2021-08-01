import axios from 'axios';

const key = 'c28977301c0af595ab3de1afd0ccdf7c';

function getWeatherData(city) {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&APPID=${key}`
    )
    .then(res => res.data)
    .catch(res => res.status);
}

export { getWeatherData };
