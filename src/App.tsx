import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppThemeProvider from './providers/appThemeProvider';
import Example from './containers/Example';

export function App () {
  const [themeMode, setThemeMode] = useState('light');

  return (
    <AppThemeProvider mode={themeMode}>
      <SafeAreaView>
        <ScrollView>
          <Example setThemeMode={setThemeMode} />
        </ScrollView>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="dark" />
      </SafeAreaView>
    </AppThemeProvider>
  );
}

export default App;
