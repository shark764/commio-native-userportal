import * as React from 'react';
import { Linking, Switch, Text, View } from 'react-native';

import * as Updates from 'expo-updates';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
// @ts-expect-error
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';

import { Telicon } from '@2600hz/sds-react-native-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createDrawerNavigator,
  DrawerScreenProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { CallHistoryScreen } from './modules/callHistory/screens/CallHistory';
import { ConferencesScreen } from './modules/conferences/screens/Conferences';
import { DevicesAndNumbersScreen } from './modules/devicesAndNumbers/screens/DevicesAndNumbers';
import { FaxesScreen } from './modules/faxes/screens/Faxes';
import { HomeScreen } from './modules/home/screens/Home';
import { QueryExampleScreen } from './modules/tests/Query';
import { VoiceMailsScreen } from './modules/voicemails/screens/VoiceMails';
import AppThemeProvider from './providers/appThemeProvider';
import { QueryProvider } from './providers/query/queryProvider';
import { useThemeStore } from './stores/useThemeStore';

// Include this line only into the main file of the project (Probably, an index.js)
// import SdsRest from '@2600hz/sds-core/sds-reset.scss';
// import SdsTools from '@2600hz/sds-core/sds-tools.scss';
// PROBABLY JUST CALL A FUNCTION FROM PROVIDER THAT RETURNS THE THEME
// OR FROM ZUSTAND, SINCE ALL FILES WILL CONVERTED TO OBJECT

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type RootDrawerParamList = {
  Home: undefined;
  VoiceMails: undefined;
  CallHistory: undefined;
  DevicesAndNumbers: undefined;
  Faxes: undefined;
  Conferences: undefined;
  QueryExample: undefined;
};

export type HomeScreenProp = DrawerScreenProps<RootDrawerParamList, 'Home'>;
export type VoiceMailsScreenProp = DrawerScreenProps<
RootDrawerParamList,
'VoiceMails'
>;
export type CallHistoryScreenProp = DrawerScreenProps<
RootDrawerParamList,
'CallHistory'
>;
export type DevicesAndNumbersScreenProp = DrawerScreenProps<
RootDrawerParamList,
'DevicesAndNumbers'
>;
export type FaxesScreenProp = DrawerScreenProps<RootDrawerParamList, 'Faxes'>;
export type ConferencesScreenProp = DrawerScreenProps<
RootDrawerParamList,
'Conferences'
>;

const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

function CustomDrawerContent (props: DrawerContentComponentProps) {
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

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

export default function App () {
  const mode = useThemeStore((state) => state.mode);

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

  React.useEffect(() => {
    // For Flipper asyncstorage monitoring
    RNAsyncStorageFlipper(AsyncStorage);
  }, [mode]);

  return (
    <>
      <QueryProvider>
        <AppThemeProvider mode={mode}>
          <NavigationContainer>
            <RootDrawer.Navigator
              initialRouteName="Home"
              // screenOptions={({ navigation, route }) => ({
              //   headerLeft: (props) => (
              //     <Text onPress={() => navigation.openDrawer()}>
              //       <Telicon name="arrow-target-right" size="small" />
              //     </Text>
              //   ),
              // })}
              drawerContent={(props) => <CustomDrawerContent {...props} />}>
              <RootDrawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  drawerIcon: (props) => <Telicon name="home" size="small" />,
                }}
              />
              <RootDrawer.Screen
                name="VoiceMails"
                component={VoiceMailsScreen}
                options={{
                  drawerIcon: (props) => (
                    <Telicon name="voicemail" size="small" />
                  ),
                }}
              />
              <RootDrawer.Screen
                name="CallHistory"
                component={CallHistoryScreen}
                options={{
                  drawerIcon: (props) => <Telicon name="list" size="small" />,
                }}
              />
              <RootDrawer.Screen
                name="DevicesAndNumbers"
                component={DevicesAndNumbersScreen}
                options={{
                  drawerIcon: (props) => (
                    <Telicon name="device-voip-phone" size="small" />
                  ),
                }}
              />
              <RootDrawer.Screen
                name="Faxes"
                component={FaxesScreen}
                options={{
                  drawerIcon: (props) => (
                    <Telicon name="device-fax" size="small" />
                  ),
                }}
              />
              <RootDrawer.Screen
                name="Conferences"
                component={ConferencesScreen}
                options={{
                  drawerIcon: (props) => (
                    <Telicon name="user-group" size="small" />
                  ),
                }}
              />
              <RootDrawer.Screen
                name="QueryExample"
                component={QueryExampleScreen}
                options={{
                  drawerIcon: (props) => (
                    <Telicon name="db-storage" size="small" />
                  ),
                }}
              />
            </RootDrawer.Navigator>
          </NavigationContainer>
        </AppThemeProvider>
      </QueryProvider>

      <FlipperAsyncStorage />
    </>
  );
}
