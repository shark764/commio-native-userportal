import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import type { ThemeModeProps } from '@dfhernandez/sds-react-native-components';
import { darkTheme, lightTheme } from '../styles/theme';

interface Props {
  mode: string;
  children: React.ReactNode;
}

const themeMap: { [key: string]: ThemeModeProps; } = {
  light: lightTheme,
  dark: darkTheme,
};

function AppThemeProvider ({
  mode = 'dark',
  children,
}: Props): React.ReactElement {
  const theme: ThemeModeProps = themeMap[mode];
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
