import * as React from 'react';

import * as Updates from 'expo-updates';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
// @ts-expect-error
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useTheme } from './hooks/useTheme';
import { AppThemeProvider } from './providers/appThemeProvider';
import { QueryProvider } from './providers/query/queryProvider';
import { RootNavigation } from './RootNavigation';

export default function App () {
  const { mode } = useTheme();

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
