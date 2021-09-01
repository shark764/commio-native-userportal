import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  DefaultThemeProps,
  darkTheme,
  lightTheme,
} from '@dfhernandez/native-theme';

interface Props {
  mode: string;
  children: React.ReactNode;
}

const themeMap: { [key: string]: DefaultThemeProps; } = {
  light: lightTheme,
  dark: darkTheme,
};

function AppThemeProvider ({
  mode = 'dark',
  children,
}: Props): React.ReactElement {
  const theme: DefaultThemeProps = themeMap[mode];
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
