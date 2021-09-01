import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';

    borderRadius: string;

    colors: {
      main: string;
      secondary: string;

      background: {
        main: string;
        secondary: string;
      };

      font: {
        main: string;
        secondary: string;
      };

      button: {
        main: string;
        secondary: string;
      };

      icon: {
        main: string;
        secondary: string;
      };
    };
  }
}
