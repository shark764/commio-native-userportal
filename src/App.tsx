import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';

// Include this line only into the main file of the project (Probably, an index.js)
// import SdsRest from '@2600hz/sds-core/sds-reset.scss';
// import SdsTools from '@2600hz/sds-core/sds-tools.scss';
// PROBABLY JUST CALL A FUNCTION FROM PROVIDER THAT RETURNS THE THEME
// OR FROM ZUSTAND, SINCE ALL FILES WILL CONVERTED TO OBJECT

import { Picker } from '@react-native-picker/picker';

import { Button } from './components/Button';
import Example from './modules/Example';
import AppThemeProvider from './providers/appThemeProvider';
import colors from './providers/theming/colors.module.scss';
import { themeModes } from './providers/theming/utils';
import { useThemeStore } from './stores/useThemeStore';

export function App () {
  // const [themeMode, setThemeMode] = React.useState<I_ThemeModes>('light');
  // const [theme, setTheme] = React.useState<I_ThemeDefinitionScss>({});

  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  console.log({
    'btn-example': colors['--sds-example-variable-color'],
    themes: colors.themes,
    theme,
    mode,
  });

  React.useEffect(() => {
    async function updateApp () {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    // eslint-disable-next-line no-void
    void updateApp();
  }, []);

  // React.useEffect(() => {
  //   setTheme(getTheme(mode));
  // }, [mode]);

  return (
    <AppThemeProvider mode={mode}>
      <SafeAreaView>
        <ScrollView>
          <View style={[{ borderColor: theme.border }]}>
            <Picker
              selectedValue={mode}
              onValueChange={(itemValue) => toggleTheme(itemValue)}
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
              onPress={() => toggleTheme('light')}
            />
            <Button
              titlePressIn="Turning to Dark"
              titlePressOut="You switched to Dark"
              onPress={() => toggleTheme('dark')}
            />
            <Button
              titlePressIn="Toggling theme"
              titlePressOut="Switch theme"
              onPress={toggleTheme}
            />
          </View>

          <Example setThemeMode={toggleTheme} />
        </ScrollView>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </AppThemeProvider>
  );
}

export default App;
