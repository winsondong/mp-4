export interface DayForecast {
	datetime: string;
	temp: number;
    tempmin: number;
	tempmax: number;
    humidity: number;
    windspeed: number;
	feelslike: number;
	conditions: string;
}

export interface WeatherResponse {
    resolvedAddress: string;
    days: DayForecast[]
}

