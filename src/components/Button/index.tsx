import * as React from 'react';
import { Pressable, Text } from 'react-native';

import { useThemeStore } from '@/stores/useThemeStore';

import ButtonStyles from './button.module.scss';
import type { ButtonProps } from './types';

export function Button ({
  onPress,
  onPressIn,
  onPressOut,
  title,
  titlePressIn,
  titlePressOut,
  styles: propsStyles,
}: ButtonProps) {
  const mode = useThemeStore((state) => state.mode);
  const theme = useThemeStore((state) => state.theme);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={({ pressed }) => [
        ButtonStyles.button,
        pressed ? ButtonStyles.pressIn : ButtonStyles.pressOut,
        propsStyles ?? {},

        // Testing using theme
        // TODO:
        // This doesn't work in React-Native
        // for background-color
        // "linear-gradient(to bottom, #ffffff 0%, #f4f4f5 100%)",
        {
          backgroundColor: pressed
            ? theme.button_primary_background
            : theme.button_interactive_background,
          // : theme.button_background,
        },
      ]}>
      {({ pressed }) => (
        <Text
          style={[
            pressed ? ButtonStyles.titlePressIn : ButtonStyles.titlePressOut,

            // Testing using theme
            { color: pressed ? theme.button_primary_text : theme.button_text },
          ]}>
          {title ?? (pressed ? titlePressIn : titlePressOut)}
        </Text>
      )}
    </Pressable>
  );
}
