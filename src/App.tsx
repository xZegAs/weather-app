import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import { CloudLightning } from "lucide-react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  feels_like: number;
  pressure: number;
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (location: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_URL}?q=${location}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Location not found. Please try again.");
      }

      const data = await response.json();
      setWeatherData({
        location: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
        feels_like: data.main.feels_like,
        pressure: data.main.pressure,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-12">
          <CloudLightning className="w-10 h-10 text-purple-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Weather App
          </h1>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <WeatherForm onSearch={handleSearch} isLoading={isLoading} />

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-center">
              {error}
            </div>
          )}

          {weatherData && <WeatherCard data={weatherData} />}

          {!weatherData && !error && (
            <div className="text-center opacity-60 mt-12">
              <p className="text-lg">Enter a location to check the weather</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
