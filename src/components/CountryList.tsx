import React from 'react';
import CountryCard from './CountryCard';
import { Country } from '../models/types';

interface CountryListProps {
    title: string;
    countries: Country[];
    onClick: (countrieName: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({ title, countries, onClick }) => {
    return (
        <div className="max-w-[1200px] mx-auto p-4">
            <h2 className="text-center text-xl font-semibold mt-14">{title}</h2>
            <div className="flex flex-wrap justify-center">
                {countries.map((countrie) => (
                    <div key={countrie.name} className="p-2">
                        <button
                            className={`w-[180px] sm:w-[220px] h-[150px] bg-transparent rounded-lg shadow-lg hover:shadow-xl transition-transform transform 
                                ${title === 'Favorite Countries' ? 'border border-green-500' : ''}`}
                            onClick={() => onClick(countrie.name)}
                        >
                            <CountryCard countrie={countrie} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryList;
