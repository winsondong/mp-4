import Link from "next/link"
import { getWeatherData } from "@/lib/get-weather-data"

interface PageProps {
  params: Promise<{ city: string }>;
}

export default async function WeatherPage({ params }: PageProps) {
  const resolvedParams = await params;
  const cityName = resolvedParams.city;
  const weather = await getWeatherData(cityName);

  if (!weather) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">City not found</h1>
        <p className="text-black-500 mb-6">Double-check your spelling or try a nearby city.</p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Search
        </Link>
      </div>
    )
  }

  const today = weather.days[0]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-1">Weather for {weather.resolvedAddress}</h1>
        <p className="text-black-600">Forecast for {today.datetime}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-blue-50 p-6 rounded-xl shadow-md">
        <div className="text-center md:text-left">
          <p className="text-5xl font-bold text-blue-700">{today.temp}°F</p>
          <p className="text-lg font-medium text-blue-800">{today.conditions}</p>
        </div>
        <div className="space-y-1 text-blue-900 text-sm">
          <p>Feels Like: {today.feelslike}°F</p>
          <p>Humidity: {today.humidity}%</p>
          <p>Wind Speed: {today.windspeed} mph</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">7-Day Outlook</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {weather.days.slice(1, 8).map((day, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <p className="font-medium mb-1">{day.datetime}</p>
              <p className="text-lg font-semibold">{day.temp}°F</p>
              <p className="text-sm text-gray-600">{day.conditions}</p>

              <div className="text-xs mt-2 text-gray-500">
                <p>High: {day.tempmax}°F</p>
                <p>Low: {day.tempmin}°F</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
