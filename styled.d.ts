import {} from 'styled-components';
import { DefaultThemeProps } from '@2600hz/sds-native-theme';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeProps {}
}
