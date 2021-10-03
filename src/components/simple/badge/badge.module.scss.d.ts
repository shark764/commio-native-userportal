interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_BadgeScss {
  button: StyleGenericValue;
}

export const styles: I_BadgeScss;

export default styles;
