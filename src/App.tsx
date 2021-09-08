import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import { SafeAreaView, ScrollView } from 'react-native';

import Example from './modules/Example';
import AppThemeProvider from './providers/appThemeProvider';

export function App () {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
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

  return (
    <AppThemeProvider mode={themeMode}>
      <SafeAreaView>
        <ScrollView>
          <Example setThemeMode={setThemeMode} />
        </ScrollView>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </AppThemeProvider>
  );
}

export default App;
