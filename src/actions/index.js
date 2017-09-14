import axios from 'axios';

const API_KEY = '3a83d40adbacc881b92d5ccf73616689';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type:FETCH_WEATHER,
        payload: request 
    };
}