import React from 'react';
import {
  Button,
  TextInfo,
  Telicon,
  ThemeProps,
} from '@dfhernandez/sds-react-native-components';
import { capitalize } from '@dfhernandez/js-utilities';
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
  setThemeMode,
}: {
  setThemeMode: (lastTheme: any) => void;
}) {
  const theme = useTheme();

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
        // color="#e22d39"
        color={theme.colors.button.main}
        size="xsmall"
      />

      {/* Example of Text */}
      <TextInfo
        // color="#e22d39"
        color={theme.colors.font.main}
        size="xlarge"
        content={`You are using ${capitalize(theme.mode)} mode`}
      />

      {/* Example of Telicon */}
      <Telicon
        name="star"
        size="small"
        // color="#e22d39"
        color={theme.colors.icon.main}
        fillSecondary="#630007"
      />
    </Container>
  );
}

export default Example;
