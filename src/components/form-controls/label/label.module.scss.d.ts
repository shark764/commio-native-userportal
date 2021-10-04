interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_LabelScss {
  label: StyleGenericValue;
}

export const LabelStyles: I_LabelScss;

export default LabelStyles;
