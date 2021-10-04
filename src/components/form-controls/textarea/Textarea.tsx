import * as React from 'react';
import { View, Text } from 'react-native';

import { useThemeStore } from '@/stores/useThemeStore';

import { getFontSize } from '@2600hz/commio-native-utilities';

import TextareaStyles from './textarea.module.scss';
import type { TextareaProps } from './types';

export function Textarea ({
  title,
  disabled = false,
  onPress,
  color,
  bgColor,
  type = 'base',
  size = 'medium',
  styles: propsStyles,
}: TextareaProps) {
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
        TextareaStyles.textarea,
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
        Textarea
      </Text>
    </View>
  );
}

export default Textarea;
