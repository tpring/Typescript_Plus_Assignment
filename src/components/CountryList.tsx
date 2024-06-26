import React from 'react';
import CountryCard from './CountryCard';
import { CountryListProps } from '../types/types';
import styled from 'styled-components';

const CountryList: React.FC<CountryListProps> = ({ title, countries, setCountries }) => {
    return (
        <div>
            <H2Title>{title}</H2Title>
            <Wrapper>
                {countries.map((countrie, index) => (
                    <div key={index}>
                        <CountryCard countrie={countrie} setCountries={setCountries} />
                    </div>
                ))}
            </Wrapper>
        </div>
    );
};

export default CountryList;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const H2Title = styled.h2`
    text-align: center;
`;
