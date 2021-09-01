import * as React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from '../styles/theme';

interface Props {
  mode: string;
  children: React.ReactNode;
}

const themeMap: { [key: string]: DefaultTheme; } = {
  light: lightTheme,
  dark: darkTheme,
};

function AppThemeProvider ({
  mode = 'dark',
  children,
}: Props): React.ReactElement {
  const theme: DefaultTheme = themeMap[mode];
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
