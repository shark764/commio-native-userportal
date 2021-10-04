export interface PasswordProps {
  content?: string;
  title?: string;
  color?: string;
  bgColor?: string;
  type?: TypeProps;
  size?: SizeProps;
  disabled: boolean;
  styles?: {
    [key: string]: string | number;
  };
}
