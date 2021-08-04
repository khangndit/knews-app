import axios from 'axios';

class WeatherApi {
  getWeatherHaNoiCity = () => {
    const api_key = 'f0283990e0581e2d7e1b7c41996132e9';
    const city = 'HaNoi';
    const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    return axios.get(url);
  };
}

const weatherApi = new WeatherApi();
export default weatherApi;
