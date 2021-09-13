import React from 'react';
import { Dimensions } from 'react-native';

import styled, { useTheme } from 'styled-components/native';

import { capitalize } from '@2600hz/commio-native-utilities';
import {
  Button,
  TextInfo,
  Telicon,
  SvgFromXml,
  SvgFromXmlFile,
  SvgFromXmlString,
} from '@2600hz/sds-react-native-components';
import type { ThemeProps } from '@2600hz/sds-react-native-theme';
import ReactIcon from '@assets/svg/react-logo.svg';

import { expoXml, githubXml } from './utils';

const { width } = Dimensions.get('window');
const iconSize = width * 0.35;

const Container = styled.SafeAreaView<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }: ThemeProps) => theme.colors.background.main};
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 80px;
`;
const ComponentContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
const Divider = styled.View`
  border-bottom-color: ${({ theme }) => theme.colors.main};
  border-bottom-width: 1px;
  width: 70%;
  padding: 20px;
`;
const HeaderText = styled(TextInfo)`
  color: ${({ theme }) => theme.colors.font.secondary};
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
        onPress={() => setThemeMode('dark')}
        title="Active dark mode"
        color={theme.colors.button.secondary}
        size="xsmall"
      />
      <Button
        onPress={() => setThemeMode('light')}
        title="Active light mode"
        color={theme.colors.button.secondary}
        size="xsmall"
      />

      <Divider />

      {/* Example of Telicon */}
      <HeaderText content="Example of Telicon" />
      <ComponentContainer>
        <Telicon
          name="star"
          size="large"
          fill={theme.colors.icon.main}
          fillSecondary="black"
        />
        <Telicon
          name="star"
          size="medium"
          fill={theme.colors.icon.main}
          fillSecondary="black"
        />
        <Telicon
          name="star"
          size="small"
          fill={theme.colors.icon.main}
          fillSecondary="black"
        />
      </ComponentContainer>

      <Divider />

      {/* Example of SvgFromXml using app's configuration */}
      <HeaderText content="Example of Svg using app's configuration" />
      <ComponentContainer>
        <ReactIcon
          width={iconSize}
          height={iconSize}
          fill={theme.colors.icon.main}
          fillSecondary={theme.colors.icon.secondary}
        />
      </ComponentContainer>

      <Divider />

      {/* Example of SvgFromXml */}
      <HeaderText content="Example of Svg From Xml" />
      <ComponentContainer>
        <SvgFromXml
          xml={githubXml}
          size="small"
          fill={theme.colors.icon.main}
          fillSecondary={theme.colors.icon.secondary}
        />
        <SvgFromXml
          xml={ReactIcon}
          width={iconSize}
          height={iconSize}
          size="small"
          fill={theme.colors.icon.main}
          fillSecondary={theme.colors.icon.secondary}
        />
        <SvgFromXmlString
          xml={expoXml}
          width={theme.sizes.icon.small}
          height={theme.sizes.icon.small}
          size="small"
          fill={theme.colors.icon.main}
          fillSecondary={theme.colors.icon.secondary}
        />
        <SvgFromXmlFile
          Xml={ReactIcon}
          width={theme.sizes.icon.large}
          height={theme.sizes.icon.large}
          // size="large"
          // size="small"
          fill={theme.colors.icon.main}
          fillSecondary={theme.colors.icon.secondary}
        />
      </ComponentContainer>
    </Container>
  );
}

export default Example;
