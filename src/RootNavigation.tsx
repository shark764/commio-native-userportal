import * as React from 'react';

import { Telicon } from '@2600hz/sds-react-native-components';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerFooterContent } from './DrawerFooterContent';
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
        drawerContent={(props) => <DrawerFooterContent {...props} />}>
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
