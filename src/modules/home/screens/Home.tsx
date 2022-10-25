import React from 'react';
import { SafeAreaView, ScrollView, Switch, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

// Include this line only into the main file of the project (Probably, an index.js)
// import SdsRest from '@2600hz/sds-core/sds-reset.scss';
// import SdsTools from '@2600hz/sds-core/sds-tools.scss';

import { Button } from '@/components/Button';
import { Example } from '@/modules/tests/Example';
import { themeModes } from '@/providers/theming/utils';
import { ThemeState, useThemeStore } from '@/stores/useThemeStore';
import { HomeScreenProp, MainRoutes } from '@/types';

import { Picker } from '@react-native-picker/picker';

import colors from '../../../providers/theming/colors.module.scss';

export function HomeScreen ({ navigation }: HomeScreenProp) {
  const mode = useThemeStore((state: ThemeState) => state.mode);
  const theme = useThemeStore((state: ThemeState) => state.theme);
  const setMode = useThemeStore((state: ThemeState) => state.setMode);
  const toggleTheme = useThemeStore((state: ThemeState) => state.toggleTheme);

  // const [isEnabled, setIsEnabled] = React.useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // const isDrawerOpen = useDrawerStatus() === 'open';

  const isEnabled = mode === 'dark';

  // console.log({
  //   'btn-example': colors['--sds-example-variable-color'],
  //   themes: colors.themes,
  //   theme: {
  //     background: theme.background,
  //     text: theme.text,
  //     primary: theme.color_primary,
  //   },
  //   mode,
  //   isDrawerOpen,
  // });

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            { borderColor: theme.border },
            colors[`sds-${mode}-example`],
            {
              backgroundColor: theme.background,
              borderColor: theme.border,
            },
          ]}>
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
        <View style={colors['sds-my-own-example']}>
          {/* <View
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
        </View> */}

          <View>
            {/* <Button
              titlePressIn="Turning to Light"
              titlePressOut="You switched to Light"
              onPress={() => setMode('light')}
            />
            <Button
              titlePressIn="Turning to Dark"
              titlePressOut="You switched to Dark"
              onPress={() => setMode('dark')}
            /> */}

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                onValueChange={toggleTheme}
                value={isEnabled}
              />
              <Text>Dark Mode</Text>
            </View>

            <Button
              titlePressIn="Toggling theme"
              titlePressOut="Switch theme"
              onPress={toggleTheme}
            />
          </View>

          <View>
            <Button
              onPress={() => navigation.navigate(MainRoutes.Faxes)}
              title="Going Faxes"
            />
          </View>

          <Example setThemeMode={toggleTheme} />
        </View>
      </ScrollView>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
