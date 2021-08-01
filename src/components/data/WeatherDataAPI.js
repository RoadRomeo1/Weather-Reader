import axios from 'axios';

const key = '---api key goes here----';

function getWeatherData(city) {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&APPID=${key}`
    )
    .then(res => res.data)
    .catch(res => res.status);
}

export { getWeatherData };
