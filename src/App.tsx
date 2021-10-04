import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';

// Include this line only into the main file of the project (Probably, an index.js)
// import SdsRest from '@2600hz/sds-core/sds-reset.scss';
// import SdsTools from '@2600hz/sds-core/sds-tools.scss';
// PROBABLY JUST CALL A FUNCTION FROM PROVIDER THAT RETURNS THE THEME
// OR FROM ZUSTAND, SINCE ALL FILES WILL CONVERTED TO OBJECT

import { Picker } from '@react-native-picker/picker';
import {
  createDrawerNavigator,
  useDrawerStatus,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Button } from './components/Button';
import Example from './modules/Example';
import AppThemeProvider from './providers/appThemeProvider';
import colors from './providers/theming/colors.module.scss';
import { themeModes } from './providers/theming/utils';
import { useThemeStore } from './stores/useThemeStore';

// ...
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type RootDrawerParamList = {
  Main: undefined;
  Auth: undefined;
  Home: undefined;
  Notifications: undefined;
};

type HomeScreenProp = DrawerScreenProps<RootDrawerParamList, 'Home'>;
type NotificationsScreenProp = DrawerScreenProps<
RootDrawerParamList,
'Notifications'
>;
type MainScreenProp = DrawerScreenProps<RootDrawerParamList, 'Main'>;

// {
//   navigation: DrawerNavigationProp,
//   router: RouteProp
// }

function HomeScreen ({ navigation }: HomeScreenProp) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        titlePressIn="Going to notifications"
        titlePressOut="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen ({ navigation }: NotificationsScreenProp) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.goBack()}
        titlePressIn="Going back home"
        titlePressOut="Go back home"
        title="Go back home"
      />
    </View>
  );
}

export function Main ({ navigation }: MainScreenProp) {
  const mode = useThemeStore((state) => state.mode);
  const theme = useThemeStore((state) => state.theme);
  const setMode = useThemeStore((state) => state.setMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

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

const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

export default function App () {
  // const [themeMode, setThemeMode] = React.useState<I_ThemeModes>('light');
  // const [theme, setTheme] = React.useState<I_ThemeDefinitionScss>({});

  const mode = useThemeStore((state) => state.mode);
  const theme = useThemeStore((state) => state.theme);

  const isDrawerOpen = useDrawerStatus() === 'open';

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
    <AppThemeProvider mode={mode}>
      <NavigationContainer>
        <RootDrawer.Navigator initialRouteName="Home">
          <RootDrawer.Screen name="Home" component={HomeScreen} />
          <RootDrawer.Screen
            name="Notifications"
            component={NotificationsScreen}
          />
          <RootDrawer.Screen name="Main" component={Main} />
        </RootDrawer.Navigator>
      </NavigationContainer>{' '}
    </AppThemeProvider>
  );
}
