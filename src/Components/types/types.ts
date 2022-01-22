export interface ICountry { 
    name: {
        common: string,
    }
    capital: string[];
    population: number;
    latlng: number[];
    flags: {
        png: string;
    }
}

export interface IWeatherInfo { 
    current: {
        weather_icons: string[]
        temperature: number;
        wind_speed: number;
        precip: number;
    }
    location: {
        name: string,        
    },        
}