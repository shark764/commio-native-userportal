interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_ButtonScss {
  button: StyleGenericValue;
  pressIn: StyleGenericValue;
  pressOut: StyleGenericValue;
  titlePressIn: StyleGenericValue;
  titlePressOut: StyleGenericValue;
}

export const styles: I_ButtonScss;

export default styles;
