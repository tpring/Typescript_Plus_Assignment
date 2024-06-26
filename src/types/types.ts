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

export interface CountryListProps {
    title: string;
    countries: Country[];
    setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}
export interface CountryCardProps {
    countrie: Country;
    //https://w-world.tistory.com/316
    setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

// 확장성: type은 기존 타입을 조합하여 새로운 타입을 만드는 데 사용되며, interface는 주로 객체의 형태를 정의하는 데 사용됩니다. class는 객체지향 프로그래밍에서 클래스를 정의할 때 사용됩니다.

// 구현 가능 여부: interface와 class는 TypeScript에서 구현이 가능하지만, type은 그렇지 않습니다. 즉, type으로 정의한 타입은 실제로 객체를 생성하거나 클래스를 정의할 수 없습니다.

// 유연성: type은 유니온(Union)이나 인터섹션(Intersection)과 같은 고급 타입 연산을 제공하는 반면, interface는 주로 객체의 형태를 보다 명확하게 정의하는 데 집중합니다.
