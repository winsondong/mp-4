'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function CitySearch() {
  const [city, setCity] = useState('')
  const router = useRouter();

  const toSubmit = () => {
		router.push(`/${encodeURIComponent(city)}`);
	};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">Weather Forecast</h1>
      <p className="text-sm text-gray-600 text-center">
        Enter a city name to get the weather forecast
      </p>

      <label htmlFor="city-input" className="block text-sm font-bold text-gray-700">
        City Name
      </label>
      <input
        id="city-input"
        type="text"
        value={city}
        placeholder="e.g. Mount Sterling, New York, Boston"
        onChange={(e) => setCity(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        onClick={toSubmit}
      >
        Get Weather
      </button>
    </div>
  )
}
