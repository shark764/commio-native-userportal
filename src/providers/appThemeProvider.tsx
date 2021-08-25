import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from '../styles/theme';

interface Props {
  mode: string;
  children: React.ReactNode;
}
type Theme = typeof darkTheme;

const themeMap: { [key: string]: Theme; } = {
  light: lightTheme,
  dark: darkTheme,
};

function AppThemeProvider ({
  mode = 'dark',
  children,
}: Props): React.ReactElement {
  const theme: Theme = themeMap[mode];
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
