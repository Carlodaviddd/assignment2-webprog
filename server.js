import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("public"));

// Weather
app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json({
      name: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
      timestamp: new Date().toLocaleTimeString(),
    });
  } catch (err) {
    res.status(500).json({ error: "Error fetching weather" });
  }
});

// Currency
app.get("/convert/:from/:to", async (req, res) => {
  const { from, to } = req.params;
  const url = `https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_API_KEY}/pair/${from}/${to}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    res.json({ conversion_rate: data.conversion_rate });
  } catch (err) {
    res.status(500).json({ error: "Error fetching conversion" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
