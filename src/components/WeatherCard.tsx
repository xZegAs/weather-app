import React from 'react';
import {
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Cloud,
  CloudRain,
  Gauge,
  ThermometerSun,
} from 'lucide-react';

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

interface WeatherCardProps {
  data: WeatherData;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  const getWeatherIcon = () => {
    const iconMap: { [key: string]: React.ReactNode } = {
      '01d': <Sun className="w-20 h-20 text-yellow-400" />,
      '01n': <Sun className="w-20 h-20 text-yellow-400" />,
      '02d': <Cloud className="w-20 h-20 text-blue-300" />,
      '02n': <Cloud className="w-20 h-20 text-blue-300" />,
      '03d': <Cloud className="w-20 h-20 text-blue-300" />,
      '03n': <Cloud className="w-20 h-20 text-blue-300" />,
      '04d': <Cloud className="w-20 h-20 text-blue-300" />,
      '04n': <Cloud className="w-20 h-20 text-blue-300" />,
      '09d': <CloudRain className="w-20 h-20 text-blue-400" />,
      '09n': <CloudRain className="w-20 h-20 text-blue-400" />,
      '10d': <CloudRain className="w-20 h-20 text-blue-400" />,
      '10n': <CloudRain className="w-20 h-20 text-blue-400" />,
    };

    return iconMap[data.icon] || <Cloud className="w-20 h-20 text-blue-300" />;
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur-xl" />
      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">{data.location}</h2>
              <p className="text-slate-400 capitalize">{data.condition}</p>
            </div>
            {getWeatherIcon()}
          </div>

          <div className="mt-8">
            <div className="flex items-baseline gap-4">
              <Thermometer className="w-8 h-8 text-purple-400" />
              <span className="text-6xl font-bold text-white">
                {Math.round(data.temperature)}°C
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/50 p-6">
          <WeatherStat
            icon={<ThermometerSun className="w-5 h-5 text-orange-400" />}
            label="Feels Like"
            value={`${Math.round(data.feels_like)}°C`}
          />
          <WeatherStat
            icon={<Droplets className="w-5 h-5 text-blue-400" />}
            label="Humidity"
            value={`${data.humidity}%`}
          />
          <WeatherStat
            icon={<Wind className="w-5 h-5 text-teal-400" />}
            label="Wind Speed"
            value={`${data.windSpeed} km/h`}
          />
          <WeatherStat
            icon={<Gauge className="w-5 h-5 text-purple-400" />}
            label="Pressure"
            value={`${data.pressure} hPa`}
          />
        </div>
      </div>
    </div>
  );
}

interface WeatherStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function WeatherStat({ icon, label, value }: WeatherStatProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-2">
      {icon}
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-semibold text-white">{value}</p>
    </div>
  );
}