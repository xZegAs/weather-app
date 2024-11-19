import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface WeatherFormProps {
  onSearch: (location: string) => void;
  isLoading: boolean;
}

export default function WeatherForm({ onSearch, isLoading }: WeatherFormProps) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200" />
      <div className="relative">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search for a city..."
          className="w-full bg-slate-800/50 backdrop-blur-sm text-white placeholder-slate-400 px-6 py-4 rounded-lg border border-slate-700 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all pl-14"
          disabled={isLoading}
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
        <button
          type="submit"
          disabled={isLoading || !location.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-md font-medium hover:from-purple-500 hover:to-pink-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}