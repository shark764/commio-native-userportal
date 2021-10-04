interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_TeliconScss {
  telicon: StyleGenericValue;
}

export const TeliconStyles: I_TeliconScss;

export default TeliconStyles;
