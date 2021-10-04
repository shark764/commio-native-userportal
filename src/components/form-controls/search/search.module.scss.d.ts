interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_SearchScss {
  search: StyleGenericValue;
}

export const SearchStyles: I_SearchScss;

export default SearchStyles;
