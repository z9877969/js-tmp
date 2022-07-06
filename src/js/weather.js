'use strict';
// https://openweathermap.org/
import { fetchWeatherByCityName } from './weather-api';
import createWeatherCard from '../templates/weather-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = (seconds, timezone) => {
  const currentTimeZone = -new Date().getTimezoneOffset() * 60;
  let diffTimeZone;

  if (currentTimeZone > 0) {
    diffTimeZone = timezone - currentTimeZone;
  } else {
    diffTimeZone = currentTimeZone - timezone;
  }

  const date = new Date((seconds + diffTimeZone) * 1000);

  return `${String(date.getHours()).padStart(2, 0)}:${String(
    date.getMinutes()
  ).padStart(2, 0)}`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['user_country'].value;
  console.log(searchQuery);

  fetchWeatherByCityName(searchQuery)
    .then(data => {
      data.sys.sunrise = convertSecondsToHoursAndMinutes(
        data.sys.sunrise,
        data.timezone
      );
      data.sys.sunset = convertSecondsToHoursAndMinutes(
        data.sys.sunset,
        data.timezone
      );

      console.log(data);

      weatherWrapperEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
