export interface Country {
  iso_code: string;
  data: CountryData[];
}

export interface CountriesProps {
  countriesList: string[];
}

export interface CountryPointProps {
  code: string;
  country: Country;
}

export interface CountryDataTableProps {
  paramCountry: string;
}

export interface SkeletonCountryLoaderProps {
  count: number;
}

export interface CountryData {
  year: number;
  population: number;
  cement_co2: number;
  cement_co2_per_capita: number;
}
