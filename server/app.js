const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/getWeather", async (req, res) => {
  try {
    const { cities } = req.body;

    if (!cities || !Array.isArray(cities)) {
      return res.status(400).json({ error: "Invalid input format" });
    }

    const weatherPromises = cities.map(async (city) => {
      const weatherData = await getWeatherData(city);
      return { [city]: weatherData };
    });

    const weatherResults = await Promise.all(weatherPromises);

    const response = { weather: {} };
    weatherResults.forEach((result) => {
      Object.assign(response.weather, result);
    });

    res.json(response);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

async function getWeatherData(city) {
  const apiKey = process.env.API_KEY;
  const apiEndpoint = `${process.env.API_URL}current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await axios.get(apiEndpoint);
    console.log(response);
    const temperature = response.data.current.temp_c;
    return `${temperature}C`;
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error.message);
    return "N/A";
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
