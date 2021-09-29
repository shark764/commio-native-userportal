import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';

// Include this line only into the main file of the project (Probably, an index.js)
// import SdsRest from '@2600hz/sds-core/sds-reset.scss';
// import SdsTools from '@2600hz/sds-core/sds-tools.scss';

import Example from './modules/Example';
import AppThemeProvider from './providers/appThemeProvider';
import Sdsstyles from './sds.scss';

export function App () {
  const [themeMode, setThemeMode] = useState('light');
  console.log('====================================');
  console.log(Sdsstyles);
  console.log('====================================');

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
          <Text style={Sdsstyles.title}>this is an example of sass</Text>
          <Text style={Sdsstyles.subtitle}>
            this is another example of sass
          </Text>
          <Example setThemeMode={setThemeMode} />
        </ScrollView>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </AppThemeProvider>
  );
}

export default App;
