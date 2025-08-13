# Assignment 2 - Utilizing External API Service

This assignment shows **Calgary weather by default** (can also search for other cities) and **converts currencies** using JavaScript.

## Setup
1. Clone this repository.
2. Open `config.js` and replace the "YOUR API KEY HERE" with your own:
```javascript
const WEATHER_API_KEY = "YOUR API KEY HERE";
const CURRENCY_API_KEY = "YOUR API KEY HERE";
export { WEATHER_API_KEY, CURRENCY_API_KEY };
```
3. Save the changes and open `index.html` in your IDE to run the project.

## Note
* You need your own API keys to test the application.
* Make sure to replace the placeholders in `config.js` with your API keys.
  * [OpenWeatherMap API](https://openweathermap.org/api) for weather data
  * [ExchangeRate-API](https://www.exchangerate-api.com/) for currency conversion
