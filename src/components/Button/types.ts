export interface ButtonProps {
  titlePressIn?: string;
  titlePressOut?: string;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  styles?: {
    [key: string]: string | number;
  };
}
