import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
  Button,
  TextInfo,
  Telicon,
} from '@dfhernandez/sds-react-native-components';
import styled from 'styled-components/native';
import type { Sizes } from '@dfhernandez/sds-react-native-components/lib/typescript/src/components/TextInfo/types';

import { StatusBar } from 'expo-status-bar';
import type { darkTheme } from './styles/theme';
import AppThemeProvider from './providers/appThemeProvider';

const colors = [
  'rgb(0, 0, 0)', // black
  'rgb(255, 159, 64)', // orange
  'brown',
  'rgb(255, 99, 132)', // pink
  'rgb(54, 162, 235)', // blue
  'rgb(0, 100, 192)', // green
  'rgb(255, 206, 86)', // yellow
  'rgb(153, 102, 255)', // purple
  '#45914f',
  '#205070',
  'orange',
  'lightgreen',
  'cyan',
  'darkblue',
  'darkcyan',
  '#47915d',
];

const sizes: { [key: number]: Sizes; } = {
  0: 'default',
  1: 'xsmall',
  2: 'small',
  3: 'medium',
  4: 'large',
  5: 'xlarge',
};
const getTextSize = (idx: number): Sizes => sizes[idx > 5 ? 5 : idx];

type ThemeType = typeof darkTheme;
interface StyledThemeType {
  theme: ThemeType;
}

const Row = styled.View`
  padding: 20px;
  border: 4px;
  border-style: dotted;
  border-color: cyan;
  border-radius: 8px;
`;
const Slider2 = styled.Slider`
  margin-top: 30px;
  width: 90%;
`;
const Container = styled.SafeAreaView<StyledThemeType>`
  flex: 1;
  background-color: ${(props: StyledThemeType) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
  padding: 80px;
`;

const TextContainer = styled.View<StyledThemeType>`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid
    ${(props: StyledThemeType) => props.theme.PRIMARY_TEXT_COLOR};
`;

const Title = styled.Text<StyledThemeType>`
  padding: 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props: StyledThemeType) => props.theme.PRIMARY_TEXT_COLOR};
`;

const TouchableButton = styled.TouchableOpacity<StyledThemeType>`
  margin-top: 20px;
  background-color: ${(props: StyledThemeType) =>
    props.theme.SECONDARY_BUTTON_COLOR};
  border-radius: 5px;
  padding: 5px;
`;

const ButtonText = styled.Text<StyledThemeType>`
  font-size: 20px;
  color: ${(props: StyledThemeType) => props.theme.SECONDARY_TEXT_COLOR};
`;

export function App () {
  const [result, setResult] = React.useState<number | undefined>();
  const [index, setIndex] = useState(1);
  const primaryColor = colors[index - 1];
  const secondaryColor = colors[index % colors.length];
  const [themeMode, setThemeMode] = useState('light');

  React.useEffect(() => {
    runMultiply();
  }, []);

  const runMultiply = () => {
    setResult(3 * 7);
  };

  const runDivide = () => {
    setResult(3 / 7);
  };

  return (
    <AppThemeProvider mode={themeMode}>
      <SafeAreaView>
        <ScrollView>
          <Container>
            <TextInfo color="blue" size={getTextSize(index)}>
              Result: {result}
            </TextInfo>
            <Button
              onPress={runDivide}
              title="Divide this shit!"
              size="small"
            />

            <Button
              onPress={runMultiply}
              title="Multiply this shit!"
              color="#e22d39"
              size="xsmall"
            />

            <Row>
              <Telicon
                name="star"
                size="small"
                fill={primaryColor}
                fillSecondary={secondaryColor}
              />
            </Row>

            <Row>
              <Telicon
                name="volume-x"
                size="xsmall"
                fill={secondaryColor}
                fillSecondary={primaryColor}
              />
            </Row>

            <Row>
              <Telicon
                name="warning--octagon"
                size="small"
                fill={primaryColor}
                fillSecondary={secondaryColor}
              />
            </Row>

            <Slider2
              step={1}
              minimumValue={1}
              maximumValue={colors.length}
              onValueChange={setIndex}
            />

            <Button
              title="This is another btn"
              onPress={() => setIndex((idx) => idx + 1)}
            />

            <TextContainer>
              <Title>Themed App with React Native & Styled Components</Title>
            </TextContainer>
            {themeMode === 'light'
              ? (
                <TouchableButton onPress={() => setThemeMode('dark')}>
                  <ButtonText>Switch to Dark Theme</ButtonText>
                </TouchableButton>
              )
              : (
                <TouchableButton onPress={() => setThemeMode('light')}>
                  <ButtonText>Switch to Light Theme</ButtonText>
                </TouchableButton>
              )}

            <Button
              onPress={() =>
                setThemeMode((lastTheme) =>
                  lastTheme === 'dark' ? 'light' : 'dark'
                )
              }
              title="Toggle Theme"
            />

            <Telicon name="star" fill={primaryColor} fillSecondary="gray" />
          </Container>
        </ScrollView>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="dark" />
      </SafeAreaView>
    </AppThemeProvider>
  );
}

export default App;
