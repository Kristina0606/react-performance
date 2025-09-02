export interface Country {
  data: object[];
  iso_code: string;
}

export interface CountriesProps {
  countriesList: Record<string, Country>;
}
