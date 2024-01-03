# Weather App ⛈️🌦️

This simple weather app utilizes Node.js and Express for the server-side logic and a basic HTML interface for user interaction. The backend fetches real-time weather data for multiple cities from a weather API, and the frontend provides a user-friendly interface to input city names and display the weather results.

## Tech Stack

[![Tech](https://skillicons.dev/icons?i=html,js,express,&theme=dark)](https://skillicons.dev)

### Dependencies

- **Express**: For building the server and handling HTTP requests.
- **Axios**: A promise-based HTTP client for making requests to the weather API.
- **dotenv**: For managing environment variables.
- **cors**: Middleware to enable Cross-Origin Resource Sharing.

### Functionality

1. **Server Setup**: Express server is created, configured to use JSON parsing, and equipped with CORS for handling cross-origin requests.
2. **API Endpoint (/getWeather)**: Accepts a POST request with an array of city names. It then fetches real-time weather data for each city asynchronously and responds with a JSON object containing the weather for each city.

3. **Weather Fetching Function (getWeatherData)**: Uses Axios to fetch weather data from a specified API endpoint for a given city. The results are processed and returned.

4. **Error Handling**: Proper error handling is implemented, ensuring a graceful response in case of invalid input or API errors.

5. **Server Listening**: The server listens on a specified port (default: 3000).

### Usage

1. Clone the repository and install dependencies (`npm install`).
2. Set up the necessary environment variables (API_KEY, API_URL) in a `.env` file.
3. Run the server (`node app.js`).
4. Open the `index.html` file in a browser to interact with the weather app.
