import React from 'react';
import { Country } from '../models/types';
interface CountryCardProps {
    countrie: Country;
}
const CountryCard: React.FC<CountryCardProps> = ({ countrie }) => {
    return (
        <div className="flex-col justify-center ">
            <img src={countrie.flags} className="w-[60px] h-[40px] mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{countrie.name}</h3>
            <p className="text-gray-600">{countrie.capital}</p>
        </div>
    );
};

export default CountryCard;
