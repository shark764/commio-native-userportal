interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_ToastScss {
  toast: StyleGenericValue;
}

export const ToastStyles: I_ToastScss;

export default ToastStyles;
