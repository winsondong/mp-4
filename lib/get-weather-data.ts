import { WeatherResponse } from "@/types";

export async function getWeatherData(city: string) {
    try {
        const API_KEY = process.env.WEATHER_API_KEY;
        const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
            city
        )}?key=${API_KEY}`;
        const response = await fetch(URL);
        return (await response.json()) as WeatherResponse;
    } catch (err) {
        console.error("Error fetching weather:", err);
        return null;
    }
};