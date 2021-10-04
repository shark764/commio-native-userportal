import * as React from 'react';
import { View, Text } from 'react-native';

import { useThemeStore } from '@/stores/useThemeStore';

import { getFontSize } from '@2600hz/commio-native-utilities';

import LinkStyles from './link.module.scss';
import type { LinkProps } from './types';

export function Link ({
  title,
  disabled = false,
  onPress,
  color,
  bgColor,
  type = 'base',
  size = 'medium',
  styles: propsStyles,
}: LinkProps) {
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
        LinkStyles.link,
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
        Link
      </Text>
    </View>
  );
}

export default Link;
