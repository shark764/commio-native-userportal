import * as React from 'react';

import * as Updates from 'expo-updates';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
// @ts-expect-error
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import { AppThemeProvider } from './providers/appThemeProvider';
import { QueryProvider } from './providers/query/queryProvider';
import { RootNavigation } from './RootNavigation';
import { useThemeStore } from './stores/useThemeStore';

// Include this line only into the main file of the project (Probably, an index.js)
// import SdsRest from '@2600hz/sds-core/sds-reset.scss';
// import SdsTools from '@2600hz/sds-core/sds-tools.scss';
// PROBABLY JUST CALL A FUNCTION FROM PROVIDER THAT RETURNS THE THEME
// OR FROM ZUSTAND, SINCE ALL FILES WILL CONVERTED TO OBJECT

export enum MainRoutes {
  Splash = 'Splash',
  Loading = 'Loading',
  Settings = 'Settings',
  Home = 'Home',
  VoiceMails = 'VoiceMails',
  CallHistory = 'CallHistory',
  DevicesAndNumbers = 'DevicesAndNumbers',
  Faxes = 'Faxes',
  Conferences = 'Conferences',
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type RootDrawerParamList = {
  [MainRoutes.Splash]: undefined;
  [MainRoutes.Loading]: undefined;
  [MainRoutes.Settings]: undefined;
  [MainRoutes.Home]: { update: boolean; } | undefined; // "update" will be used for version checks
  [MainRoutes.VoiceMails]: undefined;
  [MainRoutes.CallHistory]: undefined;
  [MainRoutes.DevicesAndNumbers]: undefined;
  [MainRoutes.Faxes]: undefined;
  [MainRoutes.Conferences]: undefined;
  QueryExample: undefined;
};

export type HomeScreenProp = DrawerScreenProps<
RootDrawerParamList,
MainRoutes.Home
>;
export type VoiceMailsScreenProp = DrawerScreenProps<
RootDrawerParamList,
MainRoutes.VoiceMails
>;
export type CallHistoryScreenProp = DrawerScreenProps<
RootDrawerParamList,
MainRoutes.CallHistory
>;
export type DevicesAndNumbersScreenProp = DrawerScreenProps<
RootDrawerParamList,
MainRoutes.DevicesAndNumbers
>;
export type FaxesScreenProp = DrawerScreenProps<
RootDrawerParamList,
MainRoutes.Faxes
>;
export type ConferencesScreenProp = DrawerScreenProps<
RootDrawerParamList,
MainRoutes.Conferences
>;

export const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

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
          <RootNavigation />
        </AppThemeProvider>
      </QueryProvider>

      <FlipperAsyncStorage />
    </>
  );
}
