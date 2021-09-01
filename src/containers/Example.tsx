import React from 'react';
import {
  Button,
  TextInfo,
  Telicon,
} from '@dfhernandez/sds-react-native-components';
import { capitalize } from '@dfhernandez/js-utilities';
import type { ThemeProps } from '@dfhernandez/native-theme';
import styled, { useTheme } from 'styled-components/native';

const Container = styled.SafeAreaView<ThemeProps>`
  flex: 1;
  background-color: ${(props: ThemeProps) =>
    props.theme.colors.background.main};
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 80px;
`;
const IconContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export function Example ({
  setThemeMode,
}: {
  setThemeMode: (lastTheme: any) => void;
}) {
  const theme = useTheme();

  return (
    <Container>
      {/* Example of Text */}
      <TextInfo
        color={theme.colors.font.main}
        size="xlarge"
        content={`You are using ${capitalize(theme.mode)} mode`}
      />

      {/* Example of Button */}
      <Button
        onPress={() =>
          setThemeMode((lastTheme: string) =>
            lastTheme === 'dark' ? 'light' : 'dark'
          )
        }
        title="Toggle theme mode"
        color={theme.colors.button.secondary}
        size="xsmall"
      />

      {/* Example of Telicon */}
      <IconContainer>
        <Telicon
          name="star"
          size="large"
          fill={theme.colors.icon.secondary}
          fillSecondary="#630007"
        />
        <Telicon
          name="star"
          size="medium"
          fill={theme.colors.icon.secondary}
          fillSecondary="#630007"
        />
        <Telicon
          name="star"
          size="small"
          fill={theme.colors.icon.secondary}
          fillSecondary="#630007"
        />
        <Telicon
          name="star"
          size="xsmall"
          fill={theme.colors.icon.secondary}
          fillSecondary="#630007"
        />
      </IconContainer>
    </Container>
  );
}

export default Example;
