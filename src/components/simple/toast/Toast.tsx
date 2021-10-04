import * as React from 'react';
import { View, Text } from 'react-native';

import { useThemeStore } from '@/stores/useThemeStore';

import { getFontSize } from '@2600hz/commio-native-utilities';

import ToastStyles from './toast.module.scss';
import type { ToastProps } from './types';

export function Toast ({
  title,
  disabled = false,
  onPress,
  color,
  bgColor,
  type = 'base',
  size = 'medium',
  styles: propsStyles,
}: ToastProps) {
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
        ToastStyles.toast,
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
        Toast
      </Text>
    </View>
  );
}

export default Toast;
