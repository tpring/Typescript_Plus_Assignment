export interface APICountry {
    name: {
        common: string;
    };
    capital: string;
    flags: {
        png: string;
    };
    favorite: boolean;
}
export interface Country {
    name: string;
    capital: string;
    flags: string;
    favorite: boolean;
}
