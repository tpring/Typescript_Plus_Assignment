import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import { readCountry } from './api/Countries';
import { Country } from './models/types';

function App() {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await readCountry();
                setCountries(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const handleToggle = (countrieName: string) => {
        setCountries((prev) =>
            prev.map((c) => {
                if (c.name === countrieName) {
                    return { ...c, favorite: !c.favorite };
                }
                return c;
            })
        );
    };

    const favoriteCountries = countries.filter((country) => country.favorite);
    const unfavoriteCountries = countries.filter((country) => !country.favorite);

    return (
        <div>
            <CountryList title="Favorite Countries" countries={favoriteCountries} onClick={handleToggle} />
            <CountryList title="Countries" countries={unfavoriteCountries} onClick={handleToggle} />
        </div>
    );
}

export default App;
