export interface Country {
  data: CountryData[];
  iso_code: string;
}

export interface CountriesProps {
  countriesList: Record<string, Country>;
}

export interface CountryPointProps {
  code: string;
  countriesList: Record<string, Country>;
}

export interface CountryData {
  year: string;
  population: number;
}
