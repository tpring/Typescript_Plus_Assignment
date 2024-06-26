import axios from 'axios';
import { Country, APICountry } from '../types/types';

export const readCountry = async (): Promise<Country[]> => {
    const { data } = await axios.get('https://restcountries.com/v3.1/all');

    return data.map((country: APICountry) => ({
        name: country.name.common,
        capital: country.capital,
        flag: country.flags.png,
        favorite: false,
    }));
};
