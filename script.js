import { WEATHER_API_KEY, CURRENCY_API_KEY } from "./config.js";

/* Weather Information */
const cityInput = document.getElementById("city-input");
const location = document.getElementById("location");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const lastUpdate = document.getElementById("last-update");

/* Capitalize description */
function capitalize(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    // console.log(url);

    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    location.textContent = data.name;
    temperature.textContent = `${data.main.temp} °C`;
    description.textContent = capitalize(data.weather[0].description);
    lastUpdate.textContent = `Last Update: ${new Date().toLocaleTimeString()}`;
  } catch (error) {
    // console.error(error);
    location.textContent = "Error fetching";
  }
}

// When user press enter, fetch weather
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") getWeather(cityInput.value);
});

// Default city
getWeather("Calgary");

/* Currency Convert */
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const exchangeRate = document.getElementById("exchange-rate");

// List of currencies (ChatGPT helped me to create this array)
const currencies = [
  "USD",
  "CAD",
  "EUR",
  "PHP",
  "JPY",
  "AUD",
  "CHF",
  "CNY",
  "NZD",
  "SGD",
  "INR",
  "KRW",
  "MXN",
  "RUB",
  "ZAR",
  "TRY",
  "BRL",
  "HKD",
  "SEK",
  "NOK",
  "DKK",
  "PLN",
  "IDR",
  "MYR",
  "PHP",
  "THB",
  "VND",
  "ILS",
  "SAR",
  "AED",
  "EGP",
  "NGN",
  "PKR",
  "BDT",
  "LKR",
  "TWD",
  "ARS",
  "CLP",
  "COP",
  "PEN",
];

// Create options
currencies.forEach((curr) => {
  const optionFrom = document.createElement("option");
  optionFrom.value = curr;
  optionFrom.textContent = curr;
  fromCurrency.appendChild(optionFrom);

  const optionTo = document.createElement("option");
  optionTo.value = curr;
  optionTo.textContent = curr;
  toCurrency.appendChild(optionTo);
});

// Fetch exchange rate
async function getExchangeRate(from, to) {
  try {
    const url = `https://v6.exchangerate-api.com/v6/${CURRENCY_API_KEY}/pair/${from}/${to}`;
    // console.log(url);

    const response = await fetch(url);
    if (!response.ok) throw new Error("Error fetching exchange rate");
    const data = await response.json();

    exchangeRate.textContent = data.conversion_rate.toFixed(4);
  } catch (error) {
    // console.error(error);
    exchangeRate.textContent = "Error fetching rate";
  }
}

// Update conversion on selection change
fromCurrency.addEventListener("change", () =>
  getExchangeRate(fromCurrency.value, toCurrency.value)
);
toCurrency.addEventListener("change", () =>
  getExchangeRate(fromCurrency.value, toCurrency.value)
);

// Default conversion
getExchangeRate("USD", "CAD");
