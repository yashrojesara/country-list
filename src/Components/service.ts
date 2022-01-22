import axios from 'axios'

const countryAxiosInstance = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'
})

const capitalAxiosInstance = axios.create({
    baseURL: 'http://api.weatherstack.com/'
})

export const getCountriesByName = async(name: string) => {
    return await countryAxiosInstance.get(`/name/${name}`);        
}

export const getWeatherByCapital = async(capital: string) => {
    return await capitalAxiosInstance.get(`current?access_key=${process.env.React_APP_API_KEY}&query=${capital}`)         
}
