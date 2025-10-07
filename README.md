# Assignment 2 - Utilizing External API Service

This assignment shows **Calgary weather by default** (can also search for other cities) and **converts currencies** using vanilla HTML and CSS, JavaScript and Node.js.

## Features
- **Weather**: Display city name, temperature (°C), weather description, and last update.
- **Currency Converter**: Convert one currency to another. Default conversion: USD → USD

## Setup & Run Locally
1. Clone this repository.
2. Install dependencies: `npm install`
3. Create a ` .env ` file in the root and add your API keys:
```ini
WEATHER_API_KEY=YOUR_WEATHER_API_KEY
CURRENCY_API_KEY=YOUR_CURRENCY_API_KEY
```
4. Start the backend server: `npm start`
5. Open `http://localhost:3000` in your browser.

## Notes
* You need your own API keys to test the application.
* Your front-end files are served via the Express server, so always access the app through `http://localhost:3000`.

## APIs Used
* [OpenWeatherMap API](https://openweathermap.org/api) for weather data
* [ExchangeRate-API](https://www.exchangerate-api.com/) for currency conversion
