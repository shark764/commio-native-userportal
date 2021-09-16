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
  SizeProps,
} from '@2600hz/sds-react-native-components';
import type { ThemeProps } from '@2600hz/sds-react-native-theme';
import JsIcon from '@assets/svg/js-logo.svg';
import ReactIcon from '@assets/svg/react-logo.svg';

import { expoXml, githubXml } from './utils';

const { width } = Dimensions.get('window');
const iconSize = width * 0.25;

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

const sizesSet: SizeProps[] = ['xsmall', 'small', 'medium', 'large', 'xlarge'];

export function Example ({
  setThemeMode,
}: {
  setThemeMode: (lastTheme: any) => void;
}) {
  const theme = useTheme();

  return (
    <Container>
      {/* Example of Text */}
      <TextInfo content="Example of Text" />
      <ComponentContainer>
        {sizesSet.map((sizeItem: SizeProps) => (
          <TextInfo
            key={sizeItem}
            color={theme.colors.font.main}
            size={sizeItem}
            content={`I'm a text in ${sizeItem} size`}
          />
        ))}
      </ComponentContainer>

      <Divider />

      {/* Example of Button */}
      <TextInfo content="Example of Button" />
      <ComponentContainer>
        <Button
          onPress={() => setThemeMode('dark')}
          title="Active dark mode"
          bgColor={theme.colors.button.main}
          color={theme.colors.font.secondary}
          size="xsmall"
        />
        <Button
          onPress={() => setThemeMode('light')}
          title="Active light mode"
          bgColor={theme.colors.button.secondary}
          color={theme.colors.font.main}
          size="xsmall"
        />
      </ComponentContainer>
      <TextInfo
        size="xlarge"
        color={theme.colors.font.secondary}
        content={`You are using ${capitalize(theme.mode)} mode`}
      />

      <Divider />

      {/* Example of Telicon */}
      <TextInfo content="Example of Telicon" />
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
        <Telicon
          name="star"
          size="xsmall"
          fill={theme.colors.icon.main}
          fillSecondary="black"
        />
      </ComponentContainer>

      <Divider />

      {/* Example of SvgFromXml using app's configuration */}
      <TextInfo content="Example of Svg using app's configuration" />
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
      <TextInfo content="Example of Svg From Xml" />
      <ComponentContainer>
        <SvgFromXml
          xml={githubXml}
          // size="small"
          width={theme.sizes.icon.small}
          height={theme.sizes.icon.small}
          fill={theme.colors.icon.main}
          fillSecondary={theme.colors.icon.secondary}
        />
        <SvgFromXml
          xml={ReactIcon}
          width={iconSize}
          height={iconSize}
          // size="small"
          fill={theme.colors.icon.main}
          fillSecondary={theme.colors.icon.secondary}
        />
        <SvgFromXmlString
          xml={expoXml}
          width={theme.sizes.icon.medium}
          height={theme.sizes.icon.medium}
          // size="small"
          fill={theme.colors.icon.main}
          fillSecondary={theme.colors.icon.secondary}
        />
        <SvgFromXmlFile
          Xml={JsIcon}
          // width={theme.sizes.icon.large}
          // height={theme.sizes.icon.large}
          // width={theme.sizes.icon.large}
          // height={theme.sizes.icon.large}
          // size="large"
          size="small"
          fill={theme.colors.icon.main}
          fillSecondary={theme.colors.icon.secondary}
        />
      </ComponentContainer>
    </Container>
  );
}

export default Example;
