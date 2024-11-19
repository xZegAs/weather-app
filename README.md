# Weather App 🌦️

An intuitive weather application that delivers real-time weather information and forecasts for any location. This app is built with modern web technologies and APIs to provide accurate and user-friendly weather updates.

## Features

- **🌍 Geolocation Support**: Automatically detects your location to display weather data.
- **☁️ Real-time Updates**: Includes temperature, humidity, atmospheric pressure, and wind data.
- **🌅 Day Details**: Displays sunrise and sunset timings.
- **📅 Forecast Options**: Shows weather predictions for upcoming days.
- **📱 Responsive Design**: Adaptable for desktop, tablet, and mobile devices.

## Technologies Used

- **React.js**: JavaScript library for building dynamic user interfaces.
- **Vercel**: Platform for hosting and utilizing edge functions.
- **OpenWeatherMap API**: For fetching real-time and forecast weather data.
- **Chakra UI**: For modern and responsive UI components.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone this repository:

```bash
  git clone https://github.com/xZegAs/weather-app.git
```

2. Navigate to the project directory:

```bash
  cd weather-app
```

3. Install dependencies:

```bash
npm install
```

# Configuration

1. Create a .env file at the root of the project and add the following:

```makefile
REACT_APP_OPEN_WEATHER_MAP_API_KEY=your_api_key
```

- Get your API key from [OpenWeatherMap](https://openweathermap.org/api).

2. (Optional) Configure a Google Places API key for enhanced location data:

```makefile
REACT_APP_GOOGLE_PLACES_API_KEY=your_api_key
```

# Running the App

Start the development server:

```bash
npm start
```

Open your browser and navigate to localhost URL.

# Deployment

This app is deployed using [Vercel](https://vercel.com/). Follow these steps to deploy your version:

1. Connect your GitHub repository to Vercel.
2. Add environment variables in the Vercel dashboard.
3. Deploy with one click via Vercel.

# Future Enhancements

- Store user-selected locations persistently.

- Implement automatic data refresh to ensure up-to-date weather reports.

- Add unit and integration tests to improve code quality.

- Enhance map-based location selection and weather visualization.

# Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api) for reliable weather data.

- [ChakraUI](https://chakra-ui.com/) for responsive design components.

- [Vercel](https://vercel.com/) for deployment and hosting services.

# Live Demo

[Check out the app live here!](https://weather-app-brown-seven-72.vercel.app/)

Feel free to contribute, suggest features, or report bugs by opening an issue on the repository!

This README file is structured to provide clarity and ease of use for developers and users interested in the app. Let me know if additional details or customizations are needed!
