import React from 'react';
import { CountryCardProps } from '../types/types';
import styled from 'styled-components';

const CountryCard: React.FC<CountryCardProps> = ({ countrie, setCountries }) => {
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

    return (
        <div>
            <ButtonToggle onClick={() => handleToggle(countrie.name)}>
                <img src={countrie.flags} width="80" />
                <h3>{countrie.name}</h3>
                <p>{countrie.capital}</p>
            </ButtonToggle>
        </div>
    );
};

export default CountryCard;

const ButtonToggle = styled.button`
    width: 230px;
    height: 200px;
    background-color: transparent;
    margin-left: 15px;
    margin-bottom: 20px;
    box-shadow: 0px 1px 10px rgba(174, 174, 174, 0.5);
`;
