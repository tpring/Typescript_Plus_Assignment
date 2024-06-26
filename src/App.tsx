import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import { readCountry } from './api/Countries';
import { Country } from './types/types';

function App() {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await readCountry();
                const dataWithFavorite: Country[] = data.map((country) => ({
                    ...country,
                    favorite: false,
                }));
                setCountries(dataWithFavorite);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const favoriteCountries = countries.filter((country) => country.favorite);
    const unfavoriteCountries = countries.filter((country) => !country.favorite);

    return (
        <div>
            <CountryList title="Favorite Countries" countries={favoriteCountries} setCountries={setCountries} />
            <CountryList title="Countries" countries={unfavoriteCountries} setCountries={setCountries} />
        </div>
    );
}

export default App;
