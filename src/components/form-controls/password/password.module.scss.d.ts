interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_PasswordScss {
  password: StyleGenericValue;
}

export const PasswordStyles: I_PasswordScss;

export default PasswordStyles;
