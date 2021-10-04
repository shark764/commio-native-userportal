interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_AvatarScss {
  avatar: StyleGenericValue;
}

export const AvatarStyles: I_AvatarScss;

export default AvatarStyles;
