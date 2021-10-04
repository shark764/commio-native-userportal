interface StyleGenericValue {
  [key: string]: string | number;
}

export interface I_BadgeScss {
  badge: StyleGenericValue;
}

export const BadgeStyles: I_BadgeScss;

export default BadgeStyles;
