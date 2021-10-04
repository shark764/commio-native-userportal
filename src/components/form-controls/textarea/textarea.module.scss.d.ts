interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_TextareaScss {
  textarea: StyleGenericValue;
}

export const TextareaStyles: I_TextareaScss;

export default TextareaStyles;
