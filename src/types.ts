import type { DrawerScreenProps } from '@react-navigation/drawer';

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
export type RootDrawerParamList = {
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
