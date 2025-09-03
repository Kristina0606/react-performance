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

export interface CountryDataTableProps {
  paramCountry: string;
}

export interface CountryData {
  year: string;
  population: number;
  cement_co2: number;
  cement_co2_per_capita: number;
}
