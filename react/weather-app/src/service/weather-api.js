import { http } from './http'

export const fetchWeather = city => http.get(`data/2.5/weather?q=${city}&APPID=6cd223240d51e8a56474367fc6bbc494`)