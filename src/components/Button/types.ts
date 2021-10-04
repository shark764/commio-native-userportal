export interface ButtonProps {
  title?: string;
  titlePressIn?: string;
  titlePressOut?: string;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  styles?: {
    [key: string]: string | number;
  };
}
