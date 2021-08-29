import React from 'react';
import {
  Button,
  TextInfo,
  Telicon,
  // ThemeModeProps,
  ThemeProps,
} from '@dfhernandez/sds-react-native-components';
import styled, { useTheme } from 'styled-components/native';

const Container = styled.SafeAreaView<ThemeProps>`
  flex: 1;
  background-color: ${(props: ThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
  padding: 80px;
`;

export function Example ({
  themeMode,
  setThemeMode,
}: {
  themeMode: string;
  setThemeMode: (lastTheme: any) => void;
}) {
  const theme = useTheme();

  console.log('theme', theme);

  return (
    <Container>
      {/* Example of Button */}
      <Button
        onPress={() =>
          setThemeMode((lastTheme: string) =>
            lastTheme === 'dark' ? 'light' : 'dark'
          )
        }
        title="Toggle theme mode"
        color="#e22d39"
        size="xsmall"
      />

      {/* Example of Text */}
      <TextInfo
        // color={theme.PRIMARY_TEXT_COLOR}
        color="#e22d39"
        size="xlarge"
        content={`You are using ${themeMode} mode`}
      />

      {/* Example of Telicon */}
      <Telicon
        name="star"
        size="small"
        fill="#e22d39"
        fillSecondary="#630007"
      />
    </Container>
  );
}

export default Example;
