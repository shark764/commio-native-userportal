import * as React from 'react';
import { Linking, Switch, Text, View } from 'react-native';

import { Telicon } from '@2600hz/sds-react-native-components';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from './hooks/useTheme';
import { CallHistoryScreen } from './modules/callHistory/screens/CallHistory';
import { ConferencesScreen } from './modules/conferences/screens/Conferences';
import { DevicesAndNumbersScreen } from './modules/devicesAndNumbers/screens/DevicesAndNumbers';
import { FaxesScreen } from './modules/faxes/screens/Faxes';
import { HomeScreen } from './modules/home/screens/Home';
import { QueryExampleScreen } from './modules/tests/Query';
import { VoiceMailsScreen } from './modules/voicemails/screens/VoiceMails';
import { MainRoutes, RootDrawerParamList } from './types';

// Include this line only into the main file of the project (Probably, an index.js)
// import SdsRest from '@2600hz/sds-core/sds-reset.scss';
// import SdsTools from '@2600hz/sds-core/sds-tools.scss';
// PROBABLY JUST CALL A FUNCTION FROM PROVIDER THAT RETURNS THE THEME
// OR FROM ZUSTAND, SINCE ALL FILES WILL CONVERTED TO OBJECT

export const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

function CustomDrawerContent (props: DrawerContentComponentProps) {
  const { mode, toggleTheme } = useTheme();

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

export function RootNavigation () {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator
        initialRouteName={MainRoutes.Home}
        // screenOptions={({ navigation, route }) => ({
        //   headerLeft: (props) => (
        //     <Text onPress={() => navigation.openDrawer()}>
        //       <Telicon name="arrow-target-right" size="small" />
        //     </Text>
        //   ),
        // })}
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <RootDrawer.Screen
          name={MainRoutes.Home}
          component={HomeScreen}
          options={{
            drawerIcon: () => <Telicon name="home" size="small" />,
          }}
        />
        <RootDrawer.Screen
          name={MainRoutes.VoiceMails}
          component={VoiceMailsScreen}
          options={{
            drawerIcon: () => <Telicon name="voicemail" size="small" />,
          }}
        />
        <RootDrawer.Screen
          name={MainRoutes.CallHistory}
          component={CallHistoryScreen}
          options={{
            drawerIcon: () => <Telicon name="list" size="small" />,
          }}
        />
        <RootDrawer.Screen
          name={MainRoutes.DevicesAndNumbers}
          component={DevicesAndNumbersScreen}
          options={{
            drawerIcon: () => <Telicon name="device-voip-phone" size="small" />,
          }}
        />
        <RootDrawer.Screen
          name={MainRoutes.Faxes}
          component={FaxesScreen}
          options={{
            drawerIcon: () => <Telicon name="device-fax" size="small" />,
          }}
        />
        <RootDrawer.Screen
          name={MainRoutes.Conferences}
          component={ConferencesScreen}
          options={{
            drawerIcon: () => <Telicon name="user-group" size="small" />,
          }}
        />
        <RootDrawer.Screen
          name="QueryExample"
          component={QueryExampleScreen}
          options={{
            drawerIcon: () => <Telicon name="db-storage" size="small" />,
          }}
        />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}
