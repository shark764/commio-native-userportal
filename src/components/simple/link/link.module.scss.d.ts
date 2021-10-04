interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_LinkScss {
  link: StyleGenericValue;
}

export const LinkStyles: I_LinkScss;

export default LinkStyles;
