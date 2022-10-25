import * as React from 'react';
import { Linking, Switch, Text, View } from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { ThemeState, useThemeStore } from './stores/useThemeStore';
import type { RootDrawerParamList } from './types';

export const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

export function DrawerFooterContent (props: DrawerContentComponentProps) {
  const mode = useThemeStore((state: ThemeState) => state.mode);
  const toggleTheme = useThemeStore((state: ThemeState) => state.toggleTheme);

  const isEnabled = mode === 'dark';

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        // eslint-disable-next-line no-return-await
        onPress={async () => await Linking.openURL('https://www.google.com')}
      />

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isEnabled}
        />
        <Text>Dark Mode</Text>
      </View>
    </DrawerContentScrollView>
  );
}
