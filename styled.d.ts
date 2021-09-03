import {} from 'styled-components';
import { DefaultThemeProps } from '@dfhernandez/native-theme';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeProps {}
}
