import * as React from 'react';
import { View, Text } from 'react-native';

import { useThemeStore } from '@/stores/useThemeStore';

import { getFontSize } from '@2600hz/commio-native-utilities';

import BadgeStyles from './badge.module.scss';
import type { BadgeProps } from './types';

export function Badge ({
  title,
  disabled = false,
  onPress,
  color,
  bgColor,
  type = 'base',
  size = 'medium',
  styles: propsStyles,
}: BadgeProps) {
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
        BadgeStyles.badge,
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
        Badge
      </Text>
    </View>
  );
}

export default Badge;
