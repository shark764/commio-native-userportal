import type { DefaultTheme } from 'styled-components/native';

export const darkTheme: DefaultTheme = {
  mode: 'dark',

  borderRadius: '8px',

  colors: {
    main: '#1e1f26',
    secondary: '#283655',

    background: {
      main: '#4d648d',
      secondary: '#d0e1f9',
    },

    font: {
      main: '#1e1f26',
      secondary: '#000000',
    },

    button: {
      main: '#1e1f26',
      secondary: '#283655',
    },

    icon: {
      main: '#1e1f26',
      secondary: '#283655',
    },
  },
};

export const lightTheme: DefaultTheme = {
  mode: 'light',

  borderRadius: '8px',

  colors: {
    main: '#f1f1f2',
    secondary: '#bcbabe',

    background: {
      main: '#a1d6e2',
      secondary: '#1995ad',
    },

    font: {
      main: '#f1f1f2',
      secondary: '#000000',
    },

    button: {
      main: '#f1f1f2',
      secondary: '#bcbabe',
    },

    icon: {
      main: '#f1f1f2',
      secondary: '#bcbabe',
    },
  },
};
