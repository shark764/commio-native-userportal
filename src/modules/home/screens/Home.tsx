import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

// Include this line only into the main file of the project (Probably, an index.js)
// import SdsRest from '@2600hz/sds-core/sds-reset.scss';
// import SdsTools from '@2600hz/sds-core/sds-tools.scss';
// PROBABLY JUST CALL A FUNCTION FROM PROVIDER THAT RETURNS THE THEME
// OR FROM ZUSTAND, SINCE ALL FILES WILL CONVERTED TO OBJECT

import { Button } from '@/components/Button';
import Example from '@/modules/tests/Example';
import { themeModes } from '@/providers/theming/utils';
import { useThemeStore } from '@/stores/useThemeStore';

import { Picker } from '@react-native-picker/picker';
import { useDrawerStatus, DrawerScreenProps } from '@react-navigation/drawer';

import colors from '../../../providers/theming/colors.module.scss';

// ...
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type RootDrawerParamList = {
  Home: undefined;
  Auth: undefined;
  Notifications: undefined;
};

type HomeScreenProp = DrawerScreenProps<RootDrawerParamList, 'Home'>;

export function HomeScreen ({ navigation }: HomeScreenProp) {
  const mode = useThemeStore((state) => state.mode);
  const theme = useThemeStore((state) => state.theme);
  const setMode = useThemeStore((state) => state.setMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const isDrawerOpen = useDrawerStatus() === 'open';

  console.log({
    'btn-example': colors['--sds-example-variable-color'],
    themes: colors.themes,
    theme: {
      background: theme.background,
      text: theme.text,
      primary: theme.color_primary,
    },
    mode,
    isDrawerOpen,
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[{ borderColor: theme.border }]}>
          <Picker
            selectedValue={mode}
            onValueChange={(itemValue) => setMode(itemValue)}
            style={{
              backgroundColor: theme.background,
              borderColor: theme.border,
              color: theme.color_primary,
            }}>
            {themeModes.map((tMode) => (
              <Picker.Item
                style={{ color: theme.color_primary }}
                key={tMode}
                label={tMode}
                value={tMode}
              />
            ))}
          </Picker>
        </View>

        <View
          style={[
            colors[`sds-${mode}-example`],
            {
              backgroundColor: theme.background,
              borderColor: theme.border,
            },
          ]}>
          <Text style={[{ color: theme.color_primary }]}>
            Hey I amm in {mode} mode!
          </Text>
        </View>

        <View style={colors['sds-my-own-example']}>
          <Button
            titlePressIn="Turning to Light"
            titlePressOut="You switched to Light"
            onPress={() => setMode('light')}
          />
          <Button
            titlePressIn="Turning to Dark"
            titlePressOut="You switched to Dark"
            onPress={() => setMode('dark')}
          />
          <Button
            titlePressIn="Toggling theme"
            titlePressOut="Switch theme"
            onPress={toggleTheme}
          />
        </View>

        <View>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="Going home"
          />
        </View>

        <Example setThemeMode={toggleTheme} />
      </ScrollView>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
