import * as React from 'react';
import { View, Text } from 'react-native';

import { useThemeStore } from '@/stores/useThemeStore';

import { getFontSize } from '@2600hz/commio-native-utilities';

import TextInputStyles from './textinput.module.scss';
import type { TextInputProps } from './types';

export function TextInput ({
  title,
  disabled = false,
  onPress,
  color,
  bgColor,
  type = 'base',
  size = 'medium',
  styles: propsStyles,
}: TextInputProps) {
  const mode = useThemeStore((state) => state.mode);
  const theme = useThemeStore((state) => state.theme);

  return (
    <View
      onPress={onPress}
      disabled={disabled}
      size={size}
      color={color}
      bgColor={bgColor}
      type={type}
      style={[
        TextInputStyles.textinput,
        {
          backgroundColor: theme.background,
          color: theme.text,
        },
        propsStyles ?? {},
      ]}>
      <Text
        style={[
          {
            color: theme.text,
          },
          propsStyles ?? {},
        ]}
        color={color}>
        TextInput
      </Text>
    </View>
  );
}

export default TextInput;
