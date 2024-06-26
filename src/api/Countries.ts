import axios from 'axios';
import { Country } from '../types/types';

export const readCountry = async (): Promise<Country[]> => {
    const { data } = await axios.get('https://restcountries.com/v3.1/all');

    return data.map((country: any) => ({
        name: country.name.common,
        capital: country.capital ? country.capital[0] : 'N/A',
        flag: country.flags.png,
        favorite: false,
    }));
};
