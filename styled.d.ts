import {} from 'styled-components';
import { DefaultThemeProps } from '@dfhernandez/sds-native-theme';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeProps {}
}
